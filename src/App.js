import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';

const App = () => {
	return (
		<Container className='app-wrapper'>
				<Header />
				<Row className="g-0">
					<Navbar />
					<Profile />
				</Row>
		</Container>
	 
	);
}

export default App;