import classnames from 'classnames'

export default function Banner({ severity, title, children, className }) {
	const severityClass = `banner--${severity}`
	const variantClass =
		children === undefined ? `banner--single-line` : `banner--multi-line`
	const allClasses = classnames(
		'banner',
		severityClass,
		variantClass,
		className
	)
	return (
		<div className={allClasses}>
			<img src={`./${severity}.svg`} alt={`${severity} icon`} />
			<h4>{title}</h4>
			<p></p>
			<p>{children}</p>
		</div>
	)
}
