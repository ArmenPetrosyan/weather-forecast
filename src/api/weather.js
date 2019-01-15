import fetch from 'isomorphic-fetch';
import config from '../../application.config';

const APIKEY = config.OpenWeatherApiKey;
const APIURL = config.OpenWeatherApiUrl;

async function getWeatherByCity(city) {
  const result = await fetch(`${APIURL}weather?q=${city}&appid=${APIKEY}&units=metric`);
  const response = await result.json();
  return response;
}

async function getForecastByCity(city) {
  const result = await fetch(`${APIURL}forecast?q=${city}&appid=${APIKEY}&units=metric&cnt=5`);
  const response = await result.json();
  return response;
}

export default getWeatherByCity;

export {
  getForecastByCity,
  getWeatherByCity,
};
