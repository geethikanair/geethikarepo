import React, { useState } from 'react';
import "./AboutUs.css"

import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
import data from "../../images/carouselData.json"

function AboutUs() {
  const [slide, setSlide] = useState(0);
  const slides = data.slides;

  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  }
  return (
    <div className="about-us-container">

      <div className="what-we-do">
        <div className="wwd-header"> What We Do</div>
        <div className="wwd-content"> We are so happy you’re interested in getting involved with our work here at Hope Avenue. There are so many ways for you to help, and we truly appreciate each and every effort. By lending your support, you’ll become a valuable part of our Non-Profit Organization and help to strengthen our operations.</div>
        <div className="wwd-content">Our high school youth internship program gives interns the opportunity to immerse themselves in the community and give aid. Over the summer of 2020, GIFT has made efforts to help the community, even through the Coronavirus Pandemic. Despite the quarantine, we gathered supplies for the homeless, clothing, and supplies for US Military Troops, and supplied Senior Homes with the resources they need to thrive during this time.</div>
      </div>

      <div className="carousel">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
        {slides.map((item, idx) => {
          return (
          <div className={slide == idx ? "slide" : "slide slide-hidden"}>
            <h3>{item.title}</h3>
            <img src={item.src} alt={item.alt} key={idx} className="slide-img"/>
            <p>{item.content}</p>
          </div>
          );
        })}
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
        <span className="indicators">
          {slides.map((_, idx) => {
            return <button key={idx} onClick={() => setSlide(idx)} className={slide == idx ? "indicator" : "indicator indicator-inactive"}></button>
          })}
        </span>
      </div>

      <div className="meet-the-team">
        <h2> Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <p className="name">Lalitha Vasudeva</p>
            <p className="role">Board Member</p>
          </div>
          <div className="team-member">
            <p className="name">Sonia Jain</p>
            <p className="role">Board Member</p>
          </div>
          <div className="team-member">
            <p className="name">Nupur Sanghal</p>
            <p className="role">Board Member</p>
          </div>
          <div className="team-member">
            <p className="name">Shilpa Manjunath</p>
            <p className="role">Board Member</p>
          </div>
          <div className="team-member">
            <p className="name">Sai Gopalan</p>
            <p className="role">Secretary</p>
          </div>
          <div className="team-member">
            <p className="name">Senthilnathan Murugesan</p>
            <p className="role">Treasurer</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AboutUs;
