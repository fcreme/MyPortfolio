#!/bin/sh
# Rebuilds the CV and its hover preview from cv.html, using headless Chrome (macOS paths).
#   public/Felipe_Cremerius_CV.pdf  US Letter, one page, selectable text
#   public/cv-preview.jpg           340x440, the page at 2x of the 170x220 hover card
set -eu

ROOT=$(cd "$(dirname "$0")/../.." && pwd)
CHROME=${CHROME:-"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"}
SRC="file://$ROOT/scripts/cv/cv.html"
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

"$CHROME" --headless=new --disable-gpu --user-data-dir="$TMP/profile" \
  --no-pdf-header-footer --print-to-pdf="$ROOT/public/Felipe_Cremerius_CV.pdf" "$SRC" 2>/dev/null

"$CHROME" --headless=new --disable-gpu --user-data-dir="$TMP/profile" \
  --window-size=816,1056 --force-device-scale-factor=2 --hide-scrollbars \
  --screenshot="$TMP/page.png" "$SRC" 2>/dev/null

sips -s format jpeg -s formatOptions 85 -z 440 340 "$TMP/page.png" --out "$ROOT/public/cv-preview.jpg" >/dev/null
