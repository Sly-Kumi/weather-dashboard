function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center mt-28 text-center">

      {/* Map Icon Box */}
      <div className="w-28 h-28 bg-blue-700 flex items-center justify-center rounded-md">
        <span className="text-5xl text-yellow-300">🌍</span>
      </div>

      {/* Title */}
      <h2 className="mt-10 text-2xl font-semibold text-gray-800">
        Search for a city to get started
      </h2>

      {/* Subtitle */}
      <p className="mt-4 text-gray-600 max-w-md">
        Enter any city name in the search bar above to view current weather conditions
      </p>

    </div>
  );
}

export default EmptyState;