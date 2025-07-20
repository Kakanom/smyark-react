import React from 'react';

const MusicBox = () => {
  const playlists = [
    {
      title: "Rock",
      id: "1006",
      cover: "https://avatars.yandex.net/get-music-user-playlist/11423738/1272313995.1006.95592/400x400?1713817495592"
    },
    {
      title: "Boss OF THE GYM",
      id: "1005",
      cover: "https://avatars.yandex.net/get-music-user-playlist/69910/1272313995.1005.48517/400x400?1712432648517"
    },
    {
      title: "Boss OF THE GYM(Next Gen)",
      id: "1009",
      cover: "https://avatars.yandex.net/get-music-user-playlist/34120/1272313995.1009.96088/400x400?1726497596088"
    },
    {
      title: "Король и Шут-like",
      id: "1012",
      cover: "https://avatars.yandex.net/get-music-user-playlist/11360783/1272313995.1012.87726/400x400?1742196487726"
    }
  ];

  return (
    <div className="music-box contact-container" id="music-box">
      <h2>Yandex Music</h2>
      <div id="playlists-container">
        {playlists.map((playlist, index) => (
          <div key={index} className="playlist-card" draggable="true">
            <img src={playlist.cover} alt={playlist.title} />
            <div className="info">
              <h3>{playlist.title}</h3>
              <a 
                href={`https://music.yandex.ru/users/Smyark/playlists/${playlist.id}`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Открыть
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicBox;

