import React from 'react';
import styles from './footer.module.css';

const Footer = (props) => {
    console.log('footer renders');
    return (<footer className={styles.footer}>
            <p className={styles.title}>Code your dream</p>
        </footer>
    );
}

export default React.memo(Footer);