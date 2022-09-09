import './App.scss';

import { About, Testemonials, Work, Skills, Header, Footer } from './container';
import { Navbar } from './components';

function App() {
	return (
		<div className='app'>
			<Navbar />
			<Header />
			<About />
			<Work />
			<Skills />
			<Testemonials />
			<Footer />
		</div>
	);
}

export default App;
