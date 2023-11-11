import dayjs from "dayjs";
import { api } from ".";

// 중기육상예보조회 (3 ~ 10일 후)
export const fetchWeatherList = async (query = "", page = 1) => {
  const url = `${process.env.REACT_APP_WEATHER_API}`;
  const key = "";
  const tmFc = dayjs().format("YYYYMMDD");
  const params = `serviceKey=${key}&numOfRows=7&pageNo=1&dataType=JSON&regId=11B00000&tmFc=${tmFc}0600`;
  return await api.get(`${url}?${params}`);
};
