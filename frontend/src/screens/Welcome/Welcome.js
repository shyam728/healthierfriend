import Volunteering from "../../components/Volunteering"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
export default function Welcome() {
    var navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup");
  }

    return (
    <>
     <div className="doctor-section" id="doctors">
      <div >
        <h3 className="dt-title">
        <p className="dt-description">
        Welcome to
        </p>
          <span>healthier Friend</span>
        </h3>
       
  <Volunteering/>

<Button onClick={handleClick} sx={{width:'400px', }}  variant="contained">Countinue</Button>

  

  
  </div>
  </div>
    </>
    )
}