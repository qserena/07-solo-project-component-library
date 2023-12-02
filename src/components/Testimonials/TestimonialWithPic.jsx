import classnames from 'classnames'
import quoteIcon from '../../assets/quote-icon.png'

export default function TestimonialWithPic({ quote, name, role, className }) {
	const allClasses = classnames('testimonial--with-pic', className)
	return (
		<div className={allClasses}>
			<div className="testimonial--picture"></div>
			<div className="testimonial--text-container">
				<img src={quoteIcon} alt="quote icon" />
				<p className="testimonial--quote">{quote}</p>
				<p className="testimonial--name">{name}</p>
				<p className="testimonial--role">{role}</p>
			</div>
		</div>
	)
}
