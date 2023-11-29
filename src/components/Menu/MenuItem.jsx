import React from 'react'
import { MenuContext } from './Menu'

export default function MenuItem({ children, onClick }) {
	const { toggleOpen } = React.useContext(MenuContext)
	return (
		<div
			className="menu-item"
			onClick={() => {
				onClick()
				toggleOpen()
			}}
		>
			{children}
		</div>
	)
}
