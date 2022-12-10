import { useEffect, useState } from "react";
import "./styles.scss";

function App() {
  const normalPrices = [8, 12, 16, 24, 36];
  const discountPrices = [6, 9, 12, 18, 27];

  const [values, setValues] = useState(normalPrices);
  const [views, setViews] = useState("");
  const [price, setPrice] = useState("");
  const [step, setStep] = useState(3);

  const handleChange = (e) => {
    setStep(e.target.value);
    setPrice(parseInt(values[e.target.value - 1]));
  };

  useEffect(() => {
    const stepValues = [0, 25, 50, 75, 100];
    const slider = document.querySelector("#slider");
    slider.style.background =
      "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) " +
      stepValues[step - 1] +
      "%, hsl(224, 65%, 95%) " +
      stepValues[step - 1] +
      "%, hsl(224, 65%, 95%) 100%)";
  }, [step]);

  const toggleSwitch = (e) => {
    if (e.target.checked) {
      setValues(discountPrices);
    } else {
      setValues(normalPrices);
    }
  };

  useEffect(() => {
    setPrice(values[parseInt(step) - 1]);
    if (parseInt(step) === 1) setViews("10K");
    if (parseInt(step) === 2) setViews("50K");
    if (parseInt(step) === 3) setViews("100K");
    if (parseInt(step) === 4) setViews("500K");
    if (parseInt(step) === 5) setViews("1M");
  }, [step, values]);

  return (
    <main>
      <div className="title">
        <h1>Simple, traffic-based pricing</h1>
        <p>
          <span>Sign-up for our 30-day trial.</span>{" "}
          <span>No credit card required.</span>
        </p>
      </div>
      <div className="container">
        <div className="header">
          <p className="views">{views} pageviews</p>
          <p className="price">
            <span>${price}.00</span>/ month
          </p>
          <div className="sliderbar">
            <input
              onChange={handleChange}
              type="range"
              id="slider"
              min={1}
              max={5}
              value={step}
              step={1}
            />
          </div>
          <div className="switch-container">
            <span className="monthly">Monthly Billing</span>
            <label id="switch">
              <input onClick={toggleSwitch} type="checkbox" id="checkbox" />
              <span className="toggle"></span>
            </label>
            <span className="yearly">Yearly Billing</span>
          </div>
        </div>

        <div className="footer">
          <div className="pros">
            <p>Unlimited websites</p>
            <p>100% data ownership</p>
            <p>Email reports</p>
          </div>
          <button>Start my trial</button>
        </div>
      </div>
    </main>
  );
}

export default App;
