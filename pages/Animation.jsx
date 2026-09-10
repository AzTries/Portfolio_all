import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ComingSoon.css';

export default function Animation() {
  const navigate = useNavigate();

  return (
    <div className="frame">
      <button className="back" onClick={() => navigate('/')}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Index
      </button>
      <div className="soon-wrap">
        <span className="soon-tag">In progress</span>
        <h2>Animation</h2>
        <p>Motion design and animated sequences — this section is being put together. 3D renders, motion graphics, and animation work will live here soon.</p>
      </div>
    </div>
  );
}