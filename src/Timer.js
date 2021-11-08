import './Timer.css';

function Timer() {
  return (
    <div className="player-block">
      <div className="timer-block">
        <div className="inner-circle">
          <div className="timer-countdown">
            25
          </div>
        </div>
      </div>
      <div className="timer-settings">
        <h1>Meditation Title 1</h1>
        <div><b>Timer:</b> 25 mins</div>
        <div>
          <i class="fa-solid fa-backward-step" title="Prev"></i>
          <i class="fa-solid fa-play" title="Play"></i>
          <i class="fa-solid fa-forward-step" title="Next"></i>
        </div>
      </div>
    </div>
  );
}

export default Timer;
