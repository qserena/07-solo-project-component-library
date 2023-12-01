import classnames from 'classnames'

export default function Badge({ text, color, shape, className }) {
	const colorClass = `badge--${color}`
	const shapeClass = `badge--${shape}`
	const allClasses = classnames('badge', colorClass, shapeClass, className)
	return (
		<div className={allClasses}>
			<h4>{text}</h4>
		</div>
	)
}
