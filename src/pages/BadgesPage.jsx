import Badge from '../components/Badges/Badge.jsx'

export default function BadgePage() {
	return (
		<div className="badges-page">
			<h1>Badges</h1>

			<div className="badge--shape-container">
				<span className="badge--shape-text">
					<h2>Square</h2>
				</span>
				<div className="badge--container">
					<p className="badge--color-text">Gray</p>
					<Badge text="Badge" color="gray" shape="square" />
				</div>
				<div className="badge--container">
					<p className="badge--color-text">Red</p>
					<Badge text="Badge" color="red" shape="square" />
				</div>
				<div className="badge--container">
					<p className="badge--color-text">Yellow</p>
					<Badge text="Badge" color="yellow" shape="square" />
				</div>
				<div className="badge--container">
					<p className="badge--color-text">Green</p>
					<Badge text="Badge" color="green" shape="square" />
				</div>
				<div className="badge--container">
					<p className="badge--color-text">Blue</p>
					<Badge text="Badge" color="blue" shape="square" />
				</div>
				<div className="badge--container">
					<p className="badge--color-text">Indigo</p>
					<Badge text="Badge" color="indigo" shape="square" />
				</div>
				<div className="badge--container">
					<p className="badge--color-text">Purple</p>
					<Badge text="Badge" color="purple" shape="square" />
				</div>
				<div className="badge--container">
					<p className="badge--color-text">Pink</p>
					<Badge text="Badge" color="pink" shape="square" />
				</div>
			</div>

			<div className="badge--shape-container">
				<span className="badge--shape-text">
					<h2>Pill</h2>
				</span>
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
