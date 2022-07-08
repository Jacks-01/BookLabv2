import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Profile from './Profile';
import AuthButton from './auth-button';

const Header = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container style={{ display: 'flex', justifyContent: 'center' }}>
					<h1 style={{ color: 'white' }}>Book Keeper</h1>
				</Container>
				<Container style={{display: 'flex', justifyContent: 'right'}}>
					<AuthButton/>
					<Profile />
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
