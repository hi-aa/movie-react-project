import PropTypes from "prop-types";
import { styles } from './Item.module.css';

function Item({list}) {
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
            list.map((v, i) => 
            <tr key={i}>
              <td>
                {v}
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
  list: PropTypes.array.isRequired
};

export default Item;
