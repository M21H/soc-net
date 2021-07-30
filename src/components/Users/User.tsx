import { Avatar } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PROFILE_ROUTE } from '../../utils/const'
import userImg from '../../assets/img/user.png'
import { follow, unfollow } from '../../redux/users_reducer'
import { getToggleFollowingInProgress } from '../../redux/reselectors/usersReselectors'
import { UserType } from '../../types/types'

const User: React.FC<UserType> = ({ id, photos, name, status, followed }) => {
	const togFolInProg = useSelector(getToggleFollowingInProgress)
	const dispatch = useDispatch()

	const onFollow = () => {
		dispatch(follow(id))
	}

	const onUnFollow = () => {
		dispatch(unfollow(id))
	}

	return (
		<div>
			<NavLink to={`${PROFILE_ROUTE}/${id}`}>
				<Avatar src={photos.small != null ? photos.small : userImg} />
			</NavLink>

			<div>{name}</div>
			<div>{status}</div>
			{followed ? (
				<button disabled={togFolInProg.some(userId => userId === id)} onClick={onUnFollow}>
					Unfollow
				</button>
			) : (
				<button disabled={togFolInProg.some(userId => userId === id)} onClick={onFollow}>
					Follow
				</button>
			)}
		</div>
	)
}

export default User
