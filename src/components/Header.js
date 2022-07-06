import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import LoginButton from './Login';
import LogoutButton from './Logout';
import Profile from './Profile';

const Header = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container style={{ display: 'flex', justifyContent: 'center' }}>
					<h1 style={{ color: 'white' }}>Book Keeper</h1>
				</Container>
				<Container style={{display: 'flex', justifyContent: 'right'}}>
					<LoginButton />
					<LogoutButton />
					<Profile />
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
