import fetch from 'isomorphic-fetch';
import config from '../../application.config';

const APIKEY = config.OpenWeatherApiKey;
const APIURL = config.OpenWeatherApiUrl;

async function getWeatherByCity(city) {
  const result = await fetch(`${APIURL}?q=${city}&appid=${APIKEY}&units=metric`);
  const response = await result.json();
  return response;
}

export default getWeatherByCity;
