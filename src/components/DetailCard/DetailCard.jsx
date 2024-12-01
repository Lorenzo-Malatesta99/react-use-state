
import styles from "./DetailCard.module.css";
const DetailCard = ({ language }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        {language ? (
          <>
            <h5 className={styles.cardTitle}>{language.title}</h5>
            <p className={styles.cardText}>{language.description}</p>
          </>
        ) : (
          <p className={styles.cardText}>Nessun linguaggio selezionato</p>
        )}
      </div>
    </div>
  );
};

export default DetailCard;
