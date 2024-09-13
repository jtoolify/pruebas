import React from 'react';
import styles from './Titulo.module.css';

const Titulo = ({children}) => {
  return (
    <div className={styles.contenedorTituloSectionV1}>
      <span>{children}</span>
    </div>
  );
};

export default Titulo;
