import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { config } from 'dotenv';

config();
const newsApiKey = process.env.NEWS_API_KEY;
const tinyUrlApiKey = process.env.TINYURL_API_KEY;
const shareAPiKey = process.env.SHARE_API_KEY;

async function shortenUrl(longUrl: string): Promise<string> {
	try {
		const response = await fetch('https://api.tinyurl.com/create', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${tinyUrlApiKey}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				url: longUrl
			})
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return data.data.tiny_url;
	} catch (error) {
		console.error('URL kısaltma hatası:', error);
		throw error;
	}
}

export const load: PageServerLoad = async ({ params, fetch, url }) => {
	const country = url.searchParams.get('country');
	const category = url.searchParams.get('category');
	const res = await fetch(
		`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${newsApiKey}`
	);

	if (!res.ok) {
		throw error(res.status, 'Could not fetch news data');
	}

	const data = await res.json();
	const slug = params.slug;
	let matchedArticle = null;

	for (const article of data.articles) {
		const articleSlug = article.title.toLowerCase().replace(/\s+/g, '-');
		if (articleSlug === params.slug) {
			matchedArticle = article;
			break; // break the loop.
		}
	}

	if (!matchedArticle) {
		throw error(404, 'News article not found');
	}

	const originalUrl = matchedArticle.url;
	let shortUrl;
	try {
		shortUrl = await shortenUrl(originalUrl);
	} catch (error) {
		shortUrl = 'URL could not be shortened.';
	}

	return {
		matchedArticle,
		shortUrl,
		shareAPiKey // to use on the client side.
	};
};
