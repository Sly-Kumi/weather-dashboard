const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

console.log("API KEY:", API_KEY); // 👈 add this line

export const fetchWeather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  return response.json();
};