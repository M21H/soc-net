import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, InjectedFormProps } from 'redux-form'
import { createField, Input } from '../../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'
import { login } from '../../redux/auth_reducer'
import { Redirect } from 'react-router'
import { AppStateType } from '../../redux/store'


type MapStatePropsType = {
	captchaUrl: string | null
	isAuth: boolean
}

type MapDispatchPropsType = {
	login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type LoginFormValueType = {
	email: string
	password: string
	rememberMe: boolean
	captcha: string
}

type LoginFormValueTypeKeys = Extract<keyof LoginFormValueType, string> // 'email' | 'password' | 'rememberMe' | 'captcha'
// type LoginFormValueTypeKeys = keyof LoginFormValueType

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = ({ login, isAuth, ...props }) => {
	const onSubmit = (formData: LoginFormValueType) => {
		login(formData.email, formData.password, formData.rememberMe, formData.captcha)
	}

	if (isAuth) {
		return <Redirect to='/profile' />
	}

	return (
		<>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
		</>
	)
}

type LoginFormOwnPropsType = {
	captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValueType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = ({ handleSubmit, error, captchaUrl }) => {
	return (
		<form onSubmit={handleSubmit}>
			{createField<LoginFormValueTypeKeys>('Email', 'email', [required], Input)}
			{createField<LoginFormValueTypeKeys>('Password', 'password', [required], Input, { type: 'password' })}

			<div style={{ display: 'flex' }}>
				{createField<LoginFormValueTypeKeys>(undefined, 'rememberMe', [], Input, { type: 'checkbox' }, 'remember me')}
			</div>

			{captchaUrl && <img src={captchaUrl} alt='captcha' />}
			{captchaUrl && createField<LoginFormValueTypeKeys>('Enter symbols from image', 'captcha', [required], Input)}
			{error && <div style={{ color: 'red' }}>{error}</div>}

			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm<LoginFormValueType, LoginFormOwnPropsType>({ form: 'login' })(LoginForm)

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
	isAuth: state.auth.isAuth,
	captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login })(Login)
