import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import LoginForm from "./components/Logins/LoginForm";
import GuestLogin from "./components/Logins/GuestLogin";
import Navbar from "./components/NavBar/Navbar";
import GoogleAd from "./components/Ads/GoogleAd";

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

function About() {
  return <h2 style={{ padding: "2rem", color: "black" }}>About Page</h2>;
}

function Home() {
  return (
    <h2 className="home">
      Home
      <GoogleAd slot={12345} />
    </h2>
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
