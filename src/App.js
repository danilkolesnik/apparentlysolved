import React from 'react';
import Main from './pages/Main/Main';
import { ParallaxProvider } from 'react-scroll-parallax';

function App () {
  return (
    <ParallaxProvider scrollAxis='vertical'>
      <Main />
    </ParallaxProvider>
  );
}

export default App;
