function EmptyState() {
  return (
    <div className="text-center mt-20">
      <img
        src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
        alt="map"
        className="mx-auto w-20 h-20 mb-6 opacity-70"
      />
      <h2 className="text-xl font-semibold text-gray-800">
        Search for a city to get started
      </h2>
      <p className="text-gray-500 mt-2">
        Enter any city name in the search bar above to view current weather conditions
      </p>
    </div>
  );
}

export default EmptyState;