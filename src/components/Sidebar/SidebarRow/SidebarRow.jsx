import React from 'react'
import style from './SidebarRow.module.css'

const SidebarRow = ({ IconMenu, Icon }) => {
  return (
    <div className={style.sidebarRow}>
      {IconMenu && (
        <div
          style={{ backgroundColor: '#ef5a39' }}
          className={style.sidebarRow__item}
        >
          <IconMenu className={style.sidebarRow__iconMenu} />
        </div>
      )}
      {Icon && (
        <div
          // style={{ backgroundColor: 'transparent' }}
          className={style.sidebarRow__item}
        >
          <Icon className={style.sidebarRow__icon} />
        </div>
      )}
    </div>
  )
}

export default SidebarRow
