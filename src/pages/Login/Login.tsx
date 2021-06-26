import React from 'react'
import styled from './Login.module.css'
import { login } from '../../redux/auth_reducer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { createField, Input } from '../../common/FormsControls/FormsControls'
import { AppStateType } from '../../redux/store'
import { required } from '../../utils/validators/validators'



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
  return isAuth ? <Redirect to='/profile' /> : <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
}

type LoginFormOwnPropsType = {
  captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValueType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form className={styled.formControl} onSubmit={handleSubmit}>
      <div>
        {createField<LoginFormValueTypeKeys>('Email', 'email', [required], Input)}
        {createField<LoginFormValueTypeKeys>('Password', 'password', [required], Input, { type: 'password' })}

        {captchaUrl && createField<LoginFormValueTypeKeys>('Enter symbols from image', 'captcha', [required], Input)}
        {captchaUrl && <div style={{ display: 'flex', justifyContent: 'center' }}><img src={captchaUrl} alt='captcha' /></div>}
        {error && <div style={{ color: 'red' }}>{error}</div>}

        <div style={{ display: 'flex', justifyContent: 'flexStart', alignItems: 'center' }}>
          {createField<LoginFormValueTypeKeys>(undefined, 'rememberMe', [], Input, { type: 'checkbox' }, 'remember me')}
        </div>
        <button className={styled.btn_login}>Login</button>
      </div>
    </form >
  )
}

const LoginReduxForm = reduxForm<LoginFormValueType, LoginFormOwnPropsType>({ form: 'login' })(LoginForm)

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login })(Login)
