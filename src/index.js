import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Auth0Provider
	domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT}
    redirectUri={window.location.origin}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Auth0Provider>
);
