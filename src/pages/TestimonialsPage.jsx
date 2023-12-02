import TestimonialWithPic from '../components/Testimonials/TestimonialWithPic.jsx'
import Testimonial from '../components/Testimonials/Testimonial.jsx'

export default function TestimonialsPage() {
	return (
		<div className="testimonials-page">
			<h1>Testimonials</h1>

			<p>
				Narrow/widen the browser window to switch between desktop/mobile
				displays.
			</p>

			<h2 className="banner--column-header">With Pic</h2>

			<TestimonialWithPic
				quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."
				name="May Andersons"
				role="Workcation, CTO"
			/>

			<h2 className="banner--column-header">No Pic</h2>

			<Testimonial
				quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."
				name="May Andersons"
				role="Workcation, CTO"
			/>
		</div>
	)
}
