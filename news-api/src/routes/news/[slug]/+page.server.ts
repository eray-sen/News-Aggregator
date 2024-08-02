import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { config } from 'dotenv';

config();
const apiKey = process.env.NEWS_API_KEY;

export const load: PageServerLoad = async ({ params, fetch, url }) => {
	const country = url.searchParams.get('country');
	const category = url.searchParams.get('category');
	const res = await fetch(
		`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`
	); //load func is used to fetch data from API according to the slug parameter
	if (!res.ok) {
		throw error(res.status, 'Could not fetch news data');
	}

	const data = await res.json();
	const slug = params.slug;
	let matchedArticle = null;
	const apiKey2 = process.env.SHARE_API_KEY;

	for (const article of data.articles) {
		const articleSlug = article.title.toLowerCase().replace(/\s+/g, '-');
		// console.log(`Comparing slug: ${slug} with articleSlug: ${articleSlug}`);
		if (articleSlug === params.slug) {
			matchedArticle = article;
			break; // break the loop.
		}
	}
	console.log(matchedArticle);

	if (!matchedArticle) {
		throw error(404, 'News article not found');
	}

	return {
		matchedArticle,
		apiKey2
		// returning to the client server
	};
};
