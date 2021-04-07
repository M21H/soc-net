import React from 'react'
import style from './TopSearchForm.module.css'

import SearchIcon from '@material-ui/icons/Search'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import { NavLink } from 'react-router-dom'

const TopSearchForm = props => {
  debugger
  return (
    <div className={style.topSearchForm}>
      <div className={style.topSearchForm__input}>
        <input type='text' placeholder='Search here people or pages...' />
        <SearchIcon style={{ fontSize: 'xx-large', color: '#888da8' }} />
      </div>

      {props.isAuth ? (
        <div
          className={style.topSearchForm__login}
          style={{ fontWeight: 'bold' }}
        >
          {props.login}
        </div>
      ) : (
        <NavLink to='/login'>
          <div className={style.topSearchForm__login}>
            <PowerSettingsNewIcon style={{ fontSize: 'xx-large' }} />
          </div>
        </NavLink>
      )}
    </div>
  )
}

export default TopSearchForm
