import classnames from 'classnames'

export default function TestimonialWithPic({ quote, name, role, className }) {
	const allClasses = classnames('testimonial--with-pic', className)
	return (
		<div className={allClasses}>
			<div className="testimonial--picture"></div>
			<p>{quote}</p>
			<p>{name}</p>
			<p>{role}</p>
		</div>
	)
}
