import React, { useState } from 'react';
import './Resume.css';

const Resume = ({ audioRef }) => {
  const [activeSection, setActiveSection] = useState('about');

  const resumeData = {
    about: {
      title: "О себе",
      joker: "dna_joker.png",
      content: (
        <div className="resume-section">
          <div className="card-content">
            <h3>О себе</h3>
            
            <div className="about-section">
              <div className="about-item">
                <h4>Кто я</h4>
                <p>Привет! Я начинающий ML-разработчик с хорошим техническим бэкграундом.</p>
                <p>Я хочу развиваться в области Machine Learning и в IT в целом. Cоздал этот сайт для того, чтобы 
                  использовать его в качестве резюме, поделиться своими увлечениями. Планирую дальше развивать этот сайт.
                   На данный момент сайт находится в "зачаточном" состоянии, так что буду очень рад фидбеку.
                </p>
              </div>

              <div className="about-item">
                <h4>Технические навыки</h4>
                <p><strong>Основные языки:</strong> Python для ML/DS задач, C++ для системного программирования</p>
                <ul>
                  <li>Python: NumPy, Pandas, Scikit-learn</li>
                  <li>C++: алгоритмы, структуры данных</li>
                </ul>
              </div>

              <div className="about-item">
                <h4>Хобби и интересы</h4>
                <ul>
                  <li>Алгоритмы и структуры данных</li>
                  <li>Анализ данных</li>
                  <li>Компьютерные игры и геймдев</li>
                  <li>Музыка(играть не умею😔, только слушать)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    education: {
      title: "Образование",
      joker: "blueprint_joker.png",
      content: (
        <div className="resume-section">
          <div className="card-content">
            <h3>Образование</h3>
            <div className="education-section">
              <div className="education-item">
                <h4> Среднее Образование 2012-2023</h4>
                <p><strong>
                  <a className="text-decoration-none a-color" 
                  href="https://school33.edu.yar.ru/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  >
                  Средняя школа № 33 им. К. Маркса с углубленным изучением математики
                  </a>
                  </strong></p>
                <p>Прекрасная школа, в которой я получил хорошие общие знания, математическую и информатическую базу.</p>
              </div>

              <div className="education-item">
                <h4> Высшее образование 2023-2027</h4>
                <p><strong>
                  <a className="text-decoration-none a-color" 
                  href="https://hsse.mipt.ru/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  >
                    МФТИ ВШПИ
                  </a></strong> - Программная инженерия</p>
                <p>МФТИ, что тут сказать. Было сложно, но к концу второго курса +- втянулся).</p>
                <p>Соответственно, многое узнал: C++, Python, базу ML, Базы Данных, Алгоритмы и Структуры данных</p>
              </div>
              
              <div className="education-item">
                <h4> Доп образование/курсы</h4>
                <ul>
                  <li><a className="text-decoration-none a-color" 
                  href="http://newschool.yar.ru/" 
                  target="_blank" 
                  rel="noopener noreferrer"><strong>Новая Школа</strong></a> 2019-2023. Олимпиадная математика для школьников</li>
                  <li>Курс <a className="text-decoration-none a-color" 
                  href="http://newschool.yar.ru/" 
                  target="_blank" 
                  rel="noopener noreferrer"><strong>Академии Яндекса</strong></a> по ML 2022. В конце было соревнование, в котором нужно было получить наибольший score в такой задаче: есть картинки номеров домов (от 1 до 10), нужно обучить модель, которая будет распознавать номер дома.
                    <div className="check-link">
                      <a className="text-decoration-none check-btn" href="https://drive.google.com/file/d/1JeI8vT9bELVR9xiKjjVZGmEHMhKReIU3/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                        Сертификат
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* <div className="education-item">
                <h4> Достижения</h4>
                <ul>
                  <li></li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      )
    },
    skills: {
      title: "Навыки",
      joker: "brainstorm_joker.png",
      content: (
        <div className="resume-section">
          <div className="card-content">
            <h3>Навыки</h3>
            
            <div className="skills-section">
              <div className="skill-category">
                <h4>Языки программирования</h4>
                <div className="skills-grid">
                  <div className="skill-item high">Python</div>
                  <div className="skill-item medium">C++</div>
                  <div className="skill-item low">SQL</div>
                  <div className="skill-item low">Lua</div>
                  <div className="skill-item low">Go</div>
                </div>
              </div>

              <div className="skill-category">
                <h4> Machine Learning & Data Science</h4>
                <div className="skills-grid">
                  <div className="skill-item high">NumPy</div>
                  <div className="skill-item high">Pandas</div>
                  <div className="skill-item medium">Scikit-learn</div>
                  <div className="skill-item medium">PyTorch</div>
                  <div className="skill-item medium">Matplotlib</div>
                </div>
              </div>

              <div className="skill-category">
                <h4>Инструменты и технологии</h4>
                <div className="skills-grid">
                  <div className="skill-item high">Git</div>
                  <div className="skill-item medium">Linux/Unix</div>
                  <div className="skill-item low">Docker</div>
                </div>
              </div>

              <div className="skill-category">
                <h4>Soft skills</h4>
                <div className="skills-grid">
                  <div className="skill-item high">Аналитическое мышление</div>
                  <div className="skill-item high">Обучаемость</div>
                  <div className="skill-item high">Английский язык (B2)</div>
                  <div className="skill-item medium">Командная работа</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    projects: {
      title: "Проекты",
      joker: "madness_joker.png",
      content: (
        <div className="resume-section">
          <div className="card-content">
            <h3>Мои проекты</h3>
            
            <div className="projects-section">
              <div className="project-item">
                <h4><a href="https://github.com/Kakanom/Machine-learning" target="_blank" rel="noopener noreferrer">Библиотека для ML на Python</a></h4>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Pandas</span>
                  <span className="tech-tag">Scikit-learn</span>
                  <span className="tech-tag">Matplotlib</span>
                  <span className="tech-tag">Numpy</span>
                </div>
                <p><strong>Описание:</strong> В этой либе я пишу свои реализации методов Машинного обучения</p>
                <ul>
                  Пока есть:
                  <li>Линейная регрессия</li>
                  <li>K-means</li>
                </ul>
                Это немного, но это честная работа)
              </div>
            </div>

            <div className="projects-section">
            <div className="project-item">
              <h4><a href="https://github.com/Kakanom/MLProject" target="_blank" rel="noopener noreferrer">Fake Photo Detector</a></h4>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Pandas</span>
                <span className="tech-tag">Scikit-learn</span>
                <span className="tech-tag">PyTorch</span>
                <span className="tech-tag">Matplotlib</span>
                <span className="tech-tag">Numpy</span>
              </div>
              <p>Это был проект компании-партнера нашего факультета - МТС. 
              Проект заключался в создании телеграм-бота, определяющего, является ли фотография лица человека фейком.</p>
              <ul>
                Основные этапы:
                <li>Написали простого бота</li>
                <li>Использовали предобученную модель ResNet50 обучаемым на датасете классификаторм</li>
                <li>Написали свои варианты CNN, попробовали разные параметры</li>
              </ul>
              В итоге ResNet50 оказался лучше чем то, что написали мы - его и включили в бота.
            </div>
          </div>
            
            {/* <div className="projects-footer">
              <p><strong>Все проекты доступны на GitHub:</strong> <a href="https://github.com/Kakanom" target="_blank" rel="noopener noreferrer">github.com/Kakanom</a></p>
            </div> */}
          </div>
        </div>
      )
    },
    contact: {
      title: "Контакты",
      joker: "photograph_joker.png",
      content: (
        <div className="resume-section">
          <div className="card-content">
            <h3>Контакты</h3>
            <div className="contacts-grid">
              <div className="contact-item contact-joker" onClick={() => window.open('https://github.com/Kakanom', '_blank')}>
                <div className="joker-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/balatro/custom_joker/github_joker.png)` }}></div>
                <span className="contact-name">GitHub</span>
              </div>
              <div className="contact-item contact-joker" onClick={() => window.open('https://t.me/Smyark1', '_blank')}>
                <div className="joker-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/balatro/custom_joker/telegram_joker.png)` }}></div>
                <span className="contact-name">Telegram</span>
              </div>
              <div className="contact-item contact-joker" onClick={() => window.open('https://vk.com/smyark', '_blank')}>
                <div className="joker-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/balatro/custom_joker/vk_joker.png)` }}></div>
                <span className="contact-name">VKontakte</span>
              </div>
              <div className="contact-item contact-joker" onClick={() => window.open('https://steamcommunity.com/profiles/76561198273888794/', '_blank')}>
                <div className="joker-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/balatro/custom_joker/steam_joker.png)` }}></div>
                <span className="contact-name">Steam</span>
              </div>
              <div className="contact-item contact-joker" onClick={() => window.open('https://discord.gg/your-discord', '_blank')}>
                <div className="joker-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/balatro/custom_joker/discord_joker.png)` }}></div>
                <span className="contact-name">Discord</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    music: {
      title: "Музыка",
      joker: "throwback_joker.png",
      content: (
        <div className="resume-section">
          <div className="card-content">
            <h3>Музыка</h3>
            
            <div className="music-section">
              <div className="music-item">
                <h4>Плейлисты на Yandex Music</h4>
                <p>Мои плейлисты, которые я собирал годами:</p>
                
                <div className="playlists-grid">
                  <div className="playlist-card">
                    <img src="https://avatars.yandex.net/get-music-user-playlist/11423738/1272313995.1006.95592/400x400?1713817495592" alt="Rock" />
                    <div className="playlist-info">
                      <h4>Rock</h4>
                      <a href="https://music.yandex.ru/users/Smyark/playlists/1006" target="_blank" rel="noopener noreferrer">
                        Открыть
                      </a>
                    </div>
                  </div>
                  <div className="playlist-card">
                    <img src="https://avatars.yandex.net/get-music-user-playlist/69910/1272313995.1005.48517/400x400?1712432648517" alt="Boss OF THE GYM" />
                    <div className="playlist-info">
                      <h4>Boss OF THE GYM</h4>
                      <a href="https://music.yandex.ru/users/Smyark/playlists/1005" target="_blank" rel="noopener noreferrer">
                        Открыть
                      </a>
                    </div>
                  </div>
                  <div className="playlist-card">
                    <img src="https://avatars.yandex.net/get-music-user-playlist/34120/1272313995.1009.96088/400x400?1726497596088" alt="Boss OF THE GYM(Next Gen)" />
                    <div className="playlist-info">
                      <h4>Boss OF THE GYM(Next Gen)</h4>
                      <a href="https://music.yandex.ru/users/Smyark/playlists/1009" target="_blank" rel="noopener noreferrer">
                        Открыть
                      </a>
                    </div>
                  </div>
                  <div className="playlist-card">
                    <img src="https://avatars.yandex.net/get-music-user-playlist/11360783/1272313995.1012.87726/400x400?1742196487726" alt="Король и Шут-like" />
                    <div className="playlist-info">
                      <h4>Король и Шут-like</h4>
                      <a href="https://music.yandex.ru/users/Smyark/playlists/1012" target="_blank" rel="noopener noreferrer">
                        Открыть
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
  };

  const sections = Object.keys(resumeData);

  return (
    <div className="resume-container">
      {/* Avatar above the cards */}
      <div className="resume-avatar">
        <div className="centered">
          <img 
            src={`${process.env.PUBLIC_URL}/images/giga_me.png`} 
            alt="Аватар" 
            className="avatar-image" 
          />
          <input 
            className="nose" 
            type="button" 
            value="PLAY" 
            onClick={() => {
              if (audioRef && audioRef.current) {
                // Initialize audio on first interaction
                const audioElements = ['honk', 'screamer', 'tension', 'warning'];
                audioElements.forEach(id => {
                  const audio = document.getElementById(id);
                  if (audio && audio.readyState < 2) {
                    audio.load();
                  }
                });
                audioRef.current.playScreamer();
              }
            }}
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
          Студент{' '}
          <a 
            className="text-decoration-none a-color" 
            href="https://hsse.mipt.ru/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            МФТИ ВШПИ
          </a>
        </h5>
      </div>
      
      {/* Hands and cards container */}
      <div className="resume-hands-cards-container">
        {/* Left hand */}
        <div className="resume-left-hand">
          <img 
            src="https://media.tenor.com/eV_M4-PLdIEAAAAi/grab.gif" 
            alt="left-hand" 
            className="resume-hand-image"
          />
        </div>
        
        {/* Cards */}
        <div className="resume-tabs">
          {sections.map(section => {
            const data = resumeData[section];
            return (
              <button
                key={section}
                className={`tab-button ${activeSection === section ? 'active' : ''}`}
                onClick={() => setActiveSection(section)}
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/balatro/${data.joker})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="card-title">{data.title}</div>
              </button>
            );
          })}
        </div>
        
        {/* Right hand */}
        <div className="resume-right-hand">
          <img 
            src="https://media.tenor.com/kFxLNZEcRHwAAAAi/grab.gif" 
            alt="right-hand" 
            className="resume-hand-image"
          />
        </div>
      </div>
      
      <div className="resume-content">
        {resumeData[activeSection].content}
      </div>
    </div>
  );
};

export default Resume;

