import React from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { login } from '../../redux/auth_reducer'
import styled from './Login.module.css'
import { createField, Input } from '../../common/FormsControls/FormsControls'
import { useAppSelector } from '../../redux/store'
import { required } from '../../utils/validators/validators'
import { RouteName } from '../../routes/routes'

type LoginFormValueType = {
	email: string
	password: string
	rememberMe: boolean
	captcha: string
}

type LoginFormValueTypeKeys = Extract<keyof LoginFormValueType, string> // 'email' | 'password' | 'rememberMe' | 'captcha'
// type LoginFormValueTypeKeys = keyof LoginFormValueType

const Login: React.FC = () => {
	const dispatch = useDispatch()
	const { isAuth, captchaUrl } = useAppSelector(({ auth }) => auth)

	const onSubmit = (formData: LoginFormValueType) => {
		dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
	}
	return isAuth ? <Redirect to={RouteName.PROFILE_ROUTE} /> : <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
}

type LoginFormOwnPropsType = {
	captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValueType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = ({
	handleSubmit,
	error,
	captchaUrl,
}) => {
	return (
		<form className={styled.formControl} onSubmit={handleSubmit}>
			<div>
				{createField<LoginFormValueTypeKeys>('Email', 'email', [required], Input)}
				{createField<LoginFormValueTypeKeys>('Password', 'password', [required], Input, {
					type: 'password',
				})}

				{captchaUrl && createField<LoginFormValueTypeKeys>('Enter symbols from image', 'captcha', [required], Input)}
				{captchaUrl && (
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<img src={captchaUrl} alt='captcha' />
					</div>
				)}
				{error && <div style={{ color: 'red' }}>{error}</div>}

				<div style={{ display: 'flex', justifyContent: 'flexStart', alignItems: 'center' }}>
					{createField<LoginFormValueTypeKeys>(undefined, 'rememberMe', [], Input, { type: 'checkbox' }, 'remember me')}
				</div>
				<button className={styled.btn_login}>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm<LoginFormValueType, LoginFormOwnPropsType>({ form: 'login' })(LoginForm)

export default Login
