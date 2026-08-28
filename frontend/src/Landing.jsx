import landingimage from "./assets/landing.png";
import "./Landing.css";
import { useNavigate } from "react-router-dom";

function Landing() {
    const navigate = useNavigate();
  return (
    <div className="landing">
    <div className="land">
      <img src={landingimage} />

    </div>
    <div className="next-button">
      <button onClick={() => navigate("/home")}>
        Explore
      </button>
    </div>
    </div>
  );
}

export default Landing;