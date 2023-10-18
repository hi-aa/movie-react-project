import PropTypes from "prop-types";
import styles from './Item.module.css';

function Item({ list, selectedKey, setSelectedKey, clearList }) {
  // 아이템 선택
  const onClick = (e, key) => {
    setSelectedKey(selectedKey !== key ? key : -1); // 같은 아이템을 클릭하면 selected 해제
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              List
            </th>
          </tr>
        </thead>
        <tbody>
          {
            list.map(item => 
              <tr key={item.listKey}
                onClick={e => onClick(e, item.listKey)}
                className={[selectedKey === item.listKey ? styles.active: '', clearList.indexOf(item.listKey) > -1 ? styles.check : ''].join(' ')}
              >
                <td>
                  {item.listTitle} / {item.listConts}
                </td>
              </tr>  
            )
          }
        </tbody>
      </table>
    </div>
  );
}

Item.propType = {
  list: PropTypes.array.isRequired,
  selectedKey: PropTypes.number,
  setSelectedKey: PropTypes.func.isRequired,
  clearList: PropTypes.array.isRequired,
};

export default Item;