import React from "react";
import Doctor from "../assests/about.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to Healthier Friend, your trusted partner for accessible and
          personalized healthcare. Our expert help Manage your health, without the headache..
        </p>

        <h4 className="about-text-title">Our Solutions</h4>

        <SolutionStep
          title="Always have a list of medications"
          description="Maintaining a comprehensive list of medications is crucial for effective healthcare management. A detailed record, including the names, dosages, and frequencies of prescribed and over-the-counter medications, ensures accurate communication with healthcare providers and promotes safe and informed medical decision-making."
        />

        <SolutionStep
          title="Stay on track with automatic reminders"
          description="Enhance medication adherence and health management with automatic reminders, ensuring you stay on track for optimal well-being."
        />

        <SolutionStep
          title="Get Your Solutions"
          description="Unlock tailored solutions for your needs, providing efficient and effective answers to propel you towards success."
        />
      </div>
    </div>
  );
}

export default About;