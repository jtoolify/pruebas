import React from 'react';
import ClienteHeaderLogo from '@/components/unique/ClienteHeaderLogo/ClienteHeaderLogo';
import ClienteHeaderMenu from '@/components/unique/ClienteHeaderMenu/ClienteHeaderMenu';

import styles from './HeaderCliente.module.css';


const HeaderCliente = () => (
  <header className={styles.header}>
    <ClienteHeaderLogo />
    <ClienteHeaderMenu />
  </header>
);

export default HeaderCliente;
