import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
	async onSearchSubmit(term) {
		const responce = await axios.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			headers: {
				Authorization: 'Client-ID dcYfQmR4EAFTiqk4knV-8tUlBAjcljwpIS0avKBPrAs',
			},
		});
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;
