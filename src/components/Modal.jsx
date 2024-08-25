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
                    Massage is a relaxing and therapeutic experience. It is a great way to relieve stress and tension, and can help improve circulation and flexibility. Massage can also help reduce pain and inflammation, and promote healing in the body. Whether you are looking for a relaxing massage or a therapeutic treatment, we have a variety of options to choose from. Our experienced massage therapists will work with you to create a customized treatment plan that meets your individual needs. Book your appointment today and experience the amazing benefits of massage therapy!
                </p>
                
            </div>
        <button className={styles.closeButton} onClick={onClose}>Close</button>
        <button className={styles.proceed} onClick={onClose}>Proceed To check out</button>
      </div>
    </div>
  );
};

export default Modal;
