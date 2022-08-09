import React from 'react';
import '../../App.css';
import Header from '../header';
import Postt from '../Posts';
import Sidee from '../sidebar';

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Postt />
        <Sidee />
      </div>
    </>
  );
}

export default Home;