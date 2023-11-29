import React from 'react'
import useToggle from '../hooks/useToggle'
import { BsStar, BsStarFill } from 'react-icons/bs'

/**
 * Challenge: Remove all parts of our Toggle component
 * (don't delete the react-icons stars though!) and use
 * the useToggle hook to conditionally render the stars.
 * Make sure to add an onClick that runs the `toggle` function
 * you get from useToggle()
 */

export default function Star({ onChange }) {
	const [on, toggle] = useToggle({
		initialValue: false,
		onToggle: onChange,
	})
	return (
		<div onClick={toggle}>
			{on ? (
				<BsStarFill className="star filled" />
			) : (
				<BsStar className="star" />
			)}
		</div>
	)
}
