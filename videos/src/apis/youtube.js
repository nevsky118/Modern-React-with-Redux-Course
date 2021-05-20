import axios from 'axios';

const KEY = 'AIzaSyDtdd_oNk_zhZemANmJiCFV-2hX6Op8OY8';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	},
});
