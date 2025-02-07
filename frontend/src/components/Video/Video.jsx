import React from 'react'
import './Video.css'
import video from '../../assets/Video.mp4'

const Video = () => {
  return (
    <div className="wrapper">
    <div className="container">
        <h3><u>Get Re</u>ady to Unwind</h3>
        <p>A cabin getaway can be a wonderful way to relax and reconnect with nature. 
            Many cabin rentals are located in beautiful, secluded areas, 
            surrounded by trees and other natural beauty.
        </p>

        <p>
            A cabin getaway can be a wonderful way to escape the 
            hustle and bustle of daily life and reconnect with nature.
        </p>

        <a href='#learnmore'>Learn more</a>
    </div>
    <div className="video">
        <video width="100%" height="100%" controls>
            <source src={video} type="video/mp4"/> 
        </video>
    </div>
</div>

  )
}

export default Video