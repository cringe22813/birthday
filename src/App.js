import './App.css';
import confetti from 'canvas-confetti';
import { useState, useRef, useEffect } from 'react';
function App() {

  const [showNumber, setShowNumber] = useState(false);

  useEffect(() => {
    // конфетти при загрузке
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 }
    });
  
    setTimeout(() => {
      setShowNumber(true);
    }, 2000);
  }, []);
  
  
  const stickerImages = [
    '/stikers/a1.png',
    '/stikers/a2.png',
    '/stikers/boring.png',
    '/stikers/a3.png'
  ];
  
  const [disco, setDisco] = useState(false);

const toggleDisco = () => {
  setDisco(!disco);
};
  function launchStickers(e) {
    const count = 8;
    for (let i = 0; i < count; i++) {
      const sticker = document.createElement('img');
      sticker.src = stickerImages[Math.floor(Math.random() * stickerImages.length)];
      sticker.className = 'sticker';
  
      const angle = `${Math.random() * 360}deg`;
      const x = `${(Math.random() - 0.5) * 300}px`;
      const y = `${(Math.random() - 0.5) * 300}px`;
  
      sticker.style.setProperty('--angle', angle);
      sticker.style.setProperty('--x', x);
      sticker.style.setProperty('--y', y);
  
      const rect = e.currentTarget.getBoundingClientRect();
      sticker.style.left = `${rect.left + rect.width / 2}px`;
      sticker.style.top = `${rect.top + rect.height / 2 + window.scrollY}px`;
  
      document.body.appendChild(sticker);
  
      setTimeout(() => {
        sticker.remove();
      }, 1000);
    }
  }
  

const audioRef = useRef(null);
  const [showPlayButton, setShowPlayButton] = useState(true);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setShowPlayButton(false);
    }
  };

  const fireworkRef = useRef(null);

  const launchFirework = () => {
    const end = Date.now() + 2000;
  
    (function frame() {
      confetti({
        particleCount: 100,
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2
        },
        colors: ['#bb0000', '#ffffff', '#ff00ff', '#8000ff'],
      });
  
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };
  

  return (
    
    <div className='all_page full-screen '>
            {showPlayButton && (
        <div className="music-button" onClick={playMusic}>
          💿 ВКЛЮЧИТЬ МУЗЫКУ
        </div>
      )}
      {showNumber && <div className="birthday-number">22</div>}

      <audio ref={audioRef} preload="auto" src={`${process.env.PUBLIC_URL}/bday.mp3`} />

      <h1>С ДНЕМ РОЖДЕНИЯ, БРО!!!</h1>
      <p>Сегодня особенный день. Почему? Ведь сегодня твой день!</p>

      <h2 className="birthday-block ">
        С днем рождения, солнце, любимый бро, самый лучший на свете друг, самый прекрасный именинник, самый-самый-самый-самый-самый...
        <div className="image-wrapper full-screen ">
          <img
            src={require('./my_bro.png')}
            className="main-photo"
            onClick={launchFirework}
            ref={fireworkRef}
            alt="my bro"
          />
          <p className="hint">👆 Нажми на фотку</p>

          <img
            src="https://cdn170.picsart.com/upscale-243466868026212.png"
            className="emoji-overlap"
            alt="emoji"
          />
          <div className="confetti"></div>
        </div>
      </h2>

      <div className='Kavkaz full-screen '>
      <p>Как говорилось в одном казахском тосте
      У нас на Кавказе говорят: хорошо, когда у джигита сабля длинная, а речь краткая. Поэтому – за виновницу торжества!
<img src='https://static.insales-cdn.com/images/products/1/468/308052436/e7f418a90e5d78ed8b53b1aee3ee7385.png'></img></p></div>


<div className='others full-screen '>
    <h2>Конечно, я не Мин Юнги. Никто не Мин Юнги, кроме Мин Юнги, но если бы прямо сейчас он был тут, а не лежал с переломом шеи у тебя дома - он бы поздравил тебя как-то так 
      <img src={require('./Yoongi.png')}></img></h2>
    
    <h2>А вот Эндрю... Ну, наверняка ты представляешь, как поздравил бы он тебя
    <img src={require('./andry.png')}></img>
    </h2>

    <h2>Зато лапочка Джуен искренне и открыто поздравляет!
    <img src={require('./jjj.png')}></img>
    </h2>

    <h2>Чимин не умеет говорить, но будь уверен - он поздравляет тебя тоже!!!
    <img src={require('./jimin.png')}></img>
    </h2>
    </div>

<div className='why_do_i_love_you'>
<h2>Почему я тебя люблю?</h2>
<p>Потому что ночевки с тобой - лучшее, что со мной случалось 
<img
            src={require('./nigth.png')}
            className="main-photo"
            onClick={launchStickers}
            ref={fireworkRef}
            alt="my bro"
          />
</p>
<p>Потому что с тобой никогда не бывает скучно
<img
            src={require('./boring.png')}
            className="main-photo"
            onClick={launchStickers}
            ref={fireworkRef}
            alt="my bro"
          />
</p>
<p>Потому что ты всегда умеешь поднять настроение
<img
            src={require('./yeeeah.jpg')}
            className="main-photo"
            onClick={launchStickers}
            ref={fireworkRef}
            alt="my bro"
          />
</p>
<p>И погрустить, когда нужно
<img
            src={require('./sad.jpg')}
            className="main-photo"
            onClick={launchStickers}
            ref={fireworkRef}
            alt="my bro"
          />
</p>
<p>Потому что ты слушала мой токийский гуль
<img
            src={require('./git.jpg')}
            className="main-photo"
            onClick={launchStickers}
            ref={fireworkRef}
            alt="my bro"
          />
          </p>
<p>Потому что ты это то, что мне нужно для счастья
<img
            src={require('./you.jpg')}
            className="main-photo"
            onClick={launchStickers}
            ref={fireworkRef}
            alt="my bro"
          />
</p>
<p>Потому что ты - это ты!!!
<img
            src={require('./youy.jpg')}
            className="main-photo"
            onClick={launchStickers}
            ref={fireworkRef}
            alt="my bro"
          />
          </p>

</div>
<div className="handwritten-note">
  <p>Я не могу выразить словами, как я благодарна, что ты есть…
    Бро, спасибо за то, что ты просто есть! Спасибо за то, что вот уже 22 года ты - лучший человек во всем мире, о котором я только могла мечтать. 
    С праздником тебя, бровс
  </p>
</div>

    </div>
  );
}

export default App;
