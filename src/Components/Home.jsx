import React from 'react';
import '../CSS/Home.css';
import Nav from '../Navigation/Nav';
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Naviguer vers une autre route
    navigate("/Register");
  };
  return (
    <>
      <Nav />

      <div className="home">
        <div className="hero-section">
          <h1>
            Custommer Tracking:<br />Traccles & <br /> Peprognedge
          </h1>
          <p>Port autonome </p>
          <button onClick={handleClick} className="primary-button">Commencer</button>
        </div>
        </div>

    </>
  );
};

export default Home;