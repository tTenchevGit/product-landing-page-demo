import React, {useState} from 'react';
import styles from './ProductDetails.module.css';
import Modal from './Modal';


const Product2 = () => {

    const [showModal, setShowModal] = useState(false);

    const handleButtonClick = () => {
            setShowModal(true);
    };

    const handleCloseClick = () => {
            setShowModal(false);
    };

    return (
        <section className={styles.section}>
            
            <div className={styles.containerproduct1}>
                <h2 style={{ color: 'white' }}>Amazing Things Happening</h2>
                <img width={450} src="https://m.media-amazon.com/images/I/61A+fuSj3FL._AC_SL1500_.jpg" alt="massage" />
                <p className={styles.description}>
                    Massage is a relaxing and therapeutic treatment that can be performed on the body, face, and hands. It can be performed on the body, face, and hands. It can be performed on the body, face, and hands. It can be performed on the body, face, and hands. It can be performed on the body, face, and hands. It can be performed on the body, face, and hands.
                </p>
                <button  className={styles.button}  onClick={handleButtonClick}>Buy Now</button>
            </div>

            <Modal show={showModal} onClose={handleCloseClick} > </Modal>
        </section>
    );
};

export default Product2;
