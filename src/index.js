import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import {WebSocketLink} from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';
import * as environment from "./environment.js";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import * as serviceWorker from './serviceWorker';np

const wsLink = new WebSocketLink({
    uri: environment.WSHost,
    options: {
        reconnect: true,
        connectionParams: {
            Authorization: `Bearer ${localStorage.getItem('auth_token')}`
        },
    }
});
const apolloClient = new ApolloClient({
    link: wsLink,
    cache: new InMemoryCache(),
});

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(<NextApp/>);
    })
}
function render(component) {
    ReactDOM.render(<ApolloProvider client={apolloClient}>
        {component}
    </ApolloProvider>, document.getElementById('root'));
}

render(<App />);