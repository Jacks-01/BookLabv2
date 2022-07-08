/**
 * @file Welcome.js
 * @description a welcome page to be displayed if the user is not authenticated
 */

import React, { Component } from 'react';
class Welcome extends Component {
	render() {
		return (
			<>
				<h1>Welcome!</h1>
				<h3>Please sign in to create and edit books in your library!</h3>
			</>
		);
	}
}

export default Welcome;
