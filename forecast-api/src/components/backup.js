<div className="card">
<div className="card-body">
  <p>
    <b>{value.name}</b>{" "}
  </p>
  <img src={value.icon} alt="Icon"></img>{" "}
  <ul style={{ padding: "20px" }}>
    <li className="list-card-item">
      <b>Temperature:</b> {value.temperature}{" "}
      {value.temperatureUnit}
    </li>
    <li className="list-card-item">
      <b>Detailed Forecast:</b> {value.detailedForecast}
    </li>{" "}
  </ul>{" "}
</div>
</div>