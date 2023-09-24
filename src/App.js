import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';


import background from './assets/background.png';
import dots from './assets/dots.png';
import playButton from './assets/play-button.png';
import areaCodes from './assets/areaCodes.png';
import checkers from './assets/checkers.png';
import figma from './assets/figma.png';
import figmaFolder from './assets/figma user.png';
import bookFolder from './assets/book collector.png';
import introvert from './assets/extreme introvert.png';
import info from './assets/info.png';
import moveieFolder from './assets/movie-goer.png';
import musicFolder from './assets/music lover.png';
import pset from './assets/pset #347.png';
import avatar from "./assets/avatar.png"


function App() {

  const [elementPositions, setElementPositions] = useState({});

  useEffect(() => {
    const draggableElements = document.querySelectorAll('.draggable-element');

    draggableElements.forEach((element) => {
      makeElementDraggable(element);
    });
  }, []);

  const makeElementDraggable = (element) => {
    let isDragging = false;
    let initialX = 0;
    let initialY = 0;
    let currentX = 0;
    let currentY = 0;

    element.addEventListener('mousedown', (e) => {
      isDragging = true;
      initialX = e.clientX - currentX;
      initialY = e.clientY - currentY;
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;

      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;

      element.style.transform = `translate(${currentX}px, ${currentY}px)`;
    });

    document.addEventListener('mouseup', () => {
      if (!isDragging) return;

      isDragging = false;
      const newPosition = {
        x: currentX,
        y: currentY,
      };

      setElementPositions((prevPositions) => ({
        ...prevPositions,
        [element.id]: newPosition,
      }));
    });
  };

  useEffect(() => {
    const draggableElements = document.querySelectorAll('.draggable-element');

    draggableElements.forEach((element) => {
      const newPosition = elementPositions[element.id];

      if (newPosition) {
        element.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
      }
    });
  }, [elementPositions]);

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <NavBar />

      <div id="content">

        {/* Bio Container */}
        <div className='bio-container draggable-element' id='bio-container'>
          <div className='banner'>
            <img src={dots} alt="three dots" />
            <div> BIO.DMG </div>
          </div>

          <div className='bio-content'>
            <img className="avatar" src={avatar} alt="the website's creator, Sadorian Robertson." />

            <div className='bio-text-content'>
              <div className='personal-details'>
              <div className='user-name'> Sadorian Robertson </div>
              <div className='user-pronouns'> she/her </div>
              </div>
              <div className='user-description'> Designer & Developer @ Stanford </div>
              <div className='user-bio'> Empathetic designer and developer based in the Bay Area! When I'm not creating, I enjoy horror movies, cat cafes, and all things pink. </div>
            </div>
          </div>

          <div className='bio-footer'>
            <a href="https://www.linkedin.com/in/sadorian-robertson/" target="_blank" rel="noreferrer">Visit my LinkedIn profile!</a>
            <div className='country'> United States </div>
          </div>
        </div>

        {/* Name Pointer */}
        <div className='name-pointer draggable-element' id='name-pointer' style={{ backgroundColor: "#F6E368" }}>
          <div> Sadorian Robertson </div>
        </div>

        {/* Music Container */}
        <div className='music-container draggable-element' id='music-container'>
          <div className='banner'>
            <img src={dots} alt="three dots" />
            <p> Stuck in My Head Rn </p>
            <img src={playButton} alt="play button" />
          </div>

          <div className='music-content'>
            <img src={areaCodes} alt="album cover for Kali's Area Codes" style={{ border: "5px solid black", borderRadius: "50%" }} />
            <div className='song-info'>
              <img src={info} alt="song player including the song title, artist name, a progress bar, and play buttons "/>
            </div>
          </div>
        </div>

        {/* Todo Container */}
        <div className='todo-container draggable-element' id='todo-container' style={{ backgroundColor: "#FF5C5C" }}>
          <div className='banner'>
            <img src={dots} alt="three dots" />
            <div> To-Do This Week </div>
          </div>

          <div className='todo-list'>
            <ul>
              <li> water plants </li>
              <li> feed fish </li>
              <li> finish pset </li>
              <li> take over world </li>
            </ul>
          </div>
        </div>


        {/* Desktop Icons */}
        <div className="desktop-icons-container">
          <div className="desktop-icons">
            <div className="draggable-element" id="icon1">
              <img src={checkers} alt="alt" />
            </div>

            <div className="draggable-element" id="icon2">
              <img src={figma} alt="alt" />
            </div>

            <div className="draggable-element" id="icon3">
              <img src={pset} alt="alt" />
            </div>

            <div className="draggable-element" id="icon4">
              <img src={introvert} alt="alt" />
            </div>
          </div>

          <div className="desktop-icons">
            <div className="draggable-element" id="icon5">
              <img src={figmaFolder} alt="alt" />
            </div>

            <div className="draggable-element" id="icon6">
              <img src={moveieFolder} alt="alt" />
            </div>

            <div className="draggable-element" id="icon7">
              <img src={bookFolder} alt="alt" />
            </div>

            <div className="draggable-element" id="icon8">
              <img src={musicFolder} alt="alt" />
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default App;
