import React from 'react';
import Image from 'next/image';
import menuIMG from '@/assets/header/menu-header.svg';
import styles from './ClienteHeaderMenuIcon.module.css';

const ClienteHeaderMenuIcon = ({ setIsOpenMenu }) => {
  return (
    <button
      className={styles.headerMenuIconButton}
      aria-label="Toggle Menu"
      onClick={() => setIsOpenMenu(prev => !prev)}
    >
      <Image src={menuIMG} alt="Menú" className={styles.img} />
    </button>
  );
}

export default ClienteHeaderMenuIcon;
