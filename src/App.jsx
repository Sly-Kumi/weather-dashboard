import EmptyState from "./components/EmptyState";

function App() {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center px-4">

      {/* Header */}
      <h1 className="mt-8 text-3xl font-bold flex items-center gap-2">
        🌧️ Weather Dashboard
      </h1>

      {/* Search Bar Placeholder */}
      <div className="mt-6 w-full max-w-xl">
        <input
          type="text"
          placeholder="Search for a city..."
          className="w-full px-6 py-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-sm text-gray-600 mt-2 text-center">
          Try searching: London, New York, Tokyo, Paris, Sydney, Accra, Moscow, or Mumbai
        </p>
      </div>

      {/* Empty State */}
      <EmptyState />

    </div>
  );
}

export default App;
