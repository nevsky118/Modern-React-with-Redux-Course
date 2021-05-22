import axios from 'axios';

const KEY = 'AIzaSyB_npC0i1f84lk3tFzCZZkCpMf_UL3Grq8';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY,
	},
});
