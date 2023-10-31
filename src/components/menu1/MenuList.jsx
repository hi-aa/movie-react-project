import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function MenuList({
  formAttr,
  list = [],
  selectedKey,
  setSelectedKey,
}) {
  const [nowPage, setNowPage] = useState(1);
  const [rowCount, setRowCount] = useState(10);

  const countMaxPage = () => {
    const test = Math.ceil(list.length / rowCount);
    // console.log(list.length, { test, rowCount });
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
                    setSelectedKey(selectedKey !== v.key ? v.key : 0);
                  }}
                >
                  <th scope="row">{i + 1}</th>
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

      {/* todo : paging */}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item disabled`}>
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {Array(maxPage)
            .fill(0)
            .map((_, i) => (
              <li
                className="page-item"
                key={i}
                onClick={() => setNowPage(i + 1)}
              >
                <a className="page-link" href="#">
                  {i + 1}
                </a>
              </li>
            ))}

          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
