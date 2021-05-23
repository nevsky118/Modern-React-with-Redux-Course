import jsonplaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async () => {
	const responce = await jsonplaceholder.get('/posts');

	return {
		type: 'FETCH_POSTS',
		payload: responce,
	};
};
