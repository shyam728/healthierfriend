import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faCarrot, faWeight } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function WhatYouShouldDo() {
  return (
    <div className="info-section" id="suggestion">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What You Should Do</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Yoga"
          description="Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India and aim to control and still the mind, recognizing a detached witness-consciousness  good as
          basic stretching for easing pain and improving mobility."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Vegetables"
          description="Nutrition in vegetables , Healthy digestion , Vegetables and weight loss Practice moderation in your food choices and avoid excessive consumption of unhealthy foods and beverages. Pay attention to your body's hunger and fullness cues, and eat mindfully, savoring each bite."
          icon={faCarrot}
        />

        <InformationCard
          title="Weight management"
          description="Weight management refers to behaviors, techniques, and physiological processes that contribute to a person's ability to attain and maintain a healthy weight. Most weight management techniques encompas…."
          icon={faWeight}
        />
      </div>
    </div>
  );
}

export default WhatYouShouldDo;