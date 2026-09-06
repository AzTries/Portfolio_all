import React from 'react';
import '../styles/AIEngineering.css';

export default function AIEngineering({ onNavigate }) {
  const projects = [
    {
      title: 'Synapse — AI-first CRM Agent',
      desc: 'A CRM for pharma field reps built around a 9-tool LangGraph agent — reps describe a meeting in plain language and the agent extracts structured data, flags adverse events, tracks competitor mentions, and drafts follow-ups.',
      links: [
        { label: 'Repository', url: 'https://github.com/AzTries/AzTries-Synapse_hcp_crm_logger' },
        { label: 'Live site', url: 'https://az-tries-synapse-hcp-crm-logger.vercel.app/', isLive: true },
      ],
    },
    {
      title: 'TaskFlow — Task Board App',
      desc: 'A lightweight, full-stack task board in the spirit of Trello — columns, drag-free task movement, priority filtering, and search, backed by a real database.',
      links: [
        { label: 'Repository', url: 'https://github.com/AzTries/taskboard_fullstack' },
        { label: 'Live site', url: 'https://taskboard-fullstack.vercel.app/', isLive: true },
      ],
    },
    {
      title: 'Utility Agent',
      desc: 'A tool-calling agent with weather, currency conversion, timezone lookup, and unit conversion built in.',
      links: [
        { label: 'Repository', url: 'https://github.com/AzTries/utility-agent' },
        { label: 'Live site', url: 'https://aztries.github.io/utility-agent/', isLive: true },
      ],
    },
    {
      title: 'LeadCook — B2B Lead Gen Agent',
      desc: 'An AI-powered agent for B2B lead generation, originally built as an interview assignment and rebuilt into a standalone portfolio piece.',
      links: [
        { label: 'Repository', url: 'https://github.com/AzTries/leadcook' },
        { label: 'Live site', url: 'https://aztries.github.io/leadcook/', isLive: true },
      ],
    },
    {
      title: 'Insights — AI Report Generator',
      desc: 'An AI education tool that generates student reports, generalized from a job-application project into a deployable product.',
      links: [
        { label: 'Repository', url: 'https://github.com/AzTries/Insights--Student-Report-Worksheet-Generator' },
        { label: 'Live site', url: 'https://aztries.github.io/Insights--Student-Report-Worksheet-Generator/', isLive: true },
      ],
    },
  ];

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
            {proj.links.map((link, lidx) => (
              <a
                key={lidx}
                href={link.url}
                target="_blank"
                rel="noopener"
                className={link.isLive ? 'live' : ''}
              >
                {link.label}
              </a>
            ))}
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