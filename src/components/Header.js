import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Profile from './Profile';
import AuthButton from './auth-button';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
	const isAuthenticated = useAuth0();
	console.log(isAuthenticated);
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
