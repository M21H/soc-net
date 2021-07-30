import React from 'react'
import { Form, Formik, Field } from 'formik'
import { useSelector } from 'react-redux'
import { FilterType } from '../../redux/users_reducer'
import { getUsersFilter } from '../../redux/reselectors/usersReselectors'

type FriendFormType = 'true' | 'false' | 'null'

type FormType = {
	term: string
	friend: FriendFormType
}

type PropsType = {
	onFilterChanged: (filter: FilterType) => void
}

const usersSearchFormValidate = (values: any) => {
	const errors = {}
	return errors
}

export const UsersSearchForm: React.FC<PropsType> = React.memo(({ onFilterChanged }) => {
	const filter = useSelector(getUsersFilter)

	const submit = (values: FormType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
		const filter: FilterType = {
			term: values.term,
			friend: values.friend === 'null' ? null : values.friend === 'true',
		}
		onFilterChanged(filter)
		setSubmitting(false)
	}

	return (
		<div>
			<Formik
				enableReinitialize
				initialValues={{ term: filter.term, friend: String(filter.friend) as FriendFormType }}
				validate={usersSearchFormValidate}
				onSubmit={submit}>
				{({ isSubmitting }) => (
					<Form>
						<Field type='text' name='term' />
						<Field name='friend' as='select'>
							<option value='null'>All</option>
							<option value='true'>Only followed</option>
							<option value='false'>Only unfollowed</option>
						</Field>
						<button type='submit' disabled={isSubmitting}>
							Find
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
})
