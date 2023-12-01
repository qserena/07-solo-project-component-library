import classnames from 'classnames'

export default function Testimonial({
	title,
	icon,
	iconColor,
	children,
	className,
}) {
	const allClasses = classnames('testimonial', className)
	const styles = { backgroundColor: iconColor }
	return (
		<div className={allClasses}>
			<div className="icon" style={styles}>
				{icon}
			</div>
			<h3>{title}</h3>
			<p>{children}</p>
		</div>
	)
}
