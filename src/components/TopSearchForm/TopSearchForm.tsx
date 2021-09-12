import React from 'react'

import SearchIcon from '@material-ui/icons/Search'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import style from './TopSearchForm.module.css'
import { logout } from '../../redux/auth_reducer'
import { AppStateType } from '../../redux/store'
import { RouteName } from '../../routes/routes'

const TopSearchForm: React.FC = () => {
	const dispatch = useDispatch()
	const { login, isAuth } = useSelector(({ auth }: AppStateType) => auth)

	const onLogout = () => {
		dispatch(logout())
	}

	return (
		<div className={style.topSearchForm}>
			<div className={style.topSearchForm__input}>
				<input type='text' placeholder='Search here people or pages...' />
				<SearchIcon style={{ fontSize: 'xx-large', color: '#888da8' }} />
			</div>

			{isAuth ? (
				<div onClick={onLogout} title='logout' className={style.topSearchForm__login} style={{ fontWeight: 'bold' }}>
					<div>{login}</div>
				</div>
			) : (
				<NavLink to={RouteName.LOGIN_ROUTE}>
					<div className={style.topSearchForm__login}>
						<PowerSettingsNewIcon style={{ fontSize: 'xx-large' }} />
					</div>
				</NavLink>
			)}
		</div>
	)
}

export default TopSearchForm
