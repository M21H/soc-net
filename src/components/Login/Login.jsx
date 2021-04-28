import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../common/FormsControls/FormsControls'
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

let LoginForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          type='text'
          name={'email'}
          placeholder={'Email'}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          type='password'
          name={'password'}
          placeholder={'Password'}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field type='checkbox' name={'rememberMe'} component={Input} />
        <div>remember me</div>
      </div>
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
