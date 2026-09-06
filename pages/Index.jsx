import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Index.css';

export default function Index() {
  const navigate = useNavigate();

  const entries = [
    {
      num: 'I',
      title: 'Illustrations',
      subtitle: 'Concept art, character studies & sketchwork — opens in a new tab',
      action: () => window.open('https://aztries-art.my.canva.site/', '_blank'),
      external: true,
    },
    {
      num: 'II',
      title: 'Storyboarding',
      subtitle: 'Sequential art for 2D animation',
      action: () => navigate('/storyboarding'),
    },
    {
      num: 'III',
      title: 'Narrative Design',
      subtitle: 'Character dynamics, world systems & story one-pagers',
      action: () => navigate('/narrative'),
    },
    {
      num: 'IV',
      title: 'AI Engineering',
      subtitle: 'Agents, RAG pipelines & deployed tools',
      action: () => navigate('/ai-engineering'),
    },
  ];

  return (
    <div className="frame">
      <div className="titling">
        <h1>Sneha Guchait</h1>
        <p className="alias-line">creative alias: Azz</p>
        <p>Illustration, story, and systems — a working index of things made.</p>
      </div>

      <div className="index-list">
        {entries.map((entry) => (
          <div
            key={entry.num}
            className="entry"
            onClick={entry.action}
          >
            <span className="entry-num">{entry.num}</span>
            <div className="entry-body">
              <p className="entry-title">{entry.title}</p>
              <p className="entry-sub">{entry.subtitle}</p>
            </div>
            <span className="entry-arrow">{entry.external ? '↗' : '→'}</span>
          </div>
        ))}
      </div>

      <p className="foot-note">Delhi — built and maintained by hand.</p>
    </div>
  );
}