import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Planning Pointer</h1>
      <p className="about-description">
        Planning Pointer is a collaborative tool designed to streamline team
        planning and decision-making. It helps groups prioritize tasks, estimate
        effort, and align on project goals with ease and transparency.
      </p>
      <p className="about-description">
        Whether you’re running agile sprints, planning product releases, or
        facilitating retrospectives, Planning Pointer simplifies the process and
        keeps everyone on the same page.
      </p>
      <p className="about-description">
        You can either create an account and log in to save your sessions or
        simply start a session as a guest without any sign-up. This makes it
        easy to jump right in and collaborate with your team instantly. If the
        session is created by someone who does not have an account, the session
        will be removed after some time.
      </p>
    </div>
  );
}
