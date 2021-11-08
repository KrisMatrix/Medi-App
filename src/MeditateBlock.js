import { useState, useEffect } from 'react';
import './MeditateBlock.css';
import PlayList from './PlayList.js';
import Timer from './Timer.js';

function MeditateBlock() {
  //set the width to window with on load.
  const [width, setWidth] = useState(window.innerWidth);  

  useEffect( () => {
    //set the width to window with on page resize.
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  if (width > 600) {
    return (
      <div className="meditate-desktop">
        <PlayList />
        <Timer />
      </div>

    );
  }
  else {
    return (
      <div className="meditate-phone">
        <Timer />
        <PlayList />
      </div>
    );
  }
}

export default MeditateBlock;
