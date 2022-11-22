import Details from "./components/Details";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherApi";

function App() {
  const [city, setCity] = useState("Noida");
  const [weather, setWeather] = useState(null);
  const [units] = useState("metric");

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);
    };

    fetchWeatherData();
  }, [units, city]);


  const onEnterKey = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <div  >
      <div>
        {weather && (
          <div className="container">
            <div className="section inputs">
              <input
                onKeyDown={onEnterKey}
                type="text"
                name="city"
                placeholder="Enter City..."
              />
            </div>

            <div className="section temperature">
              <div className="icon">
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src={weather.iconURL} alt="" />
                <h3>{weather.description}</h3>
              </div>
              <div className="temperature">
                <h1>{`${weather.temp.toFixed()} °${units === "metric" ? "C" : "F"
                  }`}</h1>
              </div>
            </div>
            <Details weather={weather} units={units} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;