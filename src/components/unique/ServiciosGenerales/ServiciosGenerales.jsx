import Image from 'next/image';
import styles from './ServiciosGenerales.module.css';


const ServiciosGenerales = ({datos}) => {
    const { titulo , servicios } = datos;
  return (
    <div className={styles.contenedorSectionServicios}>
      <div className={styles.contenedorTituloSectionV1}>
        <span> {titulo} </span>
      </div>
      <div className={styles.contenedorServicios}>
        {servicios.map((servicio) => (
          <div key={servicio.id} className={styles.servicioItem}>
            <a href="#" className={styles.servicioLink}>
              <Image
                src={servicio.imgSrc}
                alt={servicio.title}
                width={80}
                height={80}
              />
              <span>{servicio.title}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiciosGenerales;
