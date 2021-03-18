import React from 'react'
import style from './TopSearchForm.module.css'

import SearchIcon from '@material-ui/icons/Search';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const TopSearchForm = () => {
  return (
    <div className={style.topSearchForm}>
      <div className={style.topSearchForm__input}>
        <input type="text" placeholder='Search here people or pages...' />
        <SearchIcon style={{fontSize: 'xx-large', color: '#888da8'}}/>
      </div>

      <div className={style.topSearchForm__login}>
        <PowerSettingsNewIcon style={{fontSize: 'xx-large'}} />
      </div>
    </div>
  )
}

export default TopSearchForm
