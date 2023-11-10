import dayjs from "dayjs";
import { useEffect } from "react";

export default function Temp({ date, list }) {
  useEffect(() => {}, [date]);

  return (
    <div className="card-group mb-4" style={{ height: "163px" }}>
      {Array(7)
        .fill(0)
        .map((_, i) => {
          const itemDate = dayjs(date)
            .add(i - 3, "day")
            .format("YYYY-MM-DD");
          const itemList = list.filter((v) => v.ymd === itemDate);
          return (
            <div className={`card h-100 text-bg-light`} key={i}>
              <div
                className={`card-header ${i === 3 ? "text-bg-primary" : ""}`}
              >
                {itemDate}
              </div>
              <ul className="list-group list-group-flush overflow-auto">
                {itemList.map((v, i2) => (
                  <li className="list-group-item" key={i2}>
                    {v.str}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
    </div>
  );
}
