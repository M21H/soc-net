import React from 'react'
import style from './Preloader.module.css'
import preloader from '../../assets/img/preloader.gif'

const Preloader = () => {
  return (
    <div className={style.preloader}>
      <img src={preloader} alt='loading' />
    </div>
  )
}

export default Preloader
