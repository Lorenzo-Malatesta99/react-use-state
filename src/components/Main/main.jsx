import { useState } from "react";
import { languages } from "../../assets/languages"
import Button from "../button/button";
import DetailCard from "../DetailCard/DetailCard";
import style from "./Main.module.css"; 

const Main = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null); 

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language); 
  };

  return (
    <div className={style.container}>
      <div className={style.buttonList}>
        {languages.map((language) => (
          <Button
            key={language.id} 
            language={language}
            isSelected={selectedLanguage && selectedLanguage.id === language.id} 
            onClick={handleLanguageClick} 
          />
        ))}
      </div>
      <DetailCard language={selectedLanguage} /> 
    </div>
  );
};

export default Main;
