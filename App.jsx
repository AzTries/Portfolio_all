import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Portfolio.css';

import Index from './pages/Index';
import Storyboard from './pages/Storyboard';
import Narrative from './pages/Narrative';
import AIEngineering from './pages/AIEngineering';

export default function App() {
  // Wake up Render backends on app load
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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/storyboarding" element={<Storyboard />} />
        <Route path="/narrative" element={<Narrative />} />
        <Route path="/ai-engineering" element={<AIEngineering />} />
      </Routes>
    </Router>
  );
}