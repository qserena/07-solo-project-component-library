import Badge from './Badge.jsx'

export default function BadgePage() {
	return (
		<div className="badge-page">
			<div className="shape-container">
				<Badge text="Badge" />
				<Badge text="Badge" />
				<Badge text="Badge" />
				<Badge text="Badge" />
				<Badge text="Badge" />
				<Badge text="Badge" />
				<Badge text="Badge" />
				<Badge text="Badge" />
			</div>
			<div className="shape-container">
				<Badge text="Badge" shape="pill" />
				<Badge text="Badge" shape="pill" />
				<Badge text="Badge" shape="pill" />
				<Badge text="Badge" shape="pill" />
				<Badge text="Badge" shape="pill" />
				<Badge text="Badge" shape="pill" />
				<Badge text="Badge" shape="pill" />
				<Badge text="Badge" shape="pill" />
			</div>
		</div>
	)
}
