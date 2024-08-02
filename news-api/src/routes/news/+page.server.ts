import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { config } from 'dotenv';

config();
const apiKey = process.env.NEWS_API_KEY;

/** url-> url'i direkt alır ve get.('country') ile country parametresinin değerini alır  */
export const load: PageServerLoad = async ({ fetch, url }) => {
	const country = url.searchParams.get('country') || 'us'; // URL'den ülke kodunu al veya varsayılan olarak 'us' kullan
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
		co: country, // Kullanıcıya seçili ülke kodunu geri döndür
		ca: category
	};
};
