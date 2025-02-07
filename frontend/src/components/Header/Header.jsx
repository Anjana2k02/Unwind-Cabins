import React from 'react';
import './Header.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaUserFriends } from "react-icons/fa";

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h3>Leave the office behind<br/> and unwind</h3>
        <p>Welcome to our cozy cabin nestled in the heart of the mountains! <br/> 
          Our cabin is the perfect getaway for those seeking peace and relaxation in a natural setting.</p>
        
      </div>

      <div className="sx-card">
      <button className="search-option">
        <FaMapMarkerAlt className="icon" />
        I want to go
      </button>
      <button className="search-option">
        <FaCalendarAlt className="icon" />
        Check in
      </button>
      <button className="search-option">
        <FaCalendarAlt className="icon" />
        Check out
      </button>
      <button className="search-option">
        <FaUserFriends className="icon" />
        Travellers
      </button>
      <button className="search-btn">Find available cabins</button>
    </div>

    </div>
  );
};
export default Header;
