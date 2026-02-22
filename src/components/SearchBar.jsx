import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    onSearch(city);
    setCity("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-white border border-gray-400 rounded-xl overflow-hidden shadow-sm"
    >
      <input
        type="text"
        placeholder="Search for a city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 px-6 py-3 outline-none text-gray-700"
      />

      <button
        type="submit"
        className="px-6 py-3 text-blue-500 hover:text-blue-700"
      >
        🔍
      </button>
    </form>
  );
}

export default SearchBar;