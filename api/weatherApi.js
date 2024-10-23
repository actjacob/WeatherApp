import axios from 'axios';
import { apikey } from '../constants/constans';

const forecastEndpoint = (params) =>
  `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&${params.days}=1&aqi=no&alerts=no`;
const locationEndpoints = (params) =>
  `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&${params.days}=1&aqi=no&alerts=no`;
