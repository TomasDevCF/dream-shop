import { Link } from "react-router-dom";
import { Headers } from "./MyHeader";

export default function ErrorPage() {
  return (
    <div className="max-container-error">
      <Headers />
      <div className="container-error">
        <div className="error">
          <h1>404</h1>
          <span className="bi bi-emoji-dizzy" ></span>
          <h2>This page doesn't exist</h2>
          <Link className="mylink" to="/">Go to the main page</Link>
        </div>
      </div>
    </div>
  );
}
