import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { createField, Input } from '../../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'
import { login } from '../../redux/auth_reducer'
import { Redirect } from 'react-router'

const Login = ({ login, isAuth }) => {
	const onSubmit = formData => {
		login(formData.email, formData.password, formData.rememberMe)
	}

	if (isAuth) {
		return <Redirect to='/profile' />
	}

	return (
		<>
			<h1>Login</h1>
			<LoginForm onSubmit={onSubmit} />
		</>
	)
}

let LoginForm = ({ handleSubmit, error }) => {
	return (
		<form onSubmit={handleSubmit}>
			{createField('Email', 'email', [required], Input)}
			{createField('Password', 'password', [required], Input, {
				type: 'password',
			})}

			<div style={{ display: 'flex' }}>
				{createField(null, 'rememberMe', [], Input, { type: 'checkbox' })}
				<div>remember me</div>
			</div>

			{error && <div style={{ color: 'red' }}>{error}</div>}

			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

LoginForm = reduxForm({ form: 'login' })(LoginForm)

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)
