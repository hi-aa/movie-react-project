import Calendar from "react-calendar";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import MenuForm from "../../components/menu1/MenuForm";
import MenuList from "../../components/menu1/MenuList";
import { initList } from "../../temp-data/menu1-data";

function Menu1() {
  const [ymd, setYmd] = useState(dayjs().format("YYYY-MM-DD")); // 날짜 선택
  const [selectedKey, setSelectedKey] = useState(0);
  const [list, setList] = useState([]); // 목록

  // init
  useEffect(() => {
    // temp data
    const temp = initList();
    temp.map((v) => saveData(v));
  }, []);

  // 속성
  const formAttr = {
    // str: "",
    radio: [
      { value: "Y", title: "예" },
      { value: "N", title: "아니오" },
    ],
    checkbox: [
      { value: "cat", title: "고양이" },
      { value: "dog", title: "개" },
      { value: "rabbit", title: "토끼" },
    ],
  };

  const saveData = (params = {}) => {
    setList((prev) => {
      const keyList = [...prev].map((v) => v.key);
      const maxKey = keyList.length > 0 ? Math.max(...keyList) : 0;
      // console.log({ keyList, maxKey });
      return [...prev, { ...params, key: maxKey + 1, ymd }];
    });
  };

  const removeData = (key) => {
    setList((prev) => [...prev.filter((v) => v.key !== key)]);
  };

  return (
    <>
      <div className="container">
        <div className="row mb-4">
          <div className="col-6 col-md-4">
            <Calendar
              value={ymd}
              onChange={(value) => {
                setYmd(dayjs(value).format("YYYY-MM-DD"));
                setSelectedKey(0);
              }}
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

                <MenuForm
                  formAttr={formAttr}
                  list={list}
                  selectedKey={selectedKey}
                  saveData={saveData}
                  removeData={removeData}
                />
              </div>
            </div>
          </div>
        </div>

        <MenuList
          formAttr={formAttr}
          list={list}
          selectedKey={selectedKey}
          setSelectedKey={setSelectedKey}
        />
      </div>
    </>
  );
}

export default Menu1;
