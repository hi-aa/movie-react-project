import { useEffect } from "react";
import "./weather.css";
import { fetchWeatherList } from "../../api/weather-api";
export default function Weather() {
  useEffect(() => {
    fetchWeatherList().then((res) => {
      const { items } = res;
      const info = items?.item?.[0];
      console.log(info);
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
                <h3>San Francisco</h3>
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
