import { useState, useEffect } from 'react';
import './App.css';
import TopNav from './TopNav.js';
import MainBody from './MainBody.js';
import BottomNav from './BottomNav.js';

function App() {
  const [page, setPage] = useState('contact-us');

  const onBtnClick = (pageName) => {
    setPage(pageName);
    //console.log(pageName);
  };

  useEffect( () => {
    console.log(page);
  }, [page]);

  return (
    <div className="App">
      <TopNav parentCallback={onBtnClick.bind(this)} />
      <MainBody name={ page } />
      <BottomNav />
    </div>
  );
}

export default App;
