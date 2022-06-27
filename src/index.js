import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Auth0Provider
	domain='https://dev-ceitl5-9.us.auth0.com'
    clientId='OPE5cKhHEiULD1nmaQpfcCPYXoDNtUlq'
    redirectUri={window.location.origin}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Auth0Provider>
);
