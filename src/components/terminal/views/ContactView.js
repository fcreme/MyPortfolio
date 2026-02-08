import React from 'react';
import { Line, Empty } from '../Line';

const ContactView = ({ contactForm, onFormChange, onSubmit, onFocus, onBlur, formStatus }) => {
  return (
    <div className="content-view">
      <Line n={1}>
        <span className="syn-comment">#!/bin/bash</span>
      </Line>
      <Line n={2}>
        <span className="syn-comment"># contact.sh — Send me a message</span>
      </Line>
      <Empty n={3} />
      <Line n={4}>
        <span className="syn-command">echo</span>
        <span className="syn-string"> "==================================="</span>
      </Line>
      <Line n={5}>
        <span className="syn-command">echo</span>
        <span className="syn-string"> "  Contact Felipe Cremerius"</span>
      </Line>
      <Line n={6}>
        <span className="syn-command">echo</span>
        <span className="syn-string"> "==================================="</span>
      </Line>
      <Empty n={7} />
      <Line n={8}>
        <span className="syn-comment"># Contact information</span>
      </Line>
      <Line n={9}>
        <span className="syn-variable">EMAIL</span>
        <span className="syn-operator">=</span>
        <span className="syn-string">"felipecremerius1@gmail.com"</span>
      </Line>
      <Line n={10}>
        <span className="syn-variable">PHONE</span>
        <span className="syn-operator">=</span>
        <span className="syn-string">"+54 11 6200 7718"</span>
      </Line>
      <Line n={11}>
        <span className="syn-variable">LOCATION</span>
        <span className="syn-operator">=</span>
        <span className="syn-string">"Buenos Aires, Argentina"</span>
      </Line>
      <Empty n={12} />
      <Line n={13}>
        <span className="syn-comment"># Fill in the form below:</span>
      </Line>
      <Empty n={14} />
      <Line n={15}>
        <div className="terminal-input-line">
          <span className="syn-command">read </span>
          <span className="syn-flag">-p </span>
          <span className="syn-string">"Your name: " </span>
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
          <span className="syn-command">read </span>
          <span className="syn-flag">-p </span>
          <span className="syn-string">"Your email: " </span>
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
          <span className="syn-command">read </span>
          <span className="syn-flag">-p </span>
          <span className="syn-string">"Subject: " </span>
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
          <span className="syn-command">read </span>
          <span className="syn-flag">-p </span>
          <span className="syn-string">"Message: " </span>
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
          <span className="syn-command">./send_message.sh</span>
          <span className="syn-comment"> # click to send</span>
        </span>
      </Line>
      <Empty n={21} />
      {formStatus === 'sending' && (
        <Line n={22}>
          <span className="form-status">Sending message...</span>
        </Line>
      )}
      {formStatus === 'sent' && (
        <Line n={22}>
          <span className="form-status">Message sent successfully! I'll respond soon.</span>
        </Line>
      )}
      {formStatus === 'error' && (
        <Line n={22}>
          <span className="form-status error">Error sending message. Please try again.</span>
        </Line>
      )}
    </div>
  );
};

export default ContactView;
