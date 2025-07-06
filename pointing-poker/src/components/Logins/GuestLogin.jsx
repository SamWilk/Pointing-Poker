import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../../App.css";
import generateRandomId from "../../lib/generateKey";

export default function GuestLogin() {
  const navigate = useNavigate();
  const [guestName, setGuestName] = useState("");
  const [joinGame, setJoinGame] = useState(false);
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();
  const gameID = searchParams.get("gameID");

  useEffect(() => {
    if (gameID) {
      setJoinGame(true);
    }
  }, [gameID]);

  const handleGuestLogin = (e) => {
    e.preventDefault();

    if (!guestName.trim()) {
      setError("Please enter a name.");
      return;
    }

    setError("");
    if (!gameID) {
      const newGameId = generateRandomId();
      const encodedName = encodeURIComponent(guestName.trim());
      const newEncodedGameID = encodeURIComponent(newGameId.trim());
      navigate(`/?user=${encodedName}&gameID=${newEncodedGameID}`);
    }

    const encodedName = encodeURIComponent(guestName.trim());
    const encodedGameID = encodeURIComponent(gameID.trim());
    navigate(`/?user=${encodedName}&gameID=${encodedGameID}`);
  };

  return (
    <div className="guest-login">
      {joinGame ? <></> : <p className="guest-label">Or continue as guest:</p>}
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
          Login and {joinGame ? "Join" : "Create"} Room
        </button>
      </form>
    </div>
  );
}
