import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import queryString from 'querystring'
import User from '../../components/Users/User'
import Paginator from '../../common/Paginator/Paginator'
import { UsersSearchForm } from '../../components/Users/UsersSearchForm'
import {
	getAllUsers,
	getCurrentPage,
	getIsFetching,
	getPageSize,
	getUsersFilter,
} from '../../redux/reselectors/usersReselectors'
import Preloader from '../../common/Preloader/Preloader'
import { FilterType, getUsers } from '../../redux/users_reducer'

type PropsType = {}
type QueryParamsType = { term?: string; page?: string; friend?: string }

const Users: React.FC<PropsType> = () => {
	const users = useSelector(getAllUsers)
	const pageSize = useSelector(getPageSize)
	const currentPage = useSelector(getCurrentPage)
	const filter = useSelector(getUsersFilter)
	const isFetching = useSelector(getIsFetching)

	const dispatch = useDispatch()
	const history = useHistory()

	React.useEffect(() => {
		const parsed = queryString.parse(history.location.search.substring(1)) as QueryParamsType // remove first no-needed symbol, then parsing

		let actualPage = currentPage
		let actualFilter = filter

		if (parsed.page) actualPage = Number(parsed.page)
		if (parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string }
		if (parsed.friend)
			actualFilter = {
				...actualFilter,
				friend: parsed.friend === 'null' ? null : parsed.friend === 'true',
			}

		dispatch(getUsers(actualPage, pageSize, actualFilter))
	}, [])

	React.useEffect(() => {
		const query: QueryParamsType = {}

		if (filter.term) query.term = filter.term
		if (filter.friend !== null) query.friend = String(filter.friend)
		if (currentPage !== 1) query.page = String(currentPage)

		history.push({
			pathname: '/users',
			search: queryString.stringify(query),
		})
	}, [filter, currentPage])

	const onPageChanged = (pageNumber: number) => {
		dispatch(getUsers(pageNumber, pageSize, filter))
	}

	const onFilterChanged = (filter: FilterType) => {
		dispatch(getUsers(1, pageSize, filter))
	}

	return (
		<>
			{isFetching ? (
				<Preloader />
			) : (
				<div>
					<UsersSearchForm onFilterChanged={onFilterChanged} />
					<Paginator pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} />
					{users.map(user => (
						<User key={user.id} {...user} />
					))}
				</div>
			)}
		</>
	)
}

export default Users
