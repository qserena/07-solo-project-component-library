import Menu from './components/Menu/index.js'

function App() {
	return (
		<main>
			<Menu onOpen={() => console.log('Opened/closed')}>
				<Menu.Button>Click here</Menu.Button>
				<Menu.Dropdown>
					<Menu.Item>Badges</Menu.Item>
					<Menu.Item>Banners</Menu.Item>
					<Menu.Item>Cards</Menu.Item>
					<Menu.Item>Testimonials</Menu.Item>
				</Menu.Dropdown>
			</Menu>

			<h1>React Component Library</h1>
			<p>Select component from the menu at the left</p>
		</main>
	)
}

export default App
