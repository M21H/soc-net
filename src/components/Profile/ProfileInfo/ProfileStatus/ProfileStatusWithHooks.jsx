import React from 'react'

const ProfileStatusWithHooks = props => {
  const [editMode, setEditMode] = React.useState(false)
  const [userStatus, setUserStatus] = React.useState(props.userStatus)

  React.useEffect(() => {
    setUserStatus(props.userStatus)
  }, [props.userStatus])

  const activeEditMode = () => {
    setEditMode(true)
  }

  const deactiveEditMode = () => {
    setEditMode(false)
    props.updateUserStatus(userStatus)
  }

  const onUserStatusChange = e => {
    setUserStatus(e.target.value)
  }

  return (
    <div>
      {editMode ? (
        <div>
          <input
            onChange={onUserStatusChange}
            onBlur={deactiveEditMode}
            autoFocus={true}
            value={userStatus}
          />
        </div>
      ) : (
        <div>
          <span onDoubleClick={activeEditMode}>
            {props.userStatus || '---------'}
          </span>
        </div>
      )}
    </div>
  )
}

export default ProfileStatusWithHooks
