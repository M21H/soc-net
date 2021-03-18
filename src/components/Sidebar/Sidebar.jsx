import React from 'react'
import style from './Sidebar.module.css'
import SidebarRow from './SidebarRow/SidebarRow'

import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <SidebarRow IconMenu={MenuIcon} />
      <SidebarRow Icon={PersonIcon} />
      <SidebarRow Icon={GroupIcon} />
    </div>
  )
}

export default Sidebar
