import React, { useRef } from 'react';
import './App.css';
import BalatroBackground from './components/BalatroBackground';
// import ProfileSection from './components/ProfileSection';
import AudioElements from './components/AudioElements';
import { balatroPresets } from './balatroPresets';
import Resume from './components/Resume'

function App() {
  const audioRef = useRef();
  
  return (
    <BalatroBackground {...balatroPresets.classic}>
      <div className="App">
        <main role="main" className="container">
          <AudioElements ref={audioRef} />
          <Resume audioRef={audioRef} />
        </main>
      </div>
    </BalatroBackground>
  );
}

export default App;
