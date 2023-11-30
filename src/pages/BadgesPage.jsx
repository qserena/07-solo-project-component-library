import Badge from '../components/Badges/Badge.jsx'

export default function BadgePage() {
	return (
		<div className="badges-page">
			<h1>Badges</h1>
			<div className="shape-container">
				<Badge text="Badge" color="gray" shape="square" />
				<Badge text="Badge" color="red" shape="square" />
				<Badge text="Badge" color="yellow" shape="square" />
				<Badge text="Badge" color="green" shape="square" />
				<Badge text="Badge" color="blue" shape="square" />
				<Badge text="Badge" color="indigo" shape="square" />
				<Badge text="Badge" color="purple" shape="square" />
				<Badge text="Badge" color="pink" shape="square" />
			</div>
			<div className="shape-container">
				<Badge text="Badge" color="gray" shape="pill" />
				<Badge text="Badge" color="red" shape="pill" />
				<Badge text="Badge" color="yellow" shape="pill" />
				<Badge text="Badge" color="green" shape="pill" />
				<Badge text="Badge" color="blue" shape="pill" />
				<Badge text="Badge" color="indigo" shape="pill" />
				<Badge text="Badge" color="purple" shape="pill" />
				<Badge text="Badge" color="pink" shape="pill" />
			</div>
		</div>
	)
}
