import React from 'react';
import styles from './NoticeCounter.module.scss';

const NoticeCounter = ({props}) => {
    return (
        props
        ?
        <span className={styles.bubble}>
            {props}
        </span>
        :
        <span></span>
    );
};

export default NoticeCounter;