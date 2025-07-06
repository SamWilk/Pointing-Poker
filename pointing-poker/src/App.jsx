import {
  BrowserRouter as Router,
  Routes,
  Route,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import "./App.css";

import LoginForm from "./components/Logins/LoginForm";
import GuestLogin from "./components/Logins/GuestLogin";
import Navbar from "./components/NavBar/Navbar";
import GoogleAd from "./components/Ads/GoogleAd";
import { useEffect } from "react";
import About from "./components/About/About";

function Logins() {
  return (
    <div className="login-container">
      <div className="login-box">
        <LoginForm />
        <GuestLogin />
      </div>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const user = searchParams.get("user");
  const gameID = searchParams.get("gameID");
  const joiningFlag = searchParams.get("joinGame");

  useEffect(() => {
    if (!joiningFlag && (!user || !gameID)) {
      navigate("/login");
    } else {
      // send user to create guest login to join room
    }
  }, [user, gameID, joiningFlag, navigate]);

  return (
    <div className="home">
      <h2>{user ? `Welcome, ${user}` : "Home"}</h2>
      <GoogleAd slot={12345} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Logins />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
