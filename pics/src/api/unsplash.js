import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID dcYfQmR4EAFTiqk4knV-8tUlBAjcljwpIS0avKBPrAs',
	},
});
