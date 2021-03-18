import React from 'react'
import style from './Sidebar.module.css'
import SidebarRow from './SidebarRow/SidebarRow'

import MenuIcon from '@material-ui/icons/Menu'
import PersonIcon from '@material-ui/icons/Person'
import GroupIcon from '@material-ui/icons/Group'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <SidebarRow IconMenu={MenuIcon} />

      <NavLink to='/profile' >
        <SidebarRow Icon={PersonIcon} />
      </NavLink>

      <NavLink to='/dialogs'>
        <SidebarRow Icon={GroupIcon} />
      </NavLink>
      
    </div>
  )
}

export default Sidebar
