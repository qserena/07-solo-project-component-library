import Menu from './components/Menu/index.js'

function App() {
	return (
		<>
			<Menu onOpen={() => console.log('Opened/closed')}>
				<Menu.Button>Click here</Menu.Button>
				<Menu.Dropdown>
					<Menu.Item>Badges</Menu.Item>
					<Menu.Item>Banners</Menu.Item>
					<Menu.Item>Cards</Menu.Item>
					<Menu.Item>Testimonials</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		</>
	)
}

export default App
