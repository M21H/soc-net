import React from 'react'
import style from './Header.module.css'
import Menu from './Menu/Menu'
import logo from '../../assets/img/logo.png'



const Header = () => {
  return (
    <div className={style.header} >
      <div className={style.header__container}>

        <div className={style.header__logo}>
          <img src={logo} alt=""/>
          <h4>olimpus</h4>
          <h6>BuddyPress Social Network</h6>
        </div>

        <div className={style.header__menu}>
          <Menu onClick={(title) => console.log(title)} title={['Home', 'Community', 'Pages', 'Blog', 'Events', 'Shop']} />
        </div>

      </div>
    </div>
  )
}

export default Header
