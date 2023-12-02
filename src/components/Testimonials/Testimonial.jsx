import classnames from 'classnames'
import workcationIcon from '../../assets/workcation-icon.svg'
import dividerIcon from '../../assets/divider-icon.svg'

export default function Testimonial({ quote, name, role, className }) {
	const allClasses = classnames('testimonial', className)
	return (
		<div className={allClasses}>
			<img src={workcationIcon} alt="Workcation icon" />
			<div className="testimonial--text-container">
				<p className="testimonial--quote">"{quote}"</p>
				<p className="testimonial--name">{name}</p>
				<img
					className="testimonial--divider"
					src={dividerIcon}
					alt="Divider icon"
				/>
				<p className="testimonial--role">{role}</p>
			</div>
		</div>
	)
}
