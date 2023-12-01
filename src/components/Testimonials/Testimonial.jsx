import classnames from 'classnames'

export default function Testimonial({ quote, name, role, className }) {
	const allClasses = classnames('testimonial', className)
	return (
		<div className={allClasses}>
			<p>{quote}</p>
			<p>{name}</p>
			<p>{role}</p>
		</div>
	)
}
