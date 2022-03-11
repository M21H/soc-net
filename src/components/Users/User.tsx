import { Avatar } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import userImg from '../../assets/img/user.png'
import { follow, unfollow } from '../../redux/users_reducer'
import { getToggleFollowingInProgress } from '../../redux/reselectors/usersReselectors'
import { UserType } from '../../types/types'
import { RouteName } from '../../routes/routes'
import { useAppSelector } from '../../redux/store'

const User: React.FC<UserType> = ({ id, photos, name, status, followed }) => {
	const togFolInProg = useAppSelector(getToggleFollowingInProgress)
	const dispatch = useDispatch()

	const onFollow = () => {
		dispatch(follow(id))
	}

	const onUnFollow = () => {
		dispatch(unfollow(id))
	}

	return (
		<div>
			<NavLink to={`${RouteName.PROFILE_ROUTE}/${id}`}>
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
