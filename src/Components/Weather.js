import React from "react";

const Weather = ({ city }) => {
    console.log(city);
    return <div>

    {city ? 
        <div className="text-center mt-4">
            <h3>{city.name}</h3>
            <h3>Temperature {city.main.temp} °C</h3>
            <h3>Max. Temperature {city.main.temp_max} °C</h3>
            <h3>Min. Temperature {city.main.temp_min} °C</h3>
            <h3>Wind {city.wind.speed} km/h</h3>
        </div>

    : ""}
    </div>
}

export default Weather