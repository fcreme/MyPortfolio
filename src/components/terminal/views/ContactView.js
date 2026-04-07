import React from 'react';
import { Line, Empty } from '../Line';
import { SpecialText } from '../../ui/special-text';

const ContactView = ({ contactForm, onFormChange, onSubmit, onFocus, onBlur, formStatus }) => {
  return (
    <div className="content-view">
      <Line n={1}>
        <SpecialText speed={5} delay={0.05} className="syn-comment">#!/bin/bash</SpecialText>
      </Line>
      <Line n={2}>
        <SpecialText speed={5} delay={0.08} className="syn-comment"># contact.sh — Send me a message</SpecialText>
      </Line>
      <Empty n={3} />
      <Line n={4}>
        <SpecialText speed={5} delay={0.12} className="syn-command">echo</SpecialText>
        <SpecialText speed={5} delay={0.13} className="syn-string">{' "==================================="'}</SpecialText>
      </Line>
      <Line n={5}>
        <SpecialText speed={5} delay={0.16} className="syn-command">echo</SpecialText>
        <SpecialText speed={8} delay={0.17} className="syn-string">{' "  Contact Felipe Cremerius"'}</SpecialText>
      </Line>
      <Line n={6}>
        <SpecialText speed={5} delay={0.2} className="syn-command">echo</SpecialText>
        <SpecialText speed={5} delay={0.21} className="syn-string">{' "==================================="'}</SpecialText>
      </Line>
      <Empty n={7} />
      <Line n={8}>
        <SpecialText speed={5} delay={0.25} className="syn-comment"># Contact information</SpecialText>
      </Line>
      <Line n={9}>
        <SpecialText speed={5} delay={0.28} className="syn-variable">EMAIL</SpecialText>
        <span className="syn-operator">=</span>
        <SpecialText speed={6} delay={0.29} className="syn-string">"felipecremerius1@gmail.com"</SpecialText>
      </Line>
      <Line n={10}>
        <SpecialText speed={5} delay={0.32} className="syn-variable">PHONE</SpecialText>
        <span className="syn-operator">=</span>
        <SpecialText speed={6} delay={0.33} className="syn-string">"+54 11 6200 7718"</SpecialText>
      </Line>
      <Line n={11}>
        <SpecialText speed={5} delay={0.36} className="syn-variable">LOCATION</SpecialText>
        <span className="syn-operator">=</span>
        <SpecialText speed={6} delay={0.37} className="syn-string">"Buenos Aires, Argentina"</SpecialText>
      </Line>
      <Empty n={12} />
      <Line n={13}>
        <SpecialText speed={5} delay={0.4} className="syn-comment"># Fill in the form below:</SpecialText>
      </Line>
      <Empty n={14} />
      <Line n={15}>
        <div className="terminal-input-line">
          <SpecialText speed={5} delay={0.43} className="syn-command">{'read '}</SpecialText>
          <SpecialText speed={5} delay={0.44} className="syn-flag">{'-p '}</SpecialText>
          <SpecialText speed={5} delay={0.45} className="syn-string">{"\"Your name: \" "}</SpecialText>
          <input
            className="terminal-input"
            type="text"
            name="name"
            value={contactForm.name}
            onChange={onFormChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder="type here..."
          />
        </div>
      </Line>
      <Line n={16}>
        <div className="terminal-input-line">
          <SpecialText speed={5} delay={0.48} className="syn-command">{'read '}</SpecialText>
          <SpecialText speed={5} delay={0.49} className="syn-flag">{'-p '}</SpecialText>
          <SpecialText speed={5} delay={0.5} className="syn-string">{"\"Your email: \" "}</SpecialText>
          <input
            className="terminal-input"
            type="email"
            name="email"
            value={contactForm.email}
            onChange={onFormChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder="type here..."
          />
        </div>
      </Line>
      <Line n={17}>
        <div className="terminal-input-line">
          <SpecialText speed={5} delay={0.53} className="syn-command">{'read '}</SpecialText>
          <SpecialText speed={5} delay={0.54} className="syn-flag">{'-p '}</SpecialText>
          <SpecialText speed={5} delay={0.55} className="syn-string">{"\"Subject: \" "}</SpecialText>
          <input
            className="terminal-input"
            type="text"
            name="subject"
            value={contactForm.subject}
            onChange={onFormChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder="type here..."
          />
        </div>
      </Line>
      <Line n={18}>
        <div className="terminal-input-line">
          <SpecialText speed={5} delay={0.58} className="syn-command">{'read '}</SpecialText>
          <SpecialText speed={5} delay={0.59} className="syn-flag">{'-p '}</SpecialText>
          <SpecialText speed={5} delay={0.6} className="syn-string">{"\"Message: \" "}</SpecialText>
          <input
            className="terminal-input"
            type="text"
            name="message"
            value={contactForm.message}
            onChange={onFormChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder="type here..."
          />
        </div>
      </Line>
      <Empty n={19} />
      <Line n={20}>
        <span
          className="submit-line"
          onClick={onSubmit}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onSubmit()}
        >
          <SpecialText speed={6} delay={0.65} className="syn-command">./send_message.sh</SpecialText>
          <SpecialText speed={5} delay={0.68} className="syn-comment">{' # click to send'}</SpecialText>
        </span>
      </Line>
      <Empty n={21} />
      {formStatus === 'sending' && (
        <Line n={22}>
          <SpecialText speed={8} delay={0} className="form-status">Sending message...</SpecialText>
        </Line>
      )}
      {formStatus === 'sent' && (
        <Line n={22}>
          <SpecialText speed={8} delay={0} className="form-status">{"Message sent successfully! I'll respond soon."}</SpecialText>
        </Line>
      )}
      {formStatus === 'error' && (
        <Line n={22}>
          <SpecialText speed={8} delay={0} className="form-status error">Error sending message. Please try again.</SpecialText>
        </Line>
      )}
    </div>
  );
};

export default ContactView;
