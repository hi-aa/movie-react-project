import styles from "./Menu1.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import Item from "../../components/menu1/Item";
import { useState } from "react";

function Menu1() {
  const [list, setList] = useState([]);
  const [counter, setCouter] = useState(0); // list key 생성용
  const [selectedKey, setSelectedKey] = useState(-1);
  const [clearList, setClearList] = useState([]); // checked list
  const [alert, setAlert] = useState('');

  const [inputs, setInputs] = useState({ // 여러개의 input의 상태를 연결하기 
    menu1: ''
  });

  // input state 업데이트
  const onChangeInputs = e => {
    const {name, value} = e.target;

    setInputs({
      ...inputs,
      [name] : value
    });
  };

  // 리스트 추가
  const addMenu = (e) => {
    if(inputs.menu1 === "") { // 공백 막기
      showAlert('내용을 작성하세요.');
      return;
    }
    setList([...list, {key: counter, value: inputs.menu1}]); // 리스트 업데이트
    setInputs({...inputs, menu1 : ""}); // input 클리어
    setCouter(counter => ++counter);
  }

  // 리스트 삭제
  const deleteMenu = () => {
    if(selectedKey < 0) {
      showAlert('삭제할 아이템을 선택하세요.');
      return;
    }

    let temp = [...list]; // 배열 복사
    let selectedIdx = list.findIndex(v => v.key === selectedKey);
    temp.splice(selectedIdx, 1); // 복사된 배열에서 selectedKey 삭제
    // state 업데이트
    setList(temp); 
    setSelectedKey(-1);
  }

  // 리스트 체크
  const checkMenu = () => {
    if(selectedKey < 0) {
      showAlert('체크할 아이템을 선택하세요.');
      return;
    }

    let checkIdx = clearList.indexOf(selectedKey);
    if(checkIdx === -1) { // 추가
      console.log('추가')
      setClearList([...clearList, selectedKey]);
      
    } else { // 삭제
      console.log('삭제')

      let temp = [...clearList];
      temp.splice(checkIdx, 1);

      setClearList(temp);

    }
    console.log(clearList)

    // setClearList()
  }

  // 알럿 표시
  const showAlert = (message) => {
    setAlert(message);

    const timer = setTimeout(function() {
      setAlert(''); // 클리어
    }, 3000);
    return () => clearTimeout(timer);
  }

  return (
    <div>
      <div className="btn-wrap">
        <br/>
        {/* [{selectedKey}] */}
        <input type="text" name="menu1" value={inputs.menu1} onChange={onChangeInputs} />

        <button className={styles['btn']} onClick={addMenu} title="Add item">
          <FontAwesomeIcon icon={faPlus} size="2xl"/>
        </button>
        <button className={styles['btn']} onClick={deleteMenu} title="Delete item">
          <FontAwesomeIcon icon={faXmark} size="2xl"/>
        </button>
        <button className={styles['btn']} onClick={checkMenu} title="Check item">
          <FontAwesomeIcon icon={faCheck} size="2xl"/>
        </button>
      </div>
      <div className={styles['alert-wrap']}>{alert}</div>

      <div className="cont-wrap">
        <Item list={list}
          selectedKey={selectedKey}
          setSelectedKey={setSelectedKey}
          clearList={clearList}
        />
      </div>
    </div>
  );
}

export default Menu1;