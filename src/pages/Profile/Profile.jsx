import React from 'react'
import { Avatar } from '@material-ui/core'
import styles from './Profile.module.css'
import PostContainer from '../../components/Profile/Posts/PostContainer'
import Status from '../../components/Profile/Status/Status'
import Preloader from '../../common/Preloader/Preloader'
import { ProfileInfo } from '../../components/Profile/ProfileInfo/ProfileInfo'
import ProfileInfoFormReduxForm from '../../components/Profile/ProfileInfoForm/ProfileInfoForm'
import { useHistory, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile, getUserStatus, savePhoto, saveProfile } from '../../redux/profile_reducer'
import { PROFILE_ROUTE } from '../../utils/const'

const Profile = React.memo(() => {
	const dispatch = useDispatch()
	const history = useHistory()
	let { userId } = useParams()

	const { profile, userStatus } = useSelector(({ profilePage }) => profilePage)
	const { userId: authorizedUserId } = useSelector(({ auth }) => auth)

	const [editMode, setEditMode] = React.useState(false)
	const isOwner = !userId

	React.useEffect(() => {
		if (!userId) {
			userId = authorizedUserId
			if (!userId) {
				history.push(`${PROFILE_ROUTE}`)
			}
		} else if (Number(userId) === authorizedUserId) {
			history.push(`${PROFILE_ROUTE}`)
		}
		dispatch(getUserProfile(userId))
		dispatch(getUserStatus(userId))
	}, [userId])

	if (!profile) {
		return <Preloader />
	}

	const onMainPhotoSelected = e => {
		if (e.target.files.length) {
			dispatch(savePhoto(e.target.files[0]))
		}
	}

	const onSubmit = formData => {
		dispatch(saveProfile(formData)).then(() => setEditMode(false))
	}

	return (
		<>
			<div className={styles.profile}>
				<div className={styles.profile__overlay} />
				<div className={styles.profile__container}>
					<div className={styles.profile__about}>
						<div>
							<Avatar
								className={styles.profile__avatar}
								style={{ border: '3px solid white', width: '150px', height: '150px' }}
								src={profile.photos.large}
							/>
							<div>{isOwner && <input type='file' onChange={onMainPhotoSelected} />}</div>
						</div>

						<div className={styles.profile__fullname}>
							<p>{profile.fullName}</p>
							<Status userStatus={userStatus} />
						</div>
					</div>
				</div>
			</div>

			<div className={styles.profileData}>
				<div className={styles.profileData__container}>
					{editMode ? (
						<ProfileInfoFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
					) : (
						<ProfileInfo profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)} />
					)}
					<PostContainer />
				</div>
			</div>
		</>
	)
})

export default Profile
