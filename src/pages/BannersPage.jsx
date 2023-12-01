import Banner from '../components/Banner/Banner.jsx'

export default function BannersPage() {
	return (
		<div className="banners-page">
			<h1>Banners</h1>

			<div className="banner--container">
				<h2></h2>

				<h2 className="banner--column-header">Multi Line</h2>

				<h2 className="banner--column-header">Single Line</h2>

				<h2>Success</h2>
				<div>
					<Banner title="Congratulations!" severity="success">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aliquid pariatur, ipsum similique veniam.
					</Banner>
				</div>

				<Banner title="Congratulations!" severity="success" />

				<h2>Warning</h2>
				<div>
					<Banner title="Attention" severity="warning">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aliquid pariatur, ipsum similique veniam quo totam eius
						aperiam dolorum.
					</Banner>
				</div>

				<Banner title="Attention" severity="warning" />

				<h2>Error</h2>
				<div>
					<Banner
						title="There is a problem with your application"
						severity="error"
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aliquid pariatur, ipsum similique veniam quo totam eius
						aperiam dolorum.
					</Banner>
				</div>

				<div>
					<Banner
						title="There is a problem with your application"
						severity="error"
					/>
				</div>

				<h2>Neutral</h2>
				<div>
					<Banner title="Update available" severity="neutral">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aliquid pariatur, ipsum similique veniam.
					</Banner>
				</div>

				<div>
					<Banner title="Update available" severity="neutral" />
				</div>
			</div>
		</div>
	)
}
