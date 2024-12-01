import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.row}>
        <h1>Learn Web development</h1>
      </div>
    </div>
  );
};

export default Header