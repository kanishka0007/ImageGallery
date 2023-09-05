import React from 'react';
import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <img src="https://i.pinimg.com/1200x/de/e7/22/dee722e5e0bdd6950d754f74a8a49065.jpg" alt="Logo" />
        </div>
        <div className="title">
          <h1>Image Gallery</h1>
        </div>
        </div>
        <div className="header-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VgcNPQ68gXb9HlJmx7KGP7L5gb8D7rpZzQ&usqp=CAU" alt="Header Image" />
      </div>
    </header>
  );
};

export default Header;