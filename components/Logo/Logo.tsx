import React from 'react';
import Link from 'next/link';
import styles from './logo.module.scss';

const Logo = ({ marginBottom }: { marginBottom?: number }) => {
  return (
    <Link href={'/'}>
      <img className={styles.logo} src='/img/logo.svg' alt='logo' style={{ marginBottom }} />
    </Link>
  );
};

export default Logo;
