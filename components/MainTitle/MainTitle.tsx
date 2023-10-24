import React from 'react';
import styles from './mainTitle.module.scss';

const MainTitle = ({ text }: { text: string }) => {
  return (
    <h2 className={styles.title}>
      {text.toUpperCase()}
      <span className={styles.title__border}></span>
    </h2>
  );
};

export default MainTitle;
