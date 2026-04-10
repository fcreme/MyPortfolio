import React, { useState } from 'react';
import { Line, Empty } from '../Line';
import { SpecialText } from '../../ui/special-text';

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
        <SpecialText speed={6} delay={next(0.01)} className="syn-string">"Buenos Aires, Argentina"</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <SpecialText speed={5} delay={next()} className="syn-comment"># Fill in the form below:</SpecialText>
      </Line>
      <Empty n={l()} />
      <Line n={l()}>
        <div className="terminal-input-line">
          <SpecialText speed={5} delay={next()} className="syn-command">{'read '}</SpecialText>
          <SpecialText speed={5} delay={next(0.005)} className="syn-flag">{'-p '}</SpecialText>
          <SpecialText speed={5} delay={next(0.01)} className="syn-string" onComplete={() => showField('name')}>{"\"Your name: \" "}</SpecialText>
          <input
            className="terminal-input"
            type="text"
            name="name"
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
        <div className="terminal-input-line">
          <SpecialText speed={5} delay={next()} className="syn-command">{'read '}</SpecialText>
          <SpecialText speed={5} delay={next(0.005)} className="syn-flag">{'-p '}</SpecialText>
          <SpecialText speed={5} delay={next(0.01)} className="syn-string" onComplete={() => showField('message')}>{"\"Message: \" "}</SpecialText>
          <input
            className="terminal-input"
            type="text"
            name="message"
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
          onKeyDown={(e) => e.key === 'Enter' && onSubmit()}
        >
          <SpecialText speed={6} delay={next()} className="syn-command">./send_message.sh</SpecialText>
          <SpecialText speed={5} delay={next(0.01)} className="syn-comment">{' # click to send'}</SpecialText>
        </span>
      </Line>
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
      {formStatus === 'error' && (
        <Line n={l()}>
          <SpecialText speed={8} delay={0} className="form-status error">Error sending message. Please try again.</SpecialText>
        </Line>
      )}
    </div>
  );
};

export default ContactView;
