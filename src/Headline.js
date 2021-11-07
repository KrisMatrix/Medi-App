import './Headline.css';
import BannerImg from './krishna.png';

function Headline() {

  function tempDisplay() {
    alert("We still have to build the Mobile App! Check Later!");
  }

  return (
    <div className="headline">
      <div>
        <img src={ BannerImg } alt="krishna"/>
      </div>
      <div className="blurb-box">
          <h1>Bliss</h1>
          <h2>The Meditation App for All</h2>

          <p>Why pay for something that was given free to all of us?</p>

          <button onClick={ tempDisplay }>Android</button>
          <button onClick={ tempDisplay }>IOS</button>
      </div>
    </div>
  );
}

export default Headline;
