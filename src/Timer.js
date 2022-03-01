import './Timer.css';

function Timer() {
  const music = document.getElementById("music-el");
  const playBtn = document.getElementById("play");
  const audioTitle = document.getElementById("audioTitle");
  let isPlaying = false;
  let currentEpisode = 1;
  let audioDB;
  let lastEpisode;

  function playAudio() {
    isPlaying = true;
    console.log(playBtn);
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
  }

  function pauseAudio() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
  }

  async function getAudioDB() {
    await fetch('/getEpisodesDB', {
      method: 'GET',
      mode: 'no-cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(data => {
      audioDB = data;
    });
  }

  function switchAudio(episode) {
    currentEpisode = episode;
    let index = currentEpisode - 1;
    audioTitle.innerHTML = audioDB[index]['title'];
    music.src = audioDB[index]['audioSrc'];
    if (lastEpisode !== undefined) {
    
    }
    lastEpisode = currentEpisode;
  }

  function nextAudio() {
    let noOfEpisodes = Object.keys(audioDB).length;
    currentEpisode++;
    if (currentEpisode > noOfEpisodes) {
      currentEpisode = 1;
    }
    switchAudio(currentEpisode);
  }

  function prevAudio() {
    let noOfEpisodes = Object.keys(audioDB).length;
    currentEpisode--;
    if (currentEpisode < 1) {
      currentEpisode = noOfEpisodes;
    }
    switchAudio(currentEpisode);
  }

  return (
    <div className="player-block">
      <div className="timer-block">
        <div className="inner-circle">
          <div className="timer-countdown">
            25
            <audio src=""  type="" id="music-el"> </audio>
          </div>
        </div>
      </div>
      <div className="timer-settings">
        <h1 id="audioTitle">Meditation Title 1</h1>
        <div><b>Timer:</b>
          <select name="timer-mins" id="timer-mins">
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
            <option value="15">15 minutes</option>
            <option value="20">20 minutes</option>
            <option value="25">25 minutes</option>
            <option value="30">30 minutes</option>
            <option value="45">45 minutes</option>
            <option value="60">60 minutes</option>
          </select>
        </div>
        <div>
          <i className="fa-solid fa-backward-step" title="Prev" id="prev"
            onClick={prevAudio}></i>
          <i className="fa-solid fa-play" title="Play" id="play"
            onClick={playAudio}></i>
          <i className="fa-solid fa-forward-step" title="Next" id="next"
            onClick={nextAudio}></i>
        </div>
      </div>
    </div>
  );
}

export default Timer;
