 "use client"
import { useState } from 'react';
import LayoutWrapper from "@/layout/LayoutWrapper";
import styles from './ContactModule.module.css';
import Image from 'next/image'; 
import ContactosData from '@/data/ContactosData';

export default function Contactos() {
  const { contactData, socialLinks, formActionUrl, imgaenUbicacion } = ContactosData;

  // Estado para manejar la pestaña activa
  const [activeTab, setActiveTab] = useState('form1');

  // Función para manejar el cambio de pestaña
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <LayoutWrapper layout="cliente">
      <div className={styles.contactModule}>
        <div className={styles.contactInfo}>
          <div className={styles.contenedorDatos}>
            <h3>Datos de Contactos</h3>
            <ul>
              {contactData.map((data, index) => (
                <li key={index}>
                  <div className={styles.contenedorTituloDatos}>
                    <Image src={data.icon} alt="" width={25} height={25} />
                    <strong>{data.title}:</strong>
                  </div>
                  <ul>
                    {data.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.mapContainer}>
            <Image src={imgaenUbicacion} alt="Map" width="100%" height="300" />
          </div>
        </div>

        <div className={styles.socialMedia}>
          <h3>Síguenos en Redes Sociales</h3>
          <div className={styles.socialIcons}>
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noreferrer">
                <Image src={link.icon} alt="" width={40} height={40} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.contactForm}>
          <h3>Envianos un mensaje</h3>
          <div className={styles.tabs}>
            <button 
              className={`${styles.tab} ${activeTab === 'form1' ? styles.activeTab : ''}`} 
              onClick={() => handleTabChange('form1')}
            >
              Formulario 1
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'form2' ? styles.activeTab : ''}`} 
              onClick={() => handleTabChange('form2')}
            >
              Formulario 2
            </button>
          </div>

          {/* Formulario Condicional */}
          {activeTab === 'form1' && (
            <form action={formActionUrl} method="POST">
              <p className={styles.tituloform}>formulario 1</p>
              <input type="hidden" name="_next" />
              <input type="hidden" name="_captcha" value="false" />
              <div className={styles.formGroup}>
                <label htmlFor="name">Nombre Completo</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className={styles.btnform}>Enviar</button>
            </form>
          )}

          {activeTab === 'form2' && (
            <form action={formActionUrl} method="POST">
              <p className={styles.tituloform}>formulario 2</p>

              <input type="hidden" name="_next" />
              <input type="hidden" name="_captcha" value="false" />
              <div className={styles.formGroup}>
                <label htmlFor="name2">Nombre Completo</label>
                <input type="text" id="name2" name="name" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="name3">Nombre Completo</label>
                <input type="text" id="name3" name="name" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email2">Correo Electrónico</label>
                <input type="email" id="email2" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message2">Mensaje</label>
                <textarea id="message2" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className={styles.btnform} >Enviar</button>
            </form>
          )}
        </div>
      </div>
    </LayoutWrapper>
  );
}
