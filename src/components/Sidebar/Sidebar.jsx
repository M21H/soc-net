import MenuIcon from '@material-ui/icons/Menu'
import PersonIcon from '@material-ui/icons/Person'
import GroupIcon from '@material-ui/icons/Group'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import ChatIcon from '@material-ui/icons/Chat'
import { NavLink } from 'react-router-dom'
import { Box, IconButton } from '@material-ui/core'
import { RouteName } from '../../routes/routes'

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

			<NavLink to={RouteName.PROFILE_ROUTE}>
				<Box style={styles.box}>
					<IconButton>
						<PersonIcon style={styles.icon} />
					</IconButton>
				</Box>
			</NavLink>

			<NavLink to={RouteName.DIALOGS_ROUTE}>
				<Box style={styles.box}>
					<IconButton>
						<QuestionAnswerIcon style={styles.icon} />
					</IconButton>
				</Box>
			</NavLink>

			<NavLink to={RouteName.USERS_ROUTE}>
				<Box style={styles.box}>
					<IconButton>
						<GroupIcon style={styles.icon} />
					</IconButton>
				</Box>
			</NavLink>

			<NavLink to={RouteName.CHAT_ROUTE}>
				<Box style={styles.box}>
					<IconButton>
						<ChatIcon style={styles.icon} />
					</IconButton>
				</Box>
			</NavLink>
		</div>
	)
}

export default Sidebar
