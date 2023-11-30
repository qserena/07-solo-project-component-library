import Banner from '../components/Banners/Banner.jsx'

export default function BannersPage() {
	return (
		<div className="banners-page">
			<h1>Banners</h1>

			<div className="banner--container">
				<span className="badge--shape-text">
					<h2>Square</h2>
				</span>
				<div className="badge--container">
					<p className="badge--color-text">Gray</p>
					<Banner title="Congratulations!" variant="success">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aliquid pariatur, ipsum similique veniam.
					</Banner>
				</div>
				<div className="badge--container">
					<p className="badge--color-text">Red</p>
					<Banner title="Congratulations!" variant="success" />
				</div>
				{/* <div className="badge--container">
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
				</div> */}
			</div>

			{/* <div className="badge--shape-container">
				<span className="badge--shape-text">
					<h2>Pill</h2>
				</span>
				<div className="badge--container">
					<Badge text="Badge" color="gray" shape="pill" />
				</div>
				<div className="badge--container">
					<Badge text="Badge" color="red" shape="pill" />
				</div>
				<div className="badge--container">
					<Badge text="Badge" color="yellow" shape="pill" />
				</div>
				<div className="badge--container">
					<Badge text="Badge" color="green" shape="pill" />
				</div>
				<div className="badge--container">
					<Badge text="Badge" color="blue" shape="pill" />
				</div>
				<div className="badge--container">
					<Badge text="Badge" color="indigo" shape="pill" />
				</div>
				<div className="badge--container">
					<Badge text="Badge" color="purple" shape="pill" />
				</div>
				<div className="badge--container">
					<Badge text="Badge" color="pink" shape="pill" />
				</div>
			</div> */}
		</div>
	)
}
