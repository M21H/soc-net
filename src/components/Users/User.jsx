import userImg from '../../assets/img/user.png'
import { Avatar } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { PROFILE_ROUTE } from '../../routes/const'

const User = ({
	id,
	photos,
	name,
	status,
	followed,
	toggleFollowingInProgress,
	unfollow,
	follow,
}) => {
	return (
		<div>
			<NavLink to={`${PROFILE_ROUTE}/${id}`}>
				<Avatar src={photos.small != null ? photos.small : userImg} />
			</NavLink>

			<div>{name}</div>
			<div>{status}</div>
			{followed ? (
				<button
					disabled={toggleFollowingInProgress.some(userId => userId === id)} //хоч одна id з масима === User id  => true
					onClick={() => unfollow(id)}>
					Unfollow
				</button>
			) : (
				<button
					disabled={toggleFollowingInProgress.some(userId => userId === id)}
					onClick={() => follow(id)}>
					Follow
				</button>
			)}
		</div>
	)
}

export default User
