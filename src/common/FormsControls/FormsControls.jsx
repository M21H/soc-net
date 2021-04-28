import styles from './FormsControls.module.css'

const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error
  return (
    <>
      <div className={hasError ? styles.error : ''}>{props.children}</div>
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
