import Card from '../components/Card/Card.jsx'
import {
	HiOutlineCloudUpload,
	HiOutlineCurrencyDollar,
	HiFingerPrint,
	HiCake,
} from 'react-icons/hi'

export default function CardsPage() {
	return (
		<div className="cards-page">
			<h1>Cards</h1>

			<div className="card--container">
				<Card
					title="Easy Deployment"
					icon={<HiOutlineCloudUpload className="card--icon-size" />}
					iconColor="#3F75FE"
				>
					Ac tincidunt sapien vehicula erat auctor pellentesque
					rhoncus. Et magna sit morbi lobortis.
				</Card>

				<Card
					title="Cash Is King"
					icon={
						<HiOutlineCurrencyDollar className="card--icon-size" />
					}
					iconColor="limegreen"
				>
					Ac tincidunt sapien vehicula erat auctor pellentesque
					rhoncus. Et magna sit morbi lobortis.
				</Card>

				<Card
					title="Fingerprint Is Mandatory"
					icon={<HiFingerPrint className="card--icon-size" />}
					iconColor="purple"
				>
					Ac tincidunt sapien vehicula erat auctor pellentesque
					rhoncus. Et magna sit morbi lobortis.
				</Card>

				<Card
					title="Cake For Everyone!"
					icon={<HiCake className="card--icon-size" />}
					iconColor="orange"
				>
					Ac tincidunt sapien vehicula erat auctor pellentesque
					rhoncus. Et magna sit morbi lobortis.
				</Card>
			</div>
		</div>
	)
}
