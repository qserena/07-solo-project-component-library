import classnames from 'classnames'

export default function Banner({ variant, title, children, className }) {
	const variantClass = `banner--${variant}`
	const allClasses = classnames('banner', variantClass, className)
	return (
		<div className={allClasses}>
			<h4>{title}</h4>
			<p>{children}</p>
		</div>
	)
}
