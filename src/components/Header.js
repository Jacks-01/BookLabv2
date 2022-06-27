import React from 'react';
import {
	Container,
	Navbar
} from 'react-bootstrap';
import LoginButton from './Login';

const Header = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container style={{display: 'flex', justifyContent: 'center'}}>
					<h1 style={{color: 'white'}}>Book Keeper</h1>
				</Container>
				<LoginButton/>
			</Navbar>
		</>
	);
};

export default Header;
