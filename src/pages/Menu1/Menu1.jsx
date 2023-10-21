import Calendar from "react-calendar";
import dayjs from "dayjs";
import { useState } from "react";
import MenuForm from "../../components/menu1/MenuForm";
import MenuList from "../../components/menu1/MenuList";

function Menu1() {
  const [ymd, setYmd] = useState(dayjs().format("YYYY-MM-DD")); // 날짜 선택
  const [list, setList] = useState([]);

  const saveData = (params = {}) => {
    setList((prev) => [...prev, params]);
  };

  return (
    <>
      <div className="container">
        <div className="row mb-4">
          <div className="col-6 col-md-4">
            <Calendar
              value={ymd}
              onChange={(value) => setYmd(dayjs(value).format("YYYY-MM-DD"))}
              locale="ko"
            />
          </div>

          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <span className=" h5 pe-2">날짜: {ymd}</span>
                  <span className="card-subtitle mb-2 form-text">
                    선택된 날짜로 정보를 입력합니다.
                  </span>
                </div>

                <MenuForm saveData={saveData} />
              </div>
            </div>
          </div>
        </div>

        <MenuList list={list} />
      </div>
    </>
  );
}

export default Menu1;
