import Image from 'next/image';
import styles from './LocalizacionSatelital.module.css'; 
import fondoImg from '@/assets/images/fondos/b3.png';
import locationMap from '@/assets/images/icon/gps-location-map.png';
import locationMapNavigation from '@/assets/images/icon/gps-location-map-navigation.png';




const LocalizacionSatelital = () => {
  return (
    <div className={styles.contenedorLocalizacionSatelital}>
      <Image
        src={fondoImg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className={styles.bgImage}
      />
      <div className={styles.contenidoLocalizacionSatelital}>
        <span>LOCALIZACIÓN SATELITAL</span>
        <h3>LOCALIZA TU VEHÍCULO DESDE LA COMODIDAD DE TU HOGAR</h3>
        <div className={styles.contenedorBloqueLocalizacion}>
          <Image
            src={locationMap}
            alt="Icono 1"
            width={80}
            height={80}
          />
          <div>
            <span>Seguridad remota</span>
            <p>Para todo tipo de vehículos y equipos para el sector industrial, constructor y petrolero</p>
          </div>
        </div>
        <div className={styles.contenedorBloqueLocalizacion}>
          <Image
            src={locationMapNavigation}
            alt="Icono 2"
            width={80}
            height={80}
          />
          <div>
            <span>Desde tu celular</span>
            <p>Protección activa las 24 horas, sensor de velocidad, botón S.O.S y sensor de alejamiento</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalizacionSatelital;
