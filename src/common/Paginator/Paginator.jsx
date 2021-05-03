import React from 'react'
import style from './Paginator.module.css'

const Paginator = ({ usersCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(usersCount / pageSize)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      {pages.map((page, index) => (
        <span
          key={`${page}_${index}`}
          className={currentPage === page ? style.active : null}
          onClick={() => onPageChange(page)}
        >
          {`${page} `}
        </span>
      ))}
    </div>
  )
}

export default Paginator
