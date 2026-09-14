import React, { useState } from 'react';
import { Line, Empty } from '../Line';
import { SpecialText } from '../../ui/special-text';

// Off-screen but present: implicit form submission needs a real submit button,
// and a screen reader needs the status as text rather than a typed-out animation.
const SR_ONLY = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
  border: 0,
};

const STATUS_MESSAGES = {
  sending: 'Sending message...',
  sent: "Message sent successfully! I'll respond soon.",
  unconfigured: 'Form is offline \u2014 email felipecremerius1@gmail.com directly.',
  'invalid-email': "That email address doesn't look right.",
  incomplete: 'Fill in your name, your email and a message before sending.',
  error: 'Error sending message. Please try again.',
};

const ContactView = ({ contactForm, onFormChange, onSubmit, onFocus, onBlur, formStatus }) => {
  const [fieldsReady, setFieldsReady] = useState({});
  let n = 0;
  const l = () => ++n;
  let d = 0;
  const next = (step = 0.03) => { d += step; return d; };

  const showField = (name) => setFieldsReady(prev => ({ ...prev, [name]: true }));

  return (
    <div className="content-view">
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-comment">#!/bin/bash</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-comment"># contact.sh — Send me a message</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-command">echo</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-string">{' "==================================="'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-command">echo</SpecialText>
        <SpecialText speed={8} delay={next(0.005)} className="syn-string">{' "  Contact Felipe Cremerius"'}</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-command">echo</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-string">{' "==================================="'}</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-comment"># Contact information</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-variable">EMAIL</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-operator">=</SpecialText>
        <SpecialText speed={6} delay={next(0.01)} className="syn-string">"felipecremerius1@gmail.com"</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-variable">PHONE</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-operator">=</SpecialText>
        <SpecialText speed={6} delay={next(0.01)} className="syn-string">"+54 11 6200 7718"</SpecialText>
      </Line>
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-variable">LOCATION</SpecialText>
        <SpecialText speed={5} delay={next(0.005)} className="syn-operator">=</SpecialText>
        <SpecialText speed={6} delay={next(0.01)} className="syn-string">"Worldwide"</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-comment"># Fill in the form below:</SpecialText>
      </Line>
      <Empty n={l()} />
      <form
        noValidate
        style={{ display: 'contents' }}
        onSubmit={(e) => { e.preventDefault(); onSubmit(); }}
      >
      <Line n={l()}>
        <div className="terminal-input-line">
          <SpecialText speed={5} delay={next()} className="syn-command">{'read '}</SpecialText>
          <SpecialText speed={5} delay={next(0.005)} className="syn-flag">{'-p '}</SpecialText>
          <SpecialText speed={5} delay={next(0.01)} className="syn-string" onComplete={() => showField('name')}>{"\"Your name: \" "}</SpecialText>
          <input
            className="terminal-input"
            type="text"
            name="name"
            aria-label="Your name"
            autoComplete="name"
            aria-required="true"
            value={contactForm.name}
            onChange={onFormChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder="type here..."
            style={fieldsReady.name ? undefined : { visibility: 'hidden' }}
          />
        </div>
      </Line>
      <Line n={l()}>
        <div className="terminal-input-line">
          <SpecialText speed={5} delay={next()} className="syn-command">{'read '}</SpecialText>
          <SpecialText speed={5} delay={next(0.005)} className="syn-flag">{'-p '}</SpecialText>
          <SpecialText speed={5} delay={next(0.01)} className="syn-string" onComplete={() => showField('email')}>{"\"Your email: \" "}</SpecialText>
          <input
            className="terminal-input"
            type="email"
            name="email"
            aria-label="Your email"
            autoComplete="email"
            aria-required="true"
            value={contactForm.email}
            onChange={onFormChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder="type here..."
            style={fieldsReady.email ? undefined : { visibility: 'hidden' }}
          />
        </div>
      </Line>
      <Line n={l()}>
        <div className="terminal-input-line">
          <SpecialText speed={5} delay={next()} className="syn-command">{'read '}</SpecialText>
          <SpecialText speed={5} delay={next(0.005)} className="syn-flag">{'-p '}</SpecialText>
          <SpecialText speed={5} delay={next(0.01)} className="syn-string" onComplete={() => showField('subject')}>{"\"Subject: \" "}</SpecialText>
          <input
            className="terminal-input"
            type="text"
            name="subject"
            aria-label="Subject"
            autoComplete="off"
            value={contactForm.subject}
            onChange={onFormChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder="type here..."
            style={fieldsReady.subject ? undefined : { visibility: 'hidden' }}
          />
        </div>
      </Line>
      <Line n={l()}>
        <div className="terminal-input-line multiline">
          <SpecialText speed={5} delay={next()} className="syn-command">{'read '}</SpecialText>
          <SpecialText speed={5} delay={next(0.005)} className="syn-flag">{'-p '}</SpecialText>
          <SpecialText speed={5} delay={next(0.01)} className="syn-string" onComplete={() => showField('message')}>{"\"Message: \" "}</SpecialText>
          <textarea
            className="terminal-textarea"
            name="message"
            aria-label="Message"
            autoComplete="off"
            aria-required="true"
            rows={3}
            value={contactForm.message}
            onChange={onFormChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder="type here..."
            style={fieldsReady.message ? undefined : { visibility: 'hidden' }}
          />
        </div>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <span
          className="submit-line"
          onClick={onSubmit}
          role="button"
          tabIndex={0}
          aria-disabled={formStatus === 'sending'}
          onKeyDown={(e) => {
            // a role=button has to answer Space as well as Enter
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSubmit(); }
          }}
        >
          <SpecialText speed={6} delay={next()} className="syn-command">./send_message.sh</SpecialText>
          <SpecialText speed={5} delay={next(0.01)} className="syn-comment">{' # click to send'}</SpecialText>
        </span>
        <button type="submit" tabIndex={-1} aria-hidden="true" style={SR_ONLY} />
      </Line>
      </form>
      <Empty n={l()} />
      {formStatus === 'sending' && (
        <Line n={l()}>
          <SpecialText speed={8} delay={0} className="form-status">Sending message...</SpecialText>
        </Line>
      )}
      {formStatus === 'sent' && (
        <Line n={l()}>
          <SpecialText speed={8} delay={0} className="form-status">{"Message sent successfully! I'll respond soon."}</SpecialText>
        </Line>
      )}
      {formStatus === 'unconfigured' && (
        <Line n={l()}>
          <SpecialText speed={8} delay={0} className="form-status error">{'Form is offline — email felipecremerius1@gmail.com directly.'}</SpecialText>
        </Line>
      )}
      {formStatus === 'invalid-email' && (
        <Line n={l()}>
          <SpecialText speed={8} delay={0} className="form-status error">{"That email address doesn't look right."}</SpecialText>
        </Line>
      )}
      {formStatus === 'incomplete' && (
        <Line n={l()}>
          <SpecialText speed={8} delay={0} className="form-status error">{STATUS_MESSAGES.incomplete}</SpecialText>
        </Line>
      )}
      {formStatus === 'error' && (
        <Line n={l()}>
          <SpecialText speed={8} delay={0} className="form-status error">Error sending message. Please try again.</SpecialText>
        </Line>
      )}
      <span role="status" aria-live="polite" style={SR_ONLY}>
        {STATUS_MESSAGES[formStatus] || ''}
      </span>
    </div>
  );
};

export default ContactView;
