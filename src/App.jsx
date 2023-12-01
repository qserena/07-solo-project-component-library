import { useState } from 'react'
import Menu from './components/Menu/index.js'
import BadgesPage from './pages/BadgesPage.jsx'
import BannersPage from './pages/BannersPage.jsx'
import CardsPage from './pages/CardsPage.jsx'
import TestimonialsPage from './pages/TestimonialsPage.jsx'

function App() {
	const [page, setPage] = useState(0)
	return (
		<main>
			<Menu>
				<Menu.Button>Click here</Menu.Button>
				<Menu.Dropdown>
					<Menu.Item onClick={() => setPage(1)}>Badges</Menu.Item>
					<Menu.Item onClick={() => setPage(2)}>Banners</Menu.Item>
					<Menu.Item onClick={() => setPage(3)}>Cards</Menu.Item>
					<Menu.Item onClick={() => setPage(4)}>
						Testimonials
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
			{page === 0 && (
				<div>
					<h1>React Component Library</h1>
					<p>Click Button and Select Component!</p>
				</div>
			)}

			{page === 1 && <BadgesPage />}

			{page === 2 && <BannersPage />}

			{page === 3 && <CardsPage />}

			{page === 4 && <TestimonialsPage />}
		</main>
	)
}

export default App
