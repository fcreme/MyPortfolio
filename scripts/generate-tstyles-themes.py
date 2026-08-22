#!/usr/bin/env python3
"""
Turn the TerminalStyles colour schemes into site themes.

`tstyles-palettes.json` is lifted straight from github.com/fcreme/TerminalStyles
(styles/<name>/scheme.json plus the blurb from its README). Each scheme is a
20-colour ANSI palette; the site wants 54 semantic CSS variables. The mapping
below is read off the three hand-written themes already in NeovimTerminal.css:
the translucent variables are the theme's own foreground at low alpha, not
white, which is what keeps a warm palette warm.

Regenerate with:  python3 scripts/generate-tstyles-themes.py
"""
import json, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
DATA = json.load(open(os.path.join(HERE, 'tstyles-palettes.json')))

def rgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

def hexs(c):
    return '#%02x%02x%02x' % tuple(max(0, min(255, round(x))) for x in c)

def mix(a, b, t):
    """t=0 -> a, t=1 -> b"""
    return tuple(a[i] + (b[i] - a[i]) * t for i in range(3))

def rgba(c, a):
    r, g, b = (round(x) for x in c)
    return f'rgba({r}, {g}, {b}, {a})'

def luminance(c):
    def ch(v):
        v /= 255
        return v / 12.92 if v <= 0.03928 else ((v + 0.055) / 1.055) ** 2.4
    r, g, b = (ch(x) for x in c)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b

def contrast(a, b):
    la, lb = luminance(a), luminance(b)
    hi, lo = max(la, lb), min(la, lb)
    return (hi + 0.05) / (lo + 0.05)

def readable(c, bg, target):
    """Lift a colour toward white until it clears `target` contrast on bg."""
    if contrast(c, bg) >= target:
        return c
    for t in [i / 40 for i in range(1, 41)]:
        lifted = mix(c, (255, 255, 255), t)
        if contrast(lifted, bg) >= target:
            return lifted
    return (255, 255, 255)

def build(scheme, entry, name):
    S = {k: rgb(v) for k, v in scheme.items() if isinstance(v, str) and v.startswith('#')}
    bg, fg = S['background'], S['foreground']
    fg = readable(fg, bg, 7.0)

    # Syntax colours must stay legible on this background.
    def syn(key, target=4.0):
        return hexs(readable(S[key], bg, target))

    darker = mix(bg, (0, 0, 0), 0.35)
    lighter = mix(bg, fg, 0.10)
    blue, green = S['brightBlue'], S['brightGreen']

    # theme.json carries these; the site had no way to express them until now.
    weight = '600' if entry.get('weight') == 'semi-bold' else '400'
    # Every bundled style asks for Cascadia Code in its theme.json, so use it
    # and fall back to the site's own stack if the webfont has not arrived.
    face = "'Cascadia Code Variable', 'JetBrains Mono', 'Fira Code', 'Consolas', monospace"
    bg_opacity = entry.get('bgOpacity', 1.0)
    # The artwork each style pairs itself with, as the animated GIF it ships --
    # a still frame is not what the style is. sober ships a solid square rather
    # than a picture: it is meant to have no backdrop at all.
    has_image = os.path.isfile(os.path.join(ROOT, 'src/assets/themes', f'{name}.gif'))
    bg_image = f"url(../assets/themes/{name}.gif)" if has_image else 'none'
    # A wash in the theme's own colours over the background image, so switching
    # style changes the whole page rather than only the text on top of it.
    accent = readable(blue, bg, 3.0)
    # Light: the style's own backgroundImageOpacity already dims the artwork,
    # and the artwork is chosen to match the palette. This only has to settle
    # the image behind the text, not hide it.
    tint = (f'linear-gradient(155deg, {rgba(bg, 0.28)} 0%, '
            f'{rgba(mix(bg, accent, 0.3), 0.34)} 55%, {rgba(bg, 0.5)} 100%)')

    return {
        '--nvim-font': face,
        '--nvim-font-weight': weight,
        '--nvim-bg-image': bg_image,
        '--nvim-bg-image-opacity': f'{bg_opacity}',
        '--nvim-bg-tint': tint,
        '--nvim-bg': hexs(bg),
        '--nvim-bg-transparent': rgba(bg, 0.75),
        '--nvim-bg-sidebar': rgba(darker, 0.75),
        '--nvim-bg-titlebar': rgba(darker, 0.8),
        '--nvim-bg-overlay': rgba(darker, 0.88),
        '--nvim-bg-overlay-deep': rgba(darker, 0.95),
        '--nvim-bg-commandline': rgba(lighter, 0.85),
        '--nvim-bg-statusbar': rgba(mix(fg, bg, 0.18), 0.95),
        '--nvim-bg-telescope': rgba(bg, 0.96),
        '--nvim-bg-hover': rgba(fg, 0.06),
        '--nvim-bg-active': rgba(fg, 0.1),
        '--nvim-bg-cursor-line': rgba(fg, 0.05),
        '--nvim-bg-selected': rgba(readable(blue, bg, 3.0), 0.15),
        '--nvim-bg-selected-hover': rgba(readable(blue, bg, 3.0), 0.2),
        '--nvim-fg': hexs(fg),
        '--nvim-fg-dim': rgba(fg, 0.5),
        '--nvim-fg-dimmer': rgba(fg, 0.35),
        '--nvim-fg-dimmest': rgba(fg, 0.2),
        '--nvim-fg-faint': rgba(fg, 0.15),
        '--nvim-fg-ghost': rgba(fg, 0.06),
        '--nvim-fg-current': rgba(fg, 0.85),
        '--nvim-fg-bright': hexs(readable(S['brightWhite'], bg, 7.0)),
        '--nvim-fg-muted': hexs(mix(fg, bg, 0.3)),
        '--nvim-fg-subtle': rgba(fg, 0.45),
        '--nvim-fg-statusbar': hexs(bg),
        '--nvim-border': rgba(fg, 0.06),
        '--nvim-border-strong': rgba(fg, 0.1),
        '--nvim-border-stronger': rgba(fg, 0.18),
        '--nvim-keyword': syn('brightPurple'),
        '--nvim-string': syn('brightGreen'),
        '--nvim-function': syn('brightYellow'),
        '--nvim-type': syn('brightBlue'),
        '--nvim-comment': hexs(readable(S['brightBlack'], bg, 2.6)),
        '--nvim-tag': syn('brightRed'),
        '--nvim-heading': syn('brightBlue', 4.5),
        '--nvim-heading-marker': syn('blue', 3.0),
        '--nvim-link': syn('blue', 3.5),
        '--nvim-link-hover': syn('brightBlue', 4.5),
        '--nvim-bold': hexs(readable(S['brightWhite'], bg, 7.0)),
        '--nvim-italic': hexs(mix(fg, bg, 0.15)),
        '--nvim-netrw-comment': syn('yellow', 3.0),
        '--nvim-netrw-dir': syn('brightCyan'),
        '--nvim-tilde': hexs(mix(bg, readable(blue, bg, 3.0), 0.35)),
        '--nvim-cursor-bg': rgba(fg, 0.7),
        '--nvim-dot-red': syn('red', 2.5),
        '--nvim-dot-yellow': syn('yellow', 2.5),
        '--nvim-dot-green': syn('green', 2.5),
        '--nvim-mode-normal': syn('brightBlue', 4.0),
        '--nvim-mode-insert': syn('brightGreen', 4.0),
        '--nvim-error': syn('brightRed', 4.0),
        '--nvim-dashboard-ascii': syn('brightBlue', 4.5),
        '--nvim-lazy-title': syn('brightPurple', 4.0),
        '--nvim-lazy-loading': syn('brightYellow', 4.0),
        '--nvim-submit-hover': syn('brightCyan', 4.5),
    }

def blurb(entry):
    if entry['quote']:
        return entry['quote']
    d = re.split(r'(?<=[.!?]) ', entry['desc'])[0] if entry['desc'] else ''
    return d.rstrip('.')

def fit(text, limit=46):
    """The picker gives a blurb one line; trim on a word boundary."""
    if len(text) <= limit:
        return text
    return text[:limit].rsplit(' ', 1)[0].rstrip(',;:-') + '...'

css = [
    '/* Generated by scripts/generate-tstyles-themes.py -- do not edit by hand.',
    ' *',
    ' * The colour schemes that ship with TerminalStyles',
    ' * (github.com/fcreme/TerminalStyles), mapped onto the editor\'s variables so',
    ' * `:tstyles` can preview them the way the real picker does.',
    ' */',
    '',
]
registry = []
for name, entry in DATA.items():
    vars_ = build(entry['scheme'], entry, name)
    css.append(f'[data-theme="{name}"] {{')
    for k, v in vars_.items():
        css.append(f'  {k}: {v};')
    css.append('}')
    css.append('')
    registry.append({
        'id': name,
        'blurb': fit(blurb(entry)),
        'swatch': [vars_['--nvim-tag'], vars_['--nvim-function'], vars_['--nvim-type']],
    })

open(os.path.join(ROOT, 'src/components/tstyles-themes.css'), 'w').write('\n'.join(css))

js = [
    '// Generated by scripts/generate-tstyles-themes.py -- do not edit by hand.',
    '// The styles that ship with github.com/fcreme/TerminalStyles.',
    '',
    'export const TSTYLES_THEMES = [',
]
for r in registry:
    sw = ', '.join(f"'{c}'" for c in r['swatch'])
    blurb = r['blurb'].replace('\\', '\\\\').replace("'", "\\'")
    js.append(f"  {{ id: '{r['id']}', blurb: '{blurb}', swatch: [{sw}] }},")
js += ['];', '']
open(os.path.join(ROOT, 'src/components/terminal/tstylesThemes.js'), 'w').write('\n'.join(js))
print(f'wrote {len(registry)} themes')
for r in registry:
    print(f"  {r['id']:14} {r['swatch']}  {r['blurb'][:44]}")
