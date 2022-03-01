import { useState } from 'react';
import './App.css';
import TopNav from './TopNav.js';
import MainBody from './MainBody.js';
import BottomNav from './BottomNav.js';

function App() {
  const [page, setPage] = useState('home');

  /* This is only to test that the backend works with express.js */
  /*
  const callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
  */
  /* The following is also for express js testing. It should be placed 
   * within the App block */
  /*
      <button onClick={ callBackendAPI }>Test Button</button>
  */

  return (
    <div className="App">
      <TopNav onChange={(pageName) => {
        setPage(pageName);
      }} />
      <MainBody name={ page } />
      <BottomNav />
    </div>
  );
};

export default App;
