export const required = value => {
  if (value) return undefined
  return 'Field is required'
}

export const maxLenght = max => value =>
  value.lenght > maxLenght ? `Max lenght ${max} symbols` : undefined
