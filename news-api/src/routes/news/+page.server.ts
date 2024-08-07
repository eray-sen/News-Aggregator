import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { config } from 'dotenv';

config();

const apiKey = process.env.NEWS_API_KEY;

/** url-> gets the url directly and gets the value of the country parameter with get.('country')  */
export const load: PageServerLoad = async ({ fetch, url }) => {
	const country = url.searchParams.get('country') || 'us'; // Get the country code from the URL or use 'us' by default
	const category = url.searchParams.get('category') || 'general';

	const res = await fetch(
		`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`
	);

	if (!res.ok) {
		throw error(res.status, 'Could not fetch news data');
	}

	const data = await res.json();
	//console.log(data)

	return {
		news: data.articles,
		co: country,
		ca: category
	};
};
