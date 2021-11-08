import { useState } from 'react';
import './App.css';
import TopNav from './TopNav.js';
import MainBody from './MainBody.js';
import BottomNav from './BottomNav.js';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="App">
      <TopNav onChange={(pageName) => {
        setPage(pageName);
        console.log(pageName);
      }} />
      <MainBody name={ page } />
      <BottomNav />
    </div>
  );
};

export default App;
