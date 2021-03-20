import { Box } from '@material-ui/core'
import React from 'react'
import style from './ProfileMenu.module.css'

const ProfileMenu = ({ title, Icon }) => {
  return (
    <div className={style.profileMenu}>
      <Box pr={1} color='rgba(63, 66, 87)'>{Icon && <Icon />}</Box>
      <div style={{color: 'rgba(63, 66, 87)', fontWeight: 500}}>{title}</div>
    </div>
  )
}

export default ProfileMenu
