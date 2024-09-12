import React from 'react';
import { Roboto } from 'next/font/google';
import HeaderCliente from '@/components/unique/HeaderCliente/HeaderCliente';
import FooterCliente from '@/components/unique/FooterCliente/FooterCliente';
import './LayoutClienteglobal.css';
import styles from './LayoutCliente.module.css';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

const LayoutCliente = ({ children }) => (
  <div className={`${styles.LayoutClienteContenedor} ${roboto.className}`}>
    <HeaderCliente className={styles.LayoutClienteHeader} />
    <main className={styles.LayoutClienteMain}>{children}</main>
    <FooterCliente className={styles.LayoutClienteFooter} />
  </div>
);

export default LayoutCliente;
