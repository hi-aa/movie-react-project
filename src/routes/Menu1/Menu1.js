import styles from "./Menu1.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import Item from "../../components/menu1/Item";
import { useState } from "react";

function Menu1() {
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState('');

  // 여러개의 input의 상태를 연결하기 
  const [inputs, setInputs] = useState({
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
      setAlert('내용을 작성하세요.');
      const timer = setTimeout(function() {
        setAlert(''); // 클리어
      }, 3000);
      return () => clearTimeout(timer);
    }
    setList([...list, inputs.menu1]); // 리스트 업데이트
    setInputs({...inputs, menu1 : ""}); // input 클리어
  }

  // 리스트 삭제
  const deleteMenu = () => {
    console.log("delete");
  }

  // 리스트 체크
  const checkMenu = () => {
    console.log("check");
  }

  return (
    <div>
      <div className="btn-wrap">
        <br/>
          <input type="text" name="menu1" value={inputs.menu1} onChange={onChangeInputs} />

        <button className={styles['btn']} onClick={addMenu}>
          <FontAwesomeIcon icon={faPlus} size="2xl"/>
        </button>
        <button className={styles['btn']} onClick={deleteMenu}>
          <FontAwesomeIcon icon={faXmark} size="2xl"/>
        </button>
        <button className={styles['btn']} onClick={checkMenu}>
          <FontAwesomeIcon icon={faCheck} size="2xl"/>
        </button>
      </div>
      <div className={styles['alert-wrap']}>{alert}</div>

      <div className="cont-wrap">
        <Item list={list} />
      </div>
    </div>
  );
}

export default Menu1;