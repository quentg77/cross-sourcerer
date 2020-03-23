import React from 'react';
import './App.css';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Main from './main';

const client = new ApolloClient({
	uri: "https://api.github.com/graphql",
	headers: {
		authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
	}
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Main />
		</ApolloProvider>
	);
}

export default App;
