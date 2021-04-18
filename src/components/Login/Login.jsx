import React from 'react'
import { Field, reduxForm } from 'redux-form'

const Login = props => {
  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm />
    </>
  )
}

const LoginForm =props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          type='text'
          name={'login'}
          placeholder={'Login'}
          component={'input'}
        />
      </div>
      <div>
        <Field
          type='text'
          name={'password'}
          placeholder={'Passwond'}
          component={'input'}
        />
      </div>
      <div>
        <Field type='checkbox' name={'rememberMe'} component={'input'} />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

export default Login
