import React from 'react';
import {
	Container,
	Navbar
} from 'react-bootstrap';

const Header = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container style={{display: 'flex', justifyContent: 'center'}}>
					<h1 style={{color: 'white'}}>Book Keeper</h1>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
