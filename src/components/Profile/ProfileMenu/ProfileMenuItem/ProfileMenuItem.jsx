import { Box } from '@material-ui/core'
import React from 'react'
import style from './ProfileMenuItem.module.css'

const ProfileMenuItem = ({ title, Icon }) => {
  return (
    <div className={style.profileMenuItem}>
      <Box pr={1} color='rgba(63, 66, 87)'>
        {Icon && <Icon />}
      </Box>
      <div style={{ color: 'rgba(63, 66, 87)', fontWeight: 500 }}>{title}</div>
    </div>
  )
}

export default ProfileMenuItem
