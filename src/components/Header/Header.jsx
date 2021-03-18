import React from 'react'
import style from './Header.module.css'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import logo from '../../assets/img/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header__container}>
        <NavLink to='/' style={{textDecoration: 'inherit', color: 'inherit'}} >
          <div className={style.header__logo}>
            <img src={logo} alt='' />
            <div className={style.header__title}>
              <h4>olimpus</h4>
              <h6>BuddyPress Social Network</h6>
            </div>
          </div>
        </NavLink>

        <div className={style.header__menu}>
          <HeaderMenu
            onClick={title => console.log(title)}
            title={['Home', 'Community', 'Pages', 'Blog', 'Events', 'Shop']}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
