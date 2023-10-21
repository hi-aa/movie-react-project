export default function MenuList({ list }) {
  return (
    <div className="row">
      <div className="col">
        <table className="table table-striped light">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">문자</th>
              <th scope="col">라디오</th>
              <th scope="col">체크박스</th>
            </tr>
          </thead>
          <tbody>
            {list.map((v, i) => (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{v.str}</td>
                <td>{v.radio === "Y" ? "Yes" : "No"}</td>
                <td>{v.checkbox?.join(",")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
