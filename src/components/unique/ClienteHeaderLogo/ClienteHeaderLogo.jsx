import React from 'react';
import Image from 'next/image';
import logoIMG from '@/assets/header/logo-header.png';
import Link from 'next/link';
import styles from './ClienteHeaderLogo.module.css';

const ClienteHeaderLogo = () => (
  <Link href="" className={styles.contenedorLogoPagina}>
    <Image 
      src={logoIMG} 
      alt="Logo" 
      priority
      className={styles.img} 
    />
  </Link>
);

export default ClienteHeaderLogo;
