import React from 'react'
import cn from 'classnames'
import style from './Paginator.module.css'
import { getTotalUsersCount } from '../../redux/reselectors/usersReselectors'
import { useAppSelector } from '../../redux/store'

type PropsType = {
	pageSize: number
	currentPage: number
	onPageChanged: (pageNumber: number) => void
	portionSize?: number
}

const Paginator: React.FC<PropsType> = ({ pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
	const totalItemsCount = useAppSelector(getTotalUsersCount)

	const pagesCount = Math.ceil(totalItemsCount / pageSize)
	const pages: Array<number> = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	const portionCount = Math.ceil(pagesCount / portionSize)
	const [portionNumber, setPortionNumber] = React.useState(1)
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
	const rightPortionPageNumber = portionNumber * portionSize

	return (
		<div className={style.paginator}>
			{portionNumber > 1 && (
				<button
					onClick={() => {
						setPortionNumber(portionNumber - 1)
					}}>
					PREV
				</button>
			)}
			{pages
				.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
				.map((page, index) => (
					<span
						key={`${page}_${index}`}
						className={cn({ [style.selectedPage]: currentPage === page }, style.pageNumber)}
						onClick={() => onPageChanged(page)}>
						{`${page} `}
					</span>
				))}
			{portionCount > portionNumber && (
				<button
					onClick={() => {
						setPortionNumber(portionNumber + 1)
					}}>
					NEXT
				</button>
			)}
		</div>
	)
}

export default Paginator
