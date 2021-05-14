import React from "react";
import style from "./HeaderMenu.module.css";

const HeaderMenu = ({ titles, onClick }) => {
  const headerMenu = titles.map((title, index) => (
    <li
      className={style.headerMenu__item}
      onClick={() => onClick(title)}
      key={`${title}-${index}`}
    >
      {title}
    </li>
  ));

  return <ul className={style.headerMenu}>{headerMenu}</ul>;
};

export default HeaderMenu;
