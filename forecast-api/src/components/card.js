<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{value.name}</h5>
        <img src={value.icon} alt="Icon"></img>
        <ul class="list-group list-group-flush">
          <li className="list-card-item">
            <b>Temperature:</b> {value.temperature} {value.temperatureUnit}
          </li>
          <li className="list-card-item">
            <b>Detailed Forecast:</b> {value.detailedForecast}
          </li>{" "}
        </ul>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{value.name}</h5>
        <img src={value.icon} alt="Icon"></img>
        <ul class="list-group list-group-flush">
          <li className="list-card-item">
            <b>Temperature:</b> {value.temperature} {value.temperatureUnit}
          </li>
          <li className="list-card-item">
            <b>Detailed Forecast:</b> {value.detailedForecast}
          </li>{" "}
        </ul>
      </div>
    </div>
  </div>
</div>