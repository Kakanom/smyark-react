import React from 'react';

const ProfileSection = ({ audioRef }) => { // depricated (it is now in resume, maybe i will delete it)
  const playScreamer = () => {
    if (audioRef.current) {
      audioRef.current.playScreamer();
    }
  };

  return (
    <>
      <div className="centered column">
        <div className="centered">
          <div className="centered">
            <img 
              src="/images/giga_me.png" 
              alt="Аватар" 
              className="profile-image rounded-circle mx-auto mb-2" 
            />
            <input 
              className="nose" 
              type="button" 
              value="PLAY" 
              onClick={playScreamer}
            />
          </div>
        </div>
        
        <div className="hands-globe-container">
          {/* left hand */}
          <img 
            src="https://media.tenor.com/eV_M4-PLdIEAAAAi/grab.gif" 
            alt="left-hand" 
            className="left-hand-image"
          />

          {/* globe */}
          <div className="centered">
            <img 
              src="https://media.tenor.com/0we9sWcmUtYAAAAj/wingedratsecrettag-earth.gif" 
              className="rounded-circle globe"
              alt="Earth"
            />
            <img 
              src="https://tenor.com/ru/view/ryan-gosling-gif-27058010.gif" 
              alt="ryan gosling" 
              className="rounded-circle globosling"
            />
          </div>

          {/* right hand */}
          <img 
            src="https://media.tenor.com/kFxLNZEcRHwAAAAi/grab.gif" 
            alt="right-hand" 
            className="right-hand-image"
          />
        </div>
      </div>

      <div className="profile-text">
        <h3>
          <a className="text-decoration-none a-color" href="/">
            Smyark - Смирнов Марк
          </a>
        </h3>
        <h5>
          Ученик{' '}
          <a 
            className="text-decoration-none a-color" 
            href="https://hsse.mipt.ru/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            МФТИ ВШПИ
          </a>
          , выпускник{' '}
          <a 
            className="text-decoration-none a-color" 
            href="https://school33.edu.yar.ru/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Школы №33
          </a>
        </h5>
      </div>
    </>
  );
};

export default ProfileSection;

