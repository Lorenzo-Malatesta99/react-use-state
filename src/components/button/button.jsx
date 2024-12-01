import styles from "./Button.module.css"; 

const Button = ({ language, isSelected, onClick }) => {
  return (
    <button
      className={`${styles.button} ${isSelected ? styles.buttonSelected : ""}`} 
      onClick={() => onClick(language)}
    >
      {language.title}
    </button>
  );
};

export default Button;
