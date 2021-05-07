import React from "react";
import style from "./HeaderMenu.module.css";

const HeaderMenu = ({ title, onClick }) => {
  const headerMenuItems = title.map((title, index) => (
    <li
      className={style.headerMenu__item}
      onClick={() => onClick(title)}
      key={`${title}_${index}`}
    >
      {title}
    </li>
  ));

  return <ul className={style.headerMenu}>{headerMenuItems}</ul>;
};

export default HeaderMenu;
