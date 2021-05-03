import { Field } from 'redux-form'
import styles from './FormsControls.module.css'

const FormControl = ({ meta, children }) => {
  const hasError = meta.touched && meta.error
  return (
    <>
      <div className={hasError ? styles.error : ''}>{children}</div>
      {hasError && <span className={styles.title__error}>{meta.error}</span>}
    </>
  )
}

export const Textarea = props => {
  const { input, meta, child, ...restProsp } = props
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProsp} />
    </FormControl>
  )
}

export const Input = props => {
  const { input, meta, child, ...restProsp } = props
  return (
    <FormControl {...props}>
      <input {...input} {...restProsp} />
    </FormControl>
  )
}

export const createField = (
  placeholder,
  name,
  validators,
  component,
  props = {}
) => (
  <div>
    <Field
      type='text'
      name={name}
      placeholder={placeholder}
      component={component}
      validate={validators}
      autoComplete='on'
      {...props}
    />
  </div>
)
