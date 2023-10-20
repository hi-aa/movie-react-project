import Calendar from "react-calendar";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { useState } from "react";
import MenuForm from "../../components/menu1/MenuForm";

function Menu1() {
  const [ymd, setYmd] = useState(dayjs().format("YYYY-MM-DD")); // 날짜 선택

  return (
    <>
      <div className="container">
        <div className="row">
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
                <MenuForm />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table table-striped light">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <div className="btn-wrap">
        <br />
        <input
          type="text"
          name="menu1"
          value={inputs.menu1}
          onChange={onChangeInputs}
        />

        <button className={styles["btn"]} onClick={addMenu} title="Add item">
          <FontAwesomeIcon icon={faPlus} size="2xl" />
        </button>
        <button
          className={styles["btn"]}
          onClick={deleteMenu}
          title="Delete item"
        >
          <FontAwesomeIcon icon={faXmark} size="2xl" />
        </button>
        <button
          className={styles["btn"]}
          onClick={checkMenu}
          title="Check item"
        >
          <FontAwesomeIcon icon={faCheck} size="2xl" />
        </button>
      </div> */}
      {/* <div className={styles["alert-wrap"]}>{alert}</div> */}

      {/* <div className="cont-wrap">
        <Item
          list={list}
          selectedKey={selectedKey}
          setSelectedKey={setSelectedKey}
          clearList={clearList}
        />
      </div> */}
    </>
  );
}

export default Menu1;
