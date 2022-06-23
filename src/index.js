import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Auth0Provider>
		<React.StrictMode
    domain='dev-ceitl5-9.us.auth0.com'
    clientId='OPE5cKhHEiULD1nmaQpfcCPYXoDNtUlq'
    redirectURI={window.location.origin}>
			<App />
		</React.StrictMode>
	</Auth0Provider>
);
