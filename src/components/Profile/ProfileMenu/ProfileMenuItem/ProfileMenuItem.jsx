import { Box } from '@material-ui/core'
import React from 'react'

const ProfileMenuItem = ({ title, Icon }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: 70,
        borderRight: '1px solid rgba(63, 66, 87, 0.1)',
        padding: '0 40px',
      }}
    >
      <Box pr={1} color='rgba(63, 66, 87)'>
        {Icon && <Icon />}
      </Box>
      <div style={{ color: 'rgba(63, 66, 87)', fontWeight: 500 }}>{title}</div>
    </div>
  )
}

export default ProfileMenuItem
