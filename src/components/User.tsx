import { Avatar } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PROFILE_ROUTE } from '../routes/const'
import userImg from '../assets/img/user.png'
import { follow, unfollow } from '../redux/users_reducer'
import { getToggleFollowingInProgress } from '../redux/reselectors/usersReselectors'
import { UserType } from '../type/types'

const User: React.FC<UserType> = ({ id, photos, name, status, followed }) => {
	const togFolInProg = useSelector(getToggleFollowingInProgress)
	const dispatch = useDispatch()

	const onFollow = () => {
		dispatch(follow(id))
	}

	const onUnFollow = () => {
		dispatch(unfollow(id))
	}

	const isTruth = togFolInProg.some(userId => userId === id)  // хоч одна id з масива === User id  => true

	return (
		<div>
			<NavLink to={`${PROFILE_ROUTE}/${id}`}>
				<Avatar src={photos.small != null ? photos.small : userImg} />
			</NavLink>

			<div>{name}</div>
			<div>{status}</div>
			{followed ? (
				<button disabled={isTruth} onClick={onUnFollow}>
					Unfollow
				</button>
			) : (
				<button disabled={isTruth}	onClick={onFollow}>
					Follow
				</button>
			)}
		</div>
	)
}

export default User
