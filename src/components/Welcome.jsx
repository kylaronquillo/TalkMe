import "../App.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  const handleClick = () => {
    console.log("Button Clicked!");
  };

  return (
    <div className="container">
      <div class="shadow p-3 bg-body-tertiary rounded">
        <nav className="appname-container">
          <h1 className="appname">talkME</h1>
        </nav>
        <section className="quote-container">
          <p className="quote">
            Your Seamless Speech-to-Text Notetaking Companion
          </p>
        </section>
        <div className="buttons">
          <Link to="/about">
            <button type="button" class="btn btn-light">
              {"About"}
            </button>
          </Link>
          <Link to="/speak">
            <button type="button" class="btn btn-light">
              {"Speak"}
            </button>
          </Link>
          <button type="button" class="btn btn-light">
            {" "}
            Notes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
