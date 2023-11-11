import dayjs from "dayjs";
import { api } from ".";
import { WTHR_AREA_CODE } from "../constants/weather-enum";

// 중기육상예보조회 (3 ~ 10일)
export const fetchWeatherList = async () => {
  const url = `${process.env.REACT_APP_WEATHER_API}`;
  const tmFc = `${dayjs().format("YYYYMMDD")}0600`;
  const area = WTHR_AREA_CODE.SEOUL.code;
  const params = `serviceKey=${process.env.REACT_APP_WEATHER_API_KEY}&numOfRows=7&pageNo=1&dataType=JSON&regId=${area}&tmFc=${tmFc}`;

  const { response } = await api.get(`${url}?${params}`);
  return response?.body;
};
