import React from 'react'
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form'
import { FieldValidatorType } from '../../utils/validators/validators'
import styles from './FormsControls.module.css'


type FormControlPropsType = {
	meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({ meta: { touched, error }, children }) => {
	const hasError = touched && error
	return (
		<>
			<div className={hasError ? styles.error : ''}>{children}</div>
			{hasError && <span className={styles.title__error}>{error}</span>}
		</>
	)
}

export const Textarea: React.FC<WrappedFieldProps> = props => {
	// const { input, meta, child, ...restProps } = props
	const { input, meta, ...restProps } = props
	return (
		<FormControl {...props}>
			<textarea {...input} {...restProps} />
		</FormControl>
	)
}

export const Input: React.FC<WrappedFieldProps> = props => {
	// const { input, meta, child, ...restProps } = props
	const { input, meta, ...restProps } = props
	return (
		<FormControl {...props}>
			<input {...input} {...restProps} />
		</FormControl>
	)
}

export function createField<FormKeysType extends string>(
	placeholder: string | undefined,
	name: FormKeysType,
	validators: Array<FieldValidatorType>,
	component: React.FC<WrappedFieldProps>,
	props = {}, // can be for example type: password or checkbox
	text = '') {
	return (
		<>
			<Field
				className={styles.field}
				type='text'
				autoComplete='on'
				name={name}
				placeholder={placeholder}
				component={component}
				validate={validators}
				{...props}
			/>{text}
		</>
	)
}