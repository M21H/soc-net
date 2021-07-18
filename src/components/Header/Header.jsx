import { NavLink } from 'react-router-dom'
import style from './Header.module.css'
import { HeaderMenu } from './HeaderMenu'
import logo from '../../assets/img/logo.png'

const Header = () => {
	return (
		<div className={style.header}>
			<div className={style.header__container}>
				<NavLink to='/' style={{ textDecoration: 'inherit', color: 'inherit' }}>
					<div className={style.header__logo}>
						<img src={logo} alt='logo' />
						<div className={style.header__title}>
							<h4>olimpus</h4>
							<h6>BuddyPress Social Network</h6>
						</div>
					</div>
				</NavLink>

				<div className={style.header__menu}>
					<HeaderMenu
						onClick={title => console.log(title)}
						items={['Home', 'Community', 'Pages', 'Blog', 'Events', 'Shop']}
					/>
				</div>
			</div>
		</div>
	)
}

export default Header
