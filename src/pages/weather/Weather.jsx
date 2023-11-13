import { useEffect, useState } from "react";
import "./weather.css";
import { fetchWeatherList } from "../../api/weather-api";
import { WTHR_AREA_CODE } from "../../constants/weather-enum";
export default function Weather() {
  const [weatherLoc, setWeatherLoc] = useState(""); // 지역명
  const [weatherList, setWeatherList] = useState([]); // 일자별 날씨정보
  const iconList = []; // 날씨 아이콘

  useEffect(() => {
    fetchWeatherList().then((res) => {
      const { regId, ...item } = res?.items?.item?.[0];
      // 지역명
      const locKey = Object.keys(WTHR_AREA_CODE).find(
        (v) => WTHR_AREA_CODE[v].code === regId
      );
      setWeatherLoc(WTHR_AREA_CODE[locKey].label);

      // 일자별 날씨정보
      const weatherKeys = Object.keys(item);
      const range = Array(8)
        .fill(0)
        .map((_, i) => i + 3); // 3 ~ 10일까지

      // TODO : key에 숫자
      const list = range.map((day) => {
        const dayInfo = weatherKeys
          .filter((v2) => v2.indexOf(day) !== -1)
          .map((v) => {
            console.log(item[v]);
            return v;
          });
        return day;
      });
      console.log(list);
    });
  }, []);
  return (
    <>
      <div className="container mt-5">
        <div class="d-flex flex-row justify-content-center align-items-center">
          <div class="weather__card">
            <div class="d-flex flex-row justify-content-center align-items-center">
              <div class="p-3">
                <h2>15&deg;</h2>
              </div>
              <div class="p-3">
                <img src="https://svgur.com/i/oKG.svg" />
              </div>
              <div class="p-3">
                <h5>Tuesday, 10 AM</h5>
                <h3>{weatherLoc}</h3>
                <span class="weather__description">Mostly Cloudy</span>
              </div>
            </div>
            <div class="weather__status d-flex flex-row justify-content-center align-items-center mt-3">
              <div class="p-4 d-flex justify-content-center align-items-center">
                <img src="https://svgur.com/i/oHw.svg" />
                <span>10%</span>
              </div>
              <div class="p-4 d-flex justify-content-center align-items-center">
                <img src="https://svgur.com/i/oH_.svg" />
                <span>0.53 mB</span>
              </div>
              <div class="p-4 d-flex justify-content-center align-items-center">
                <img src="https://svgur.com/i/oKS.svg" />
                <span>10 km/h</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="weather__forecast d-flex flex-row justify-content-center align-items-center mt-3">
        <div class="p-4 d-flex flex-column justify-content-center align-items-center">
          <span>Wed</span>
          <img src="https://svgur.com/i/oJe.svg" />
          <span>13&deg;</span>
        </div>

        <div class="p-4 d-flex flex-column justify-content-center align-items-center">
          <span>Thu</span>
          <img src="https://svgur.com/i/oKG.svg" />
          <span>15&deg;</span>
        </div>

        <div class="p-4 d-flex flex-column justify-content-center align-items-center">
          <span>Wed</span>
          <img src="https://svgur.com/i/oKG.svg" />
          <span>15&deg;</span>
        </div>

        <div class="p-4 d-flex flex-column justify-content-center align-items-center">
          <span>Fri</span>
          <img src="https://svgur.com/i/oJe.svg" />
          <span>13&deg;</span>
        </div>

        <div class="p-4 d-flex flex-column justify-content-center align-items-center">
          <span>Sat</span>
          <img src="https://svgur.com/i/oJx.svg" />
          <span>13&deg;</span>
        </div>

        <div class="p-4 d-flex flex-column justify-content-center align-items-center">
          <span>Sun</span>
          <img src="https://svgur.com/i/oJU.svg" />
          <span>11&deg;</span>
        </div>

        <div class="p-4 d-flex flex-column justify-content-center align-items-center">
          <span>Mon</span>
          <img src="https://svgur.com/i/oJU.svg" />
          <span>11&deg;</span>
        </div>

        <div class="p-4 d-flex flex-column justify-content-center align-items-center">
          <span>Tue</span>
          <img src="https://svgur.com/i/oJy.svg" />
          <span>6&deg;</span>
        </div>
      </div>

      {/* <div class="mt-5 d-flex justify-content-center align-items-center">
        Made with ♡ by <a href="https://twitter.com/leutrimdemirii"> Leutrim</a>
      </div> */}
    </>
  );
}
