import React from "react";
import "./Hero.css";
import profile from "../assets/image.jpg";

const Hero = () => {
  return (
    <section className="hero-modern">
      <div className="hero-text">
        <h2 className="fade-in">Hi Iam Srushti</h2>
        <h4 className="fade-in-sub">Full-Stack Developer</h4>
        <p className="fade-in-p">
          I'm a passionate Full-Stack Developer with a strong eye for UI/UX design.
          I build modern, responsive, and user-centric web applications using
          technologies like React, Node.js, and MongoDB. I love turning ideas into
          interactive experiences that users enjoy.
        </p>
        <div className="play-button fade-in-button">▶</div>
      </div>
      <div className="hero-image">
        <img src={profile} alt="Srushti's Profile" />
      </div>
    </section>
  );
};

export default Hero;
