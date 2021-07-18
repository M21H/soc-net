import React from 'react'

const Status = ({ userStatus, updateUserStatus }) => {
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

	const styles = {
		input: {
			backgroundColor: 'inherit',
			color: 'white',
			fontSize: '24px',
			outline: 0,
			border: 'none',
			fontWeight: 'bold',
		},
	}

	return (
		<div>
			{editMode ? (
				<div>
					<input
						style={styles.input}
						onChange={e => setStatus(e.currentTarget.value)}
						onBlur={deactiveEditMode}
						autoFocus
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

export default Status
