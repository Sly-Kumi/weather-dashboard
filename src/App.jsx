import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import EmptyState from "./components/EmptyState";
import ErrorMessage from "./components/ErrorMessage";
import { fetchWeather } from "./services/weatherService";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    try {
      setError("");
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError("City not found. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center px-4">

      <div className="w-full max-w-4xl flex flex-col items-center">

        {/* Header */}
        <h1 className="mt-12 text-4xl font-bold text-gray-900 flex items-center gap-2">
          🌧️ Weather Dashboard
        </h1>

        {/* Search Section */}
        <div className="mt-8 w-full max-w-xl text-center">
          <SearchBar onSearch={handleSearch} />
          <p className="text-sm text-gray-600 mt-3">
            Try searching: London, New York, Tokyo, Paris, Sydney, Accra, Moscow, or Mumbai
          </p>
        </div>

        {/* Error */}
        {error && <ErrorMessage message={error} />}

        {/* Main Content */}
        <div className="mt-20 w-full flex justify-center">
          {!weather && !error && <EmptyState />}
          {weather && <WeatherCard data={weather} />}
        </div>

      </div>

    </div>
  );
}

export default App;
