export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value) => {
	if (value) return undefined
	return "Field is required"
}

export const maxLength = (max: number): FieldValidatorType => (value) =>
	value.length > max ? `Max length ${max} symbols` : undefined
