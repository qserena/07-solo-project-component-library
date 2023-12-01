import classnames from 'classnames'
//import successIcon from './success.svg'

export default function Banner({ variant, title, children, className }) {
	const variantClass = `banner--${variant}`
	const allClasses = classnames('banner', variantClass, className)
	return (
		<div className={allClasses}>
			<p>{`./${variant}.svg`}</p>
			<img src={`./${variant}.svg`} alt={`${variant} icon`} />
			<h4>{title}Hej</h4>
			<p></p>
			<p>{children}</p>
		</div>
	)
}
