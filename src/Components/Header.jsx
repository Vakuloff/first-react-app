import classes from './Header.module.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Header = () => {
	return (
		<Row>
			<Col>
				<header className={classes.header}>
        			<img src="http://www.nickvakulov.com/wp-content/uploads/2019/05/Logo.png" alt="Logo"/>
      			</header>
			</Col>
		</Row>
		
	);
}

export default Header;