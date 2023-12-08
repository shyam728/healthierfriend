import React from "react";
import health from "../assests/health-imp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/HealthImp.css";

function HealthImp() {
  const navigate = useNavigate();

  const handleBtn = () => {
    navigate("/welcome");
  };

  return (
    <div className="ba-section" id="Health">
      <div className="ba-image-content">
        <img src={health} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose Health</span>
        </h3>
        <p className="ba-description">
        Choosing a focus on health for older individuals is crucial for several reasons, as it contributes to their overall well-being and quality of life. Here are some key considerations.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> You will live longer
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> You will look happier
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> You will become more confident
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Enhancing Quality of Life
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBtn}
        >
          <FontAwesomeIcon icon={faArrowRight} />  Let's Start 
        </button>
      </div>
    </div>
  );
}

export default HealthImp;