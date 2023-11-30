import { useState } from 'react'
import Menu from './components/Menu/index.js'
import BadgePage from './components/Badges/BadgePage.jsx'

function App() {
	const [page, setPage] = useState(0)
	return (
		<main>
			<Menu>
				<Menu.Button>Click here</Menu.Button>
				<Menu.Dropdown>
					<Menu.Item onClick={() => setPage(1)}>Badges</Menu.Item>
					<Menu.Item onClick={() => setPage(2)}>Banners</Menu.Item>
					<Menu.Item>Cards</Menu.Item>
					<Menu.Item>Testimonials</Menu.Item>
				</Menu.Dropdown>
			</Menu>
			{page === 0 && (
				<div>
					<h1>React Component Library</h1>
					<p>Select component from the menu at the left</p>
				</div>
			)}

			{page === 1 && (
				<div>
					<h1>Badges</h1>
					<BadgePage />
				</div>
			)}

			{page === 2 && (
				<div>
					<h1>Banners</h1>
				</div>
			)}
		</main>
	)
}

export default App
