import {  useState, useMemo, useEffect,  } from 'react';
import StoryblokClient from 'storyblok-js-client';


export default () => {
	const [stories, setStories] = useState(false);
	const accessToken = process.env.REACT_APP_STORYBLOK_TOKEN;

	const getStories = () => {
		const Storyblok = new StoryblokClient({
			accessToken: accessToken,
			region: 'eu',
		});
  
		// 3. Retrieve stories
		Storyblok.get('cdn/stories', {
		// version: 'published',
		})
			.then((response) => {
				console.log('Stories', response);
				setStories(response?.data?.stories);
			})
			.catch((error) => {
				console.error('Error', error);
			});
	};
  
	useEffect(() => {
		getStories();
	}, []);
  
	return useMemo(
		() => ({
			stories,
		}),
		[
			stories,
		],
	);
};
