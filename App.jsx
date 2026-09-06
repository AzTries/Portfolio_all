import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Index from './pages/Index';
import Storyboard from './pages/Storyboard';
import Narrative from './pages/Narrative';
import AIEngineering from './pages/AIEngineering';

export default function App() {
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