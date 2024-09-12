import React from 'react';
import styles from './Footer.module.css';

const FooterCliente = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <div className={styles.footerSection}>
        <h2 className={styles.footerSectionTitle}>Nuestra Empresa</h2>
        <div className={styles.footerSectionContent}>
          <p className={styles.colorGray}>
            Somos una empresa de ingeniería integral, ejecutando proyectos que impulsan la economía de su empresa. Ingeniería Eléctrica, de Sistemas, Electrónica, Mecánica, Civil, entre otras.
          </p>
        </div>
      </div>

      <div className={styles.footerSection}>
        <h2 className={styles.footerSectionTitle}>Ubicaciones</h2>
        <div className={styles.footerSectionContent}>
          <div>
            <strong>SEDE TECNOLÓGICA</strong><br />
            BARRANCABERMEJA<br />
            Calle 52A #34c-60<br /><br />
          </div>
          <div>
            <strong>SEDE LOGÍSTICA</strong><br />
            BARRANQUILLA-ATLÁNTICO<br />
            CALLE 65B#42-45<br /><br />
          </div>
        </div>
      </div>

      <div className={styles.footerSection}>
        <h2 className={styles.footerSectionTitle}>Servicios</h2>
        <div className={styles.footerSectionContent}>
          Carga liviana / Transporte de pasajeros / Servicios eléctricos / Ingeniería Civil
        </div>
      </div>

      <div className={styles.footerSection}>
        <h2 className={styles.footerSectionTitle}>Links útiles</h2>
        <div className={styles.footerSectionContent}>
          <ul className={styles.footerLinks}>
            <li><a href="/login">administradores</a></li>
            <li><a href="#">Register as Supplier</a></li>
            <li><a href="#">Register as Supplier</a></li>
            <li><a href="#">Register as Supplier</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterCliente;
