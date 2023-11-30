import classnames from 'classnames'

export default function Badge({ text, color, shape, className }) {
	const shapeClass = shape === 'pill' ? 'badge--pill' : 'badge--square'
	const allClasses = classnames('badge', shapeClass, className)
	return (
		<div className={allClasses}>
			<h4>{text}</h4>
		</div>
	)
}
