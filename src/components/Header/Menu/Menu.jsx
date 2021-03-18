import React from 'react'
import style from './Menu.module.css'


const Menu = ({ title, onClick }) => {
  const menuItems = title.map((title, index) => (
    <li onClick={() => onClick(title)} className={style.menu__item} key={`${title}_${index}`}>{title}</li>
  ))

  return <ul className={style.menu}>{menuItems}</ul>
}

export default Menu
