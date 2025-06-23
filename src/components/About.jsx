import React from 'react';
import './About.css';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaCuttlefish, // for C/C++
  FaDatabase
} from 'react-icons/fa';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-content-wrapper">

        {/* Skills */}
        <div className="info-box skills-box">
          <h2 className="section-title">Skills</h2>
          <p className="section-content">
            I’m passionate about programming and problem solving. My technical stack includes web development, DSA, and Python libraries. I love building interactive and modern web apps.
          </p>
          <div className="section-icons">
            <FaHtml5 title="HTML" />
            <FaCss3Alt title="CSS" />
            <FaReact title="React.js" />
            <FaNodeJs title="Node.js" />
            <FaPython title="Python & Libraries" />
            <FaCuttlefish title="C/C++ for DSA" />
            <FaDatabase title="MongoDB" />
          </div>
        </div>

        {/* Experience */}
        <div className="info-box experience-box">
          <h2 className="section-title">Experience</h2>
          <p className="section-content">
            I've worked on MERN stack projects, implemented RESTful APIs, and integrated Python tools like NumPy, Pandas, and Matplotlib. I solve DSA problems using C++ and have hands-on experience with real-world project building and UI design.
          </p>
        </div>

      </div>
    </section>
  );
}
