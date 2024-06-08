import React from 'react';
import styles from './Modal.module.css';


const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
      <div className={styles.containerproduct1}>
                <h2 style={{ color: 'white' }}>Amazing Things Happening</h2>
                <img width={250} src="https://m.media-amazon.com/images/I/61A+fuSj3FL._AC_SL1500_.jpg" alt="massage" />
                <p className={styles.description}>
                    Massage is a relaxing and therapeutic treatment that can be performed on the body, face, and hands. It can be performed on the body, face, and hands. It can be performed on the body, face, and hands. It can be performed on the body, face, and hands. It can be performed on the body, face, and hands. It can be performed on the body, face, and hands.
                </p>
                
            </div>
        <button className={styles.closeButton} onClick={onClose}>Close</button>
        <button className={styles.proceed} onClick={onClose}>Proceed To check out</button>
      </div>
    </div>
  );
};

export default Modal;
