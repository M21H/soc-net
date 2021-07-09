import React from 'react'
import { NavLink } from 'react-router-dom'
import { DIALOGS_ROUTE } from '../../routes/const'

type PropsType = {
	name: string
	id: number
}

const DialogItem: React.FC<PropsType> = ({ name, id }) => {
	const path = `${DIALOGS_ROUTE}/${id}`

	return (
		<div>
			<NavLink to={path}>{name}</NavLink>
		</div>
	)
}

export default DialogItem
