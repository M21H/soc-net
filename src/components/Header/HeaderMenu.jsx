import style from './HeaderMenu.module.css'

export const HeaderMenu = ({ items }) => {
	const headerMenu = items.map((item, index) => (
		<li className={style.headerMenu__item} key={`${item}-${index}`}>
			{item}
		</li>
	))

	return <ul className={style.headerMenu}>{headerMenu}</ul>
}
