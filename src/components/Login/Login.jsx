import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <LoginForm />
    </>
  )
}

let LoginForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          type='text'
          name={'login'}
          placeholder={'Login'}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          type='text'
          name={'password'}
          placeholder={'Passwond'}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field type='checkbox' name={'rememberMe'} component={Input} />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

LoginForm = reduxForm({ form: 'login' })(LoginForm)

export default Login
