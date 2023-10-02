import styles from './Popup.module.css';
import PropTypes from 'prop-types';
import Detail from '../components/movie/Detail';

function Popup({id, onClose}) {
  const clickPopup = (event) => {
    event.stopPropagation();
    if (event.target === event.currentTarget) {
      onClose();
    }
  }
  return (
    <div className={styles['popup-container']} onClick={clickPopup}>
      <div className={styles['popup-body']}>
        <span className={styles.close} onClick={clickPopup}>&times;</span>
        <Detail id={id} />
      </div>
    </div>
  );
}

Popup.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default Popup;