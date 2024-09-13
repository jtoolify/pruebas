import styles from './SectionV1.module.css'; 

const SectionV1 = ({titulo, subtitulo, contenido}) => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.rightSection}>
        <span>{titulo}</span>
        <h3>{subtitulo}</h3>
      </div>
      <div className={styles.leftSection}>
        <p>
          {contenido}
        </p>
      </div>
    </div>
  );
};

export default SectionV1;
