// import React, { useState } from 'react';
// import './Portfolio.css';

// // Components
// import Index from './pages/Index';
// import Storyboard from './pages/Storyboard';
// import Narrative from './pages/Narrative';
// import AIEngineering from './pages/AIEngineering';

// export default function Portfolio() {
//   const [currentView, setCurrentView] = useState('index');

//   const showView = (view) => {
//     setCurrentView(view);
//     window.scrollTo(0, 0);
//   };

//   return (
//     <div className="portfolio-app">
//       {currentView === 'index' && <Index onNavigate={showView} />}
//       {currentView === 'storyboard' && <Storyboard onNavigate={showView} />}
//       {currentView === 'narrative' && <Narrative onNavigate={showView} />}
//       {currentView === 'ai' && <AIEngineering onNavigate={showView} />}
//     </div>
//   );
// }