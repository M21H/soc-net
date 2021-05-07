import React from 'react'

const ProfileStatusWithHooks = ({ userStatus, updateUserStatus }) => {
	const [editMode, setEditMode] = React.useState(false)
	const [status, setStatus] = React.useState(userStatus)

	React.useEffect(() => {
		setStatus(userStatus)
	}, [userStatus])

	const activeEditMode = () => {
		setEditMode(true)
	}

	const deactiveEditMode = () => {
		setEditMode(false)
		updateUserStatus(status)
	}

	return (
		<div>
			{editMode ? (
				<div>
					<input
						onChange={e => setStatus(e.currentTarget.value)}
						onBlur={deactiveEditMode}
						autoFocus={true}
						value={status}
					/>
				</div>
			) : (
				<div>
					<span onDoubleClick={activeEditMode}>{userStatus || '---------'}</span>
				</div>
			)}
		</div>
	)
}

export default ProfileStatusWithHooks
