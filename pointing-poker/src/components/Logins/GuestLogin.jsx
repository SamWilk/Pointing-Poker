import "../../App.css";

export default function GuestLogin() {
  const handleGuestLogin = (e) => {
    e.preventDefault(); // prevent form submission reload
    console.log("Logged in as guest");
  };

  return (
    <div className="guest-login">
      <p className="guest-label">Or continue as:</p>
      <form className="guest-form" onSubmit={handleGuestLogin}>
        <input
          className="guest-input"
          placeholder="Enter Name"
          name="guestName"
          required
        />
        <button className="guest-button" type="submit">
          Login as Guest
        </button>
      </form>
    </div>
  );
}
