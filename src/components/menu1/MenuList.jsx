export default function MenuList({
  formAttr,
  list,
  selectedKey,
  setSelectedKey,
}) {
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
            {list.map((v, i) => (
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
    </div>
  );
}
