import React from 'react';
import {
	Container,
	Navbar
} from 'react-bootstrap';
import LoginButton from './Login';
import LogoutButton from './Logout';
import Profile from './Profile'

const Header = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container style={{display: 'flex', justifyContent: 'center'}}>
					<h1 style={{color: 'white'}}>Book Keeper</h1>
				</Container>
				<LoginButton/>
				<LogoutButton/>
				<Profile/>
			</Navbar>
		</>
	);
};

export default Header;
