import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { config } from 'dotenv';

config();
const apiKey = process.env.NEWS_API_KEY;

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch(`https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`);
	if (!res.ok) {
		throw error(res.status, 'Could not fetch sources data');
	}

	const data = await res.json();

	if (!data) {
		throw error(404, 'News source not found');
	}

	return {
		sources: data.sources
	};
};
