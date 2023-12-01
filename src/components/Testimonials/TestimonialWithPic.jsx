import classnames from 'classnames'

export default function TestimonialWithPic({
	title,
	icon,
	iconColor,
	children,
	className,
}) {
	const allClasses = classnames('testimonial--with-pic', className)
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
