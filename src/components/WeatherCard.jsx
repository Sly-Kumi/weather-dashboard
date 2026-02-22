function WeatherCard({ data }) {
  return (
    <div className="w-full max-w-md bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-3xl p-10 shadow-xl">

      {/* Location */}
      <div className="flex items-center justify-center gap-2 text-xl font-semibold">
        📍 {data.name}, {data.sys.country}
      </div>

      {/* Weather Icon */}
      <div className="flex justify-center mt-6">
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
          alt="weather icon"
        />
      </div>

      {/* Temperature */}
      <div className="text-center mt-2">
        <h2 className="text-5xl font-bold">
          {Math.round(data.main.temp)}°C
        </h2>
        <p className="text-lg mt-2">
          {data.weather[0].description}
        </p>
      </div>

      {/* Stats */}
      <div className="flex justify-between mt-10 text-center">

        <div className="bg-white/20 rounded-xl px-6 py-4 w-28">
          <p className="text-sm">Humidity</p>
          <p className="text-lg font-semibold">
            {data.main.humidity}%
          </p>
        </div>

        <div className="bg-white/20 rounded-xl px-6 py-4 w-28">
          <p className="text-sm">Wind Speed</p>
          <p className="text-lg font-semibold">
            {data.wind.speed} m/s
          </p>
        </div>

        <div className="bg-white/20 rounded-xl px-6 py-4 w-28">
          <p className="text-sm">Condition</p>
          <p className="text-lg font-semibold capitalize">
            {data.weather[0].main}
          </p>
        </div>

      </div>

    </div>
  );
}

export default WeatherCard;