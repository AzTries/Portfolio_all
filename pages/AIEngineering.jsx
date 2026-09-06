import React, { useState, useEffect } from 'react';
import '../styles/AIEngineering.css';

export default function AIEngineering({ onNavigate }) {
  const [embeddedProject, setEmbeddedProject] = useState(null);

  // Wake up Render backends on page load
  useEffect(() => {
    const backendUrls = [
      'https://taskflow-backend-99jh.onrender.com',
      'https://synapse-backend-yh6d.onrender.com/',
    ];

    backendUrls.forEach(url => {
      fetch(url, { method: 'GET', mode: 'no-cors' })
        .catch(() => {}); // Silent fail — we just want to ping
    });
  }, []);

  const projects = [
    {
      title: 'Synapse — AI-first CRM Agent',
      desc: 'A CRM for pharma field reps built around a 9-tool LangGraph agent — reps describe a meeting in plain language and the agent extracts structured data, flags adverse events, tracks competitor mentions, and drafts follow-ups.',
      liveUrl: 'https://az-tries-synapse-hcp-crm-logger.vercel.app/',
      repoUrl: 'https://github.com/AzTries/AzTries-Synapse_hcp_crm_logger',
    },
    {
      title: 'TaskFlow — Task Board App',
      desc: 'A lightweight, full-stack task board in the spirit of Trello — columns, drag-free task movement, priority filtering, and search, backed by a real database.',
      liveUrl: 'https://taskboard-fullstack.vercel.app/',
      repoUrl: 'https://github.com/AzTries/taskboard_fullstack',
    },
    {
      title: 'Utility Agent',
      desc: 'A tool-calling agent with weather, currency conversion, timezone lookup, and unit conversion built in.',
      liveUrl: 'https://aztries.github.io/utility-agent/',
      repoUrl: 'https://github.com/AzTries/utility-agent',
    },
    {
      title: 'LeadCook — B2B Lead Gen Agent',
      desc: 'An AI-powered agent for B2B lead generation, originally built as an interview assignment and rebuilt into a standalone portfolio piece.',
      liveUrl: 'https://aztries.github.io/leadcook/',
      repoUrl: 'https://github.com/AzTries/leadcook',
    },
    {
      title: 'Insights — AI Report Generator',
      desc: 'An AI education tool that generates student reports, generalized from a job-application project into a deployable product.',
      liveUrl: 'https://aztries.github.io/Insights--Student-Report-Worksheet-Generator/',
      repoUrl: 'https://github.com/AzTries/Insights--Student-Report-Worksheet-Generator',
    },
  ];

  if (embeddedProject) {
    return (
      <div className="frame">
        <button className="back" onClick={() => setEmbeddedProject(null)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back
        </button>
        <div className="project-embed-wrapper">
          <iframe 
            src={embeddedProject.liveUrl} 
            className="project-embed-frame"
            title="Project"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="frame">
      <button className="back" onClick={() => onNavigate('index')}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Index
      </button>

      <div className="ai-head">
        <span className="mark">Sneha Guchait</span>
        <h2>AI Engineering</h2>
        <p>Agents, RAG pipelines, and full-stack deployments — recent work and repositories.</p>
        <div className="ai-links-row">
          <a className="gh-link" href="https://github.com/AzTries?tab=stars" target="_blank" rel="noopener">
            ★ Starred repositories on GitHub
          </a>
          <a className="gh-link" href="https://www.linkedin.com/in/snehaguchait2025grad/" target="_blank" rel="noopener">
            LinkedIn
          </a>
        </div>
      </div>

      <p className="section-label">RECENT PROJECTS</p>

      {projects.map((proj, idx) => (
        <div key={idx} className="proj">
          <p className="proj-title">{proj.title}</p>
          <p className="proj-desc">{proj.desc}</p>
          <div className="proj-links">
            <button 
              className="proj-btn try-it-out"
              onClick={() => setEmbeddedProject(proj)}
            >
              Try it out
            </button>
            <a
              href={proj.repoUrl}
              target="_blank"
              rel="noopener"
              className="proj-btn repo"
            >
              Repository
            </a>
          </div>
        </div>
      ))}

      <p className="foot-note">
        <a className="gh-link" href="https://github.com/AzTries" target="_blank" rel="noopener">
          ↗ github.com/AzTries
        </a>
      </p>
    </div>
  );
}