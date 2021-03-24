import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
export default function Layout() {
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [forecast, setForecast] = useState("");
  const [display, setDisplay] = useState(false);
  const [status, setStatus] = useState("");
  const getForecast = async (nextDay) => {
    try {
      const response = await axios.get(
        `https://api.weather.gov/points/${latitude},${longitude}`
      );
      const url = response?.data.properties.forecast;
      const forecast = await axios.get(`${url}`);
      let tomorrowData = forecast?.data.properties.periods.filter((value) =>
        value.name.includes(nextDay)
      );
      setForecast(tomorrowData);
      setStatus("Success");
      setDisplay(true);
    } catch {
      setStatus("Error");
      setDisplay(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisplay(false);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date().toLocaleDateString();
    const today = new Date(date);
    today.setDate(today.getDate() + 1);
    const tomorrow = new Date(today);
    const nextDay = days[tomorrow.getDay()];
    getForecast(nextDay);
  };
  return (
    <div className="div-content">
      <form className="form">
        <div className="form-group">
          <p>
            <i>
              Please enter the longitude and latitude to see tomorrow's forecast
            </i>
          </p>
          <hr />
          <label for="">Longitude</label>
          <input
            type="text"
            class="form-control"
            name="longitude"
            onChange={(e) => setLongitude(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label> Latitude</label>
          <input
            type="text"
            class="form-control"
            name="latitude"
            onChange={(e) => setLatitude(e.target.value)}
          />
        </div>
        <hr />
        {status === "Error" ? (
          <div>
            <p>Unable to get the data for given information.</p>
          </div>
        ) : null}
        <button
          type="submit"
          value="submit"
          class="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>

      <div>
        <div class="card-group">
          {display ? (
            forecast.map((value) => (
              <div
                class="card bg-light mb-3"
                style={{ margin: "5px", marginTop: "55px" }}
              >
                <div class="card-header">{value.name}</div>

                <div className="card-body">
                  <img src={value.icon} alt="Icon" />

                  <ul className="list-results">
                    <li className="list-card-item">
                      <b>Temperature:</b> {value.temperature}{" "}
                      {value.temperatureUnit}
                    </li>
                    <li className="list-card-item">
                      <b>Detailed Forecast:</b> {value.detailedForecast}
                    </li>
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
