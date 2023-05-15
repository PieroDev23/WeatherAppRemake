import { FeatureCollection } from "@interfaces/services.interfaces";
import axios from "axios";

/**
 * Obtiene una lista de sugerencias del lugar que ingreso el usuario
 * @param place lugar a buscar
 * @returns Lista de Lugares
 */
export function getPlaces(place: string) {
  const params = {
    access_token: process.env.MAPBOX_API_KEY,
    limit: 5,
    proximity: "ip",
  };



  return axios.get<FeatureCollection>(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
    {
      params,
      headers: {
        Accept: "application/json",
      },
    }
  );
}

/**
 * Permite obtener los datos de la api de Open weather
 * @param lon longitud del lugar
 * @param lat latitud del lugar
 * @returns datos del clima del lugar
 */
export function getWeather(lon: number, lat: number) {
  const params = {
    appid: process.env.WEATHER_API_KEY,
    units: "metric",
    lon,
    lat,
  };

  return axios.get("https://api.openweathermap.org/data/2.5/weather", {
    params,
  });
}
