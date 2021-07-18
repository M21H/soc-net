import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from './NotFound.module.css'

const NotFound: React.FC = () => {
	return (
		<div className={styled.notFound}>
			<h1>PAGE NOT FOUND 404</h1>
			<p>What are you looking for...</p>
			<NavLink to='/'>
				<p style={{ marginTop: 20 }}>Go to main page</p>
			</NavLink>
		</div>
	)
}

export default NotFound
