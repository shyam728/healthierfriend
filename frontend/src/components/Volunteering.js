import React from "react";
import VolunteerCard from "./VolunteerCard";
import profile1 from "../assests/profile-1.png";
import profile2 from "../assests/profile-2.png";
import profile3 from "../assests/profile-3.png";
import profile4 from "../assests/profile-4.jpeg";
import "../Styles/Volteering.css";

function Volunteering() {
  return (
    <div className="volteer-section" id="Voluteering">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Volunteering</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Health Plus. Trust in their
          knowledge and experience to lead you towards a healthier and happier
          life.
        </p>
      </div>

      <div className="dt-cards-content">
        <VolunteerCard
          img={profile1}
          name="Helping Older Persons: A Guide for Social Workers."
          title="Social workers can assist older individuals and their families in navigating social services"
          stars="4.9"
          reviews="1800"
        />
        <VolunteerCard
          img={profile2}
          name="Nurses and Home Health Aides"
          title="Nurses and home health aides can provide medical care"
          stars="4.8"
          reviews="700"
        />
        <VolunteerCard
          img={profile3}
          name="Family and Caregivers"
          title="Family members and informal caregivers play a significant role in supporting older individuals."
          stars="4.7"
          reviews="450"
        />
      
      </div>
    </div>
  );
}

export default Volunteering;