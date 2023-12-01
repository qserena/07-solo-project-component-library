import TestimonialWithPic from '../components/Testimonials/TestimonialWithPic.jsx'
import Testimonial from '../components/Testimonials/Testimonial.jsx'
import {
	HiOutlineCloudUpload,
	HiOutlineCurrencyDollar,
	HiFingerPrint,
	HiCake,
} from 'react-icons/hi'

export default function TestimonialsPage() {
	return (
		<div className="testimonials-page">
			<h1>Testimonials</h1>

			<p>
				Narrow/widen the browser window to switch between desktop/mobile
				displays.
			</p>

			<TestimonialWithPic
				title="Easy Deployment"
				icon={<HiOutlineCloudUpload className="card--icon-size" />}
				iconColor="#3F75FE"
			>
				Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
				Et magna sit morbi lobortis.
			</TestimonialWithPic>

			<Testimonial
				title="Cash Is King"
				icon={<HiOutlineCurrencyDollar className="card--icon-size" />}
				iconColor="limegreen"
			>
				Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
				Et magna sit morbi lobortis.
			</Testimonial>
		</div>
	)
}
