import Image from 'next/image';
import Titulo from '@/components/base/Titulo/Titulo'
import styles from './NuestrosClientes.module.css'; 
import logoAeco from '@/assets/images/nuestrosClientes/AENCO.webp';
import logoArtika from '@/assets/images/nuestrosClientes/artika.png';
import logoCabanSystem from '@/assets/images/nuestrosClientes/cabanSystem.jpg';
import logoEicon from '@/assets/images/nuestrosClientes/eicon.png';
import logoElecnor from '@/assets/images/nuestrosClientes/ELECNOR.png';
import logoSoltec from '@/assets/images/nuestrosClientes/SOLTEC.png';
import logoVentus from '@/assets/images/nuestrosClientes/VENTUS.jpg';

const NuestrosClientes = () => {
  return (
    <div className={styles.contenedorSectionNuestrosClientes}>
      <Titulo > nuestro clientes</Titulo>
      <div className={styles.contenedorLogosClientes}>
        <Image src={logoAeco} alt="AENCO"  className={styles.logosClientes} />
        <Image src={logoArtika} alt="Artika" className={styles.logosClientes} />
        <Image src={logoCabanSystem} alt="CabanSystem" className={styles.logosClientes} />
        <Image src={logoEicon} alt="Eicon"  className={styles.logosClientes} />
        <Image src={logoElecnor} alt="ELECNOR" className={styles.logosClientes} />
        <Image src={logoSoltec} alt="SOLTEC"  className={styles.logosClientes} />
        <Image src={logoVentus} alt="VENTUS"  className={styles.logosClientes} />
      </div>
    </div>
  );
};

export default NuestrosClientes;
