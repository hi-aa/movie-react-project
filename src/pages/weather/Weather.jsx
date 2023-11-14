import { useEffect, useState } from "react";
import "./weather.css";
import { fetchWeatherLandList, fetchWeatherList } from "../../api/weather-api";
import { WTHR_AREA_CODE } from "../../constants/weather-enum";
import dayjs from "dayjs";

export default function Weather() {
  const [weatherLoc, setWeatherLoc] = useState(""); // 지역명
  const [weatherList, setWeatherList] = useState([]); // 일자별 날씨정보
  const iconList = []; // 날씨 아이콘

  // test
  useEffect(() => {
    console.log(weatherList);
  }, [weatherList]);

  // weatherList 날짜별로 합치기
  const appendWeatherList = (list = []) => {
    setWeatherList((prev) => {
      const prevYmdArr = prev.map((item) => item.ymd);
      const newYmdArr = list.map((item) => item.ymd);
      let ymdList = new Set([...prevYmdArr, ...newYmdArr]); // 중복제거

      ymdList = [...ymdList].map((v) => {
        const prevObj = prev.find((item) => item.ymd === v);
        const newObj = list.find((item) => item.ymd === v);
        return { ...prevObj, ...newObj };
      });
      console.log({ ymdList });
      return ymdList;
    });
  };

  // init
  useEffect(() => {
    // 강수량, 날씨
    fetchWeatherLandList().then((res) => {
      const { regId, ...item } = res?.items?.item?.[0];
      // 일자별 날씨정보
      const list = [
        {
          ymd: dayjs().add(3, "day").format("YYYYMMDD"),
          rnStAm: item.rnSt3Am,
          rnStPm: item.rnSt3Pm,
          wfAm: item.wf3Am,
          wfPm: item.wf3Pm,
          rnSt: item.rnSt3Am,
          wf: item.wf3Am,
        },
        {
          ymd: dayjs().add(4, "day").format("YYYYMMDD"),
          rnStAm: item.rnSt4Am,
          rnStPm: item.rnSt4Pm,
          wfAm: item.wf4Am,
          wfPm: item.wf4Pm,
          rnSt: item.rnSt4Am,
          wf: item.wf4Am,
        },
        {
          ymd: dayjs().add(5, "day").format("YYYYMMDD"),
          rnStAm: item.rnSt5Am,
          rnStPm: item.rnSt5Pm,
          wfAm: item.wf5Am,
          wfPm: item.wf5Pm,
          rnSt: item.rnSt5Am,
          wf: item.wf5Am,
        },
        {
          ymd: dayjs().add(6, "day").format("YYYYMMDD"),
          rnStAm: item.rnSt6Am,
          rnStPm: item.rnSt6Pm,
          wfAm: item.wf6Am,
          wfPm: item.wf6Pm,
          rnSt: item.rnSt6Am,
          wf: item.wf6Am,
        },
        {
          ymd: dayjs().add(7, "day").format("YYYYMMDD"),
          rnStAm: item.rnSt7Am,
          rnStPm: item.rnSt7Pm,
          wfAm: item.wf7Am,
          wfPm: item.wf7Pm,
          rnSt: item.rnSt7Am,
          wf: item.wf7Am,
        },
        {
          ymd: dayjs().add(8, "day").format("YYYYMMDD"),
          rnSt: item.rnSt8,
          wf: item.wf8,
        },
        {
          ymd: dayjs().add(9, "day").format("YYYYMMDD"),
          rnSt: item.rnSt9,
          wf: item.wf9,
        },
        {
          ymd: dayjs().add(10, "day").format("YYYYMMDD"),
          rnSt: item.rnSt10,
          wf: item.wf10,
        },
      ];
      appendWeatherList(list);
    });

    // 기온
    fetchWeatherList().then((res) => {
      const { regId, ...item } = res?.items?.item?.[0];
      // 지역명
      const locKey = Object.keys(WTHR_AREA_CODE).find(
        (v) => WTHR_AREA_CODE[v].tmprCode === regId
      );
      setWeatherLoc(WTHR_AREA_CODE[locKey].tmprLabel);

      // 일자별 날씨정보
      const list = [
        {
          ymd: dayjs().add(3, "day").format("YYYYMMDD"),
          taMin: item.taMin3,
          taMinLow: item.taMin3Low,
          taMinHigh: item.taMin3High,
          taMax: item.taMax3,
          taMaxLow: item.taMax3Low,
          taMaxHigh: item.taMax3High,
        },
        {
          ymd: dayjs().add(4, "day").format("YYYYMMDD"),
          taMin: item.taMin4,
          taMinLow: item.taMin4Low,
          taMinHigh: item.taMin4High,
          taMax: item.taMax4,
          taMaxLow: item.taMax4Low,
          taMaxHigh: item.taMax4High,
        },
        {
          ymd: dayjs().add(5, "day").format("YYYYMMDD"),
          taMin: item.taMin5,
          taMinLow: item.taMin5Low,
          taMinHigh: item.taMin5High,
          taMax: item.taMax5,
          taMaxLow: item.taMax5Low,
          taMaxHigh: item.taMax5High,
        },
        {
          ymd: dayjs().add(6, "day").format("YYYYMMDD"),
          taMin: item.taMin6,
          taMinLow: item.taMin6Low,
          taMinHigh: item.taMin6High,
          taMax: item.taMax6,
          taMaxLow: item.taMax6Low,
          taMaxHigh: item.taMax6High,
        },
        {
          ymd: dayjs().add(7, "day").format("YYYYMMDD"),
          taMin: item.taMin7,
          taMinLow: item.taMin7Low,
          taMinHigh: item.taMin7High,
          taMax: item.taMax7,
          taMaxLow: item.taMax7Low,
          taMaxHigh: item.taMax7High,
        },
        {
          ymd: dayjs().add(8, "day").format("YYYYMMDD"),
          taMin: item.taMin8,
          taMinLow: item.taMin8Low,
          taMinHigh: item.taMin8High,
          taMax: item.taMax8,
          taMaxLow: item.taMax8Low,
          taMaxHigh: item.taMax8High,
        },
        {
          ymd: dayjs().add(9, "day").format("YYYYMMDD"),
          taMin: item.taMin9,
          taMinLow: item.taMin9Low,
          taMinHigh: item.taMin9High,
          taMax: item.taMax9,
          taMaxLow: item.taMax9Low,
          taMaxHigh: item.taMax9High,
        },
        {
          ymd: dayjs().add(10, "day").format("YYYYMMDD"),
          taMin: item.taMin10,
          taMinLow: item.taMin10Low,
          taMinHigh: item.taMin10High,
          taMax: item.taMax10,
          taMaxLow: item.taMax10Low,
          taMaxHigh: item.taMax10High,
        },
      ];
      appendWeatherList(list);
    });
  }, []);
  return (
    <>
      {/* 상단 대표영역 */}
      <div className="container mt-5">
        <div className="d-flex flex-row justify-content-center align-items-center">
          <div className="weather__card">
            <div className="d-flex flex-row justify-content-center align-items-center">
              <div className="p-3">
                <h2>15&deg;</h2>
              </div>
              <div className="p-3">
                <img src="https://svgur.com/i/oKG.svg" />
              </div>
              <div className="p-3">
                <h5>Tuesday, 10 AM</h5>
                <h3>{weatherLoc}</h3>
                <span className="weather__description">Mostly Cloudy</span>
              </div>
            </div>
            <div className="weather__status d-flex flex-row justify-content-center align-items-center mt-3">
              <div className="p-4 d-flex justify-content-center align-items-center">
                <img src="https://svgur.com/i/oHw.svg" />
                <span>10%</span>
              </div>
              <div className="p-4 d-flex justify-content-center align-items-center">
                <img src="https://svgur.com/i/oH_.svg" />
                <span>0.53 mB</span>
              </div>
              <div className="p-4 d-flex justify-content-center align-items-center">
                <img src="https://svgur.com/i/oKS.svg" />
                <span>10 km/h</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 목록 */}
      <div className="weather__forecast d-flex flex-row justify-content-center align-items-center mt-3">
        <div className="p-4 d-flex flex-column justify-content-center align-items-center">
          <span>Wed</span>
          <img src="https://svgur.com/i/oJe.svg" />
          <span>13&deg;</span>
        </div>

        <div className="p-4 d-flex flex-column justify-content-center align-items-center">
          <span>Thu</span>
          <img src="https://svgur.com/i/oKG.svg" />
          <span>15&deg;</span>
        </div>

        <div className="p-4 d-flex flex-column justify-content-center align-items-center">
          <span>Wed</span>
          <img src="https://svgur.com/i/oKG.svg" />
          <span>15&deg;</span>
        </div>

        <div className="p-4 d-flex flex-column justify-content-center align-items-center">
          <span>Fri</span>
          <img src="https://svgur.com/i/oJe.svg" />
          <span>13&deg;</span>
        </div>

        <div className="p-4 d-flex flex-column justify-content-center align-items-center">
          <span>Sat</span>
          <img src="https://svgur.com/i/oJx.svg" />
          <span>13&deg;</span>
        </div>

        <div className="p-4 d-flex flex-column justify-content-center align-items-center">
          <span>Sun</span>
          <img src="https://svgur.com/i/oJU.svg" />
          <span>11&deg;</span>
        </div>

        <div className="p-4 d-flex flex-column justify-content-center align-items-center">
          <span>Mon</span>
          <img src="https://svgur.com/i/oJU.svg" />
          <span>11&deg;</span>
        </div>

        <div className="p-4 d-flex flex-column justify-content-center align-items-center">
          <span>Tue</span>
          <img src="https://svgur.com/i/oJy.svg" />
          <span>6&deg;</span>
        </div>
      </div>
      {/* <div className="mt-5 d-flex justify-content-center align-items-center">
        Made with ♡ by <a href="https://twitter.com/leutrimdemirii"> Leutrim</a>
      </div> */}
    </>
  );
}
