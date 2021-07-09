import MenuIcon from '@material-ui/icons/Menu'
import PersonIcon from '@material-ui/icons/Person'
import GroupIcon from '@material-ui/icons/Group'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import { NavLink } from 'react-router-dom'
import { Box } from '@material-ui/core'
import { DIALOGS_ROUTE, PROFILE_ROUTE, USERS_ROUTE } from '../../routes/const'

const Sidebar = () => {
	const styles = {
		box: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: 70,
			width: 70,
		},
		icon: {
			fontSize: 'xx-large',
			color: '#3f4257',
		},
		selected: {
			color: 'blue',
		},
		active: {
			color: 'red',
		},
	}

	return (
		<div style={{ position: 'fixed' }}>
			<Box style={{ ...styles.box, backgroundColor: '#ef5a39' }}>
				<MenuIcon style={{ ...styles.icon, color: 'white' }} />
			</Box>

			<Box style={styles.box}>
				<NavLink to={PROFILE_ROUTE}>
					<PersonIcon style={styles.icon} />
				</NavLink>
			</Box>

			<NavLink to={DIALOGS_ROUTE}>
				<Box style={styles.box}>
					<QuestionAnswerIcon style={styles.icon} />
				</Box>
			</NavLink>

			<NavLink to={USERS_ROUTE}>
				<Box style={styles.box}>
					<GroupIcon style={styles.icon} />
				</Box>
			</NavLink>
		</div>
	)
}

export default Sidebar
