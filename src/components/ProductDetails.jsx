import React from 'react';
import styles from './ProductDetails.module.css';
import { Helmet } from 'react-helmet';

const ProductDetails = () => {
    return (
        <section className={styles.section}>
            <Helmet>
                <title>Amazing Massage</title>
            </Helmet>
            <div className={styles.containerproduct1}>
                <h2 style={{ color: 'white' }}>Amazing Things Happening</h2>
                <img width={450} src="https://m.media-amazon.com/images/I/61A+fuSj3FL._AC_SL1500_.jpg" alt="massage" />
                <p className={styles.description}>
                    Massage is a relaxing and therapeutic treatment that can be performed on the body, face, and hands. It can be performed on the body, face, and hands. It can be performed on the body, face, and hands. It can be performed on the body, face, and hands. It can be performed on the body, face, and hands. It can be performed on the body, face, and hands.
                </p>
                <button className={styles.button}>Buy Now</button>
            </div>
        </section>
    );
};

export default ProductDetails;
