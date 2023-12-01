import Banner from '../components/Banner/Banner.jsx'

export default function BannersPage() {
	return (
		<div className="banners-page">
			<h1>Banners</h1>

			<div className="banner--container">
				<span className="badge--shape-text">
					<h2></h2>
				</span>

				<h2>Multi Line</h2>

				<h2>Single Line</h2>

				<span className="badge--shape-text">
					<h2>Success</h2>
				</span>
				<div>
					<Banner title="Congratulations!" variant="success">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aliquid pariatur, ipsum similique veniam.
					</Banner>
				</div>

				<div>
					<Banner title="Congratulations!" variant="success" />
				</div>

				<h2>Warning</h2>
				<div>
					<Banner title="Attention" variant="warning">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aliquid pariatur, ipsum similique veniam quo totam eius
						aperiam dolorum.
					</Banner>
				</div>
				<div>
					<Banner title="Attention" variant="warning" />
				</div>

				<h2>Error</h2>
				<div>
					<Banner
						title="There is a problem with your application"
						variant="error"
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aliquid pariatur, ipsum similique veniam quo totam eius
						aperiam dolorum.
					</Banner>
				</div>

				<div>
					<Banner
						title="There is a problem with your application"
						variant="error"
					/>
				</div>

				<h2>Neutral</h2>
				<div>
					<Banner title="Update available" variant="neutral">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aliquid pariatur, ipsum similique veniam.
					</Banner>
				</div>

				<div>
					<Banner title="Update available" variant="neutral" />
				</div>
			</div>
		</div>
	)
}
