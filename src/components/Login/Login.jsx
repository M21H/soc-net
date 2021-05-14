import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { createField, Input } from '../../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'
import { login } from '../../redux/auth_reducer'
import { Redirect } from 'react-router'

const Login = ({ login, isAuth, ...props }) => {
	const onSubmit = formData => {
		login(formData.email, formData.password, formData.rememberMe, formData.captcha)
	}

	if (isAuth) {
		return <Redirect to='/profile' />
	}

	return (
		<>
			<h1>Login</h1>
			<LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
		</>
	)
}

let LoginForm = ({ handleSubmit, error, captchaUrl }) => {
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

			{captchaUrl && <img src={captchaUrl} alt='captch' />}
			{captchaUrl && createField('Enter symbols from image', 'captcha', [required], Input)}
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
	captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, { login })(Login)
