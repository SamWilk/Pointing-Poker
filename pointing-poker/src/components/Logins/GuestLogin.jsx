import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import generateRandomId from "../../lib/generateKey";

export default function GuestLogin() {
  const navigate = useNavigate();
  const [guestName, setGuestName] = useState("");
  const [error, setError] = useState("");

  const handleGuestLogin = (e) => {
    e.preventDefault();

    if (!guestName.trim()) {
      setError("Please enter a name.");
      return;
    }

    setError("");
    const gameID = generateRandomId();
    const encodedName = encodeURIComponent(guestName.trim());
    const encodedGameID = encodeURIComponent(gameID.trim());
    navigate(`/?user=${encodedName}&gameID=${encodedGameID}`);
  };

  return (
    <div className="guest-login">
      <p className="guest-label">Or continue as guest:</p>
      <form className="guest-form" onSubmit={handleGuestLogin}>
        <input
          className="guest-input"
          placeholder="Enter Name"
          name="guestName"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
        />
        {error && <p className="guest-error">{error}</p>}
        <button className="guest-button" type="submit">
          Login and Create Room
        </button>
      </form>
    </div>
  );
}
