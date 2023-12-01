import classnames from 'classnames'

export default function Card({ title, icon, iconColor, children, className }) {
	const allClasses = classnames('card', className)
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
