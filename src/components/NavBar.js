import React, { useState } from 'react';

function getDate() {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const today = new Date();
  return today.toLocaleDateString('en-US', options);
}

const NavBar = () => {
  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <nav className="navbar" style={{ backgroundColor: 'black', color: 'white' }}>
      <div>
        <p>FIGMA.OS</p>
      </div>

      <div>
        <p>DESIGN 170 *** {currentDate} *** LIVE FROM SF</p>
      </div>
        
      <div>
        <p>11:00AM GMT-5</p>
      </div>
    </nav>
  );
};

export default NavBar;
