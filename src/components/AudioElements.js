import React, { useState, useImperativeHandle, forwardRef } from 'react';

const AudioElements = forwardRef((props, ref) => {
  const [honkCounter, setHonkCounter] = useState(0);
  const [showScreamer, setShowScreamer] = useState(false);
  const [screamerStage, setScreamerStage] = useState(0);
  const [audioInitialized, setAudioInitialized] = useState(false);

  // Initialize audio on first user interaction
  const initializeAudio = () => {
    if (!audioInitialized) {
      const audioElements = ['honk', 'screamer', 'tension'];
      audioElements.forEach(id => {
        const audio = document.getElementById(id);
        if (audio) {
          audio.load(); // Reload to ensure it's ready
          // Try to play and immediately pause to "prime" the audio
          audio.play().then(() => {
            audio.pause();
            audio.currentTime = 0;
          }).catch(() => {
            // Silent fail - browser prevented autoplay
          });
        }
      });
      setAudioInitialized(true);
    }
  };

  const playAudioSafely = async (audioElement) => {
    try {
      if (audioElement) {
        audioElement.currentTime = 0;
        await audioElement.play();
      }
    } catch (error) {
      console.log('Audio play prevented:', error);
      // Fallback: try again after a short delay
      setTimeout(() => {
        try {
          if (audioElement) {
            audioElement.play();
          }
        } catch (e) {
          console.log('Audio play still prevented');
        }
      }, 100);
    }
  };

  const stopAudioSafely = (audioElement) => {
    try {
      if (audioElement && !audioElement.paused) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
    } catch (error) {
      console.log('Audio stop error:', error);
    }
  };

  const playScreamer = async () => {
    const honkAudio = document.getElementById('honk');
    
    // Reset and play the honk sound
    if (honkAudio) {
      honkAudio.currentTime = 0.1;
      await playAudioSafely(honkAudio);
    }
    
    const newCounter = honkCounter + 1;
    setHonkCounter(newCounter);

    if (newCounter === 10) {
      const screamAudio = document.getElementById('screamer');
      const tensionAudio = document.getElementById('tension');
      
      // Stop honk first
      stopAudioSafely(honkAudio);
      
      // Start tension building after a small delay
      setTimeout(async () => {
        if (tensionAudio) {
          await playAudioSafely(tensionAudio);
        }
      }, 200);
      
      // Stage 1: Screen flicker
      setTimeout(() => {
        setScreamerStage(1);
        document.body.style.filter = 'brightness(0.1)';
      }, 500);
      
      // Stage 2: Warning flash
      setTimeout(() => {
        setScreamerStage(2);
        document.body.style.filter = 'brightness(1) contrast(2) saturate(0)';
      }, 1500);
      
      // Stage 3: SCREAMER!
      setTimeout(async () => {
        stopAudioSafely(tensionAudio);
        
        // Small delay before screamer
        setTimeout(async () => {
          if (screamAudio) {
            screamAudio.volume = 0.8;
            await playAudioSafely(screamAudio);
          }
        }, 100);
        
        setScreamerStage(3);
        setShowScreamer(true);
        document.body.style.filter = 'brightness(1) contrast(1) saturate(1) hue-rotate(180deg)';
        
        // Shake the entire page
        document.body.classList.add('screamer-shake');
        
        // Recovery
        setTimeout(() => {
          setShowScreamer(false);
          setScreamerStage(0);
          document.body.style.filter = '';
          document.body.classList.remove('screamer-shake');
          stopAudioSafely(screamAudio);
        }, 4000);
      }, 2500);
      
      setHonkCounter(0);
    }
  };

  useImperativeHandle(ref, () => ({
    playScreamer
  }));

  return (
    <>
      <audio id="honk" preload="auto">
        <source src="/sounds/honk.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio id="screamer" preload="auto">
        <source src="/sounds/screamer.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio id="tension" preload="auto" loop>
        <source src="/sounds/tension.mp3" type="audio/mpeg" />
        <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
      
      {screamerStage === 1 && (
        <div className="stage-flicker"></div>
      )}
      
      {showScreamer && (
        <div className="screamer-container">
          <img 
            id="screamer-image" 
            className="screamer-image enhanced-screamer" 
            src="https://media1.tenor.com/m/wqagUV53VocAAAAd/scream.gif"
            alt="Screamer"
            style={{ display: 'block' }}
          />
          {/* <div className="screamer-overlay"></div> */}
        </div>
      )}
    </>
  );
});

export default AudioElements;

