const API_KEY = "f06cefb176c9dcfdd72eed3f30449200";
const BASE_URL = "http://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lon, lan },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    weather,
    wind: { speed },
    sys: { country, sunrise, sunset },
  } = data;
  const { main: details, icon } = weather[0];
  return {
    lon,
    lan,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    details,
    icon,
    speed,
    country,
    sunrise,
    sunset,
  };
};

const formatForecastWeather = (data) => {};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "current,minute,alerts".searchParams.units,
  }).then(formatForecastWeather);

  return formattedCurrentWeather;
};

export default getFormattedWeatherData;
