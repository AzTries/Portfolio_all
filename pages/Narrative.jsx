import React from 'react';
import '../styles/ComingSoon.css';

export default function Narrative({ onNavigate }) {
  return (
    <div className="frame">
      <button className="back" onClick={() => onNavigate('index')}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Index
      </button>
      <div className="soon-wrap">
        <span className="soon-tag">In progress</span>
        <h2>Narrative Design</h2>
        <p>Fiction, character dynamics, and world systems &amp; logic — including story one-pagers. This section is being put together.</p>
        <ul className="soon-list">
          <li>One-pagers</li>
          <li>Character profiles</li>
          <li>World systems &amp; logic</li>
        </ul>
      </div>
    </div>
  );
}