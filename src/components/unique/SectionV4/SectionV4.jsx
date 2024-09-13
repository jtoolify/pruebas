import React from 'react';
import styles from './SectionV4.module.css'; 

const SectionV4 = ({ title, sections }) => {
    return (
        <div className={styles.contenedorMisionVisionValores}>
            <div className={styles.contenedorTituloSectionV1}>
                <span>{title}</span>
            </div>

            <div className={styles.contenedorValores}>
                {sections.map((section, index) => (
                    <div key={index}>
                        <h4>{section.heading}</h4>
                        <p>{section.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectionV4;
