import { useMemo } from "react";
import { useState } from "react";

export default function MenuList({
  formAttr,
  list = [],
  setYmd,
  selectedKey,
  setSelectedKey,
}) {
  const [nowPage, setNowPage] = useState(1);
  const [rowCount, setRowCount] = useState(10);

  const countMaxPage = () => {
    setNowPage(1);
    return Math.ceil(list.length / rowCount);
  };
  const maxPage = useMemo(() => countMaxPage(), [list, rowCount]);

  return (
    <div className="row">
      <div className="col">
        <table className="table light table-hover">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Date</th>
              <th scope="col">문자</th>
              <th scope="col">라디오</th>
              <th scope="col">체크박스</th>
            </tr>
          </thead>
          <tbody>
            {list
              .filter(
                (v, i) =>
                  i >= (nowPage - 1) * rowCount && i < nowPage * rowCount
              )
              .map((v, i) => (
                <tr
                  key={v.key}
                  className={v.key === selectedKey ? "table-active" : ""}
                  onClick={() => {
                    setYmd(v.ymd);
                    setSelectedKey(selectedKey !== v.key ? v.key : 0);
                  }}
                >
                  <th scope="row">{(nowPage - 1) * rowCount + i + 1}</th>
                  <td>{v.ymd}</td>
                  <td>{v.str}</td>
                  <td>
                    {formAttr.radio.find((v2) => v.radio === v2.value)?.title}
                  </td>
                  <td>
                    {formAttr.checkbox
                      .filter((v2) => v.checkbox.indexOf(v2.value) !== -1)
                      ?.map((v2) => v2.title)
                      .join(", ")}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex flex-wrap justify-content-between align-items-center my-4">
        <p className="col-md-4"></p>
        {/* paging */}
        <nav aria-label="navigation col-md-4 d-flex align-items-center justify-content-center">
          <ul className="pagination mb-0">
            <li className={`page-item ${nowPage === 1 ? "disabled" : ""}`}>
              <a
                className="page-link"
                href="#"
                onClick={() => setNowPage((prev) => --prev)}
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {Array(maxPage)
              .fill(0)
              .map((_, i) => (
                <li
                  className={`page-item ${i + 1 === nowPage ? "active" : ""}`}
                  key={i}
                  onClick={() => setNowPage(i + 1)}
                >
                  <a className="page-link" href="#">
                    {i + 1}
                  </a>
                </li>
              ))}

            <li
              className={`page-item ${nowPage === maxPage ? "disabled" : ""}`}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => setNowPage((prev) => ++prev)}
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* rowCount 변경 */}
        <select
          className="form-select w-25 col-md-4 justify-content-end"
          defaultValue={rowCount}
          onChange={(e) => setRowCount(Number(e.target.value))}
        >
          {[5, 10, 50].map((v, i) => (
            <option value={v} key={i}>
              {v}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
