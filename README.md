
## Overview
This project is a news website that fetches data from “https://news.api.org" and displays news articles based on user input. The website has two main sections accessible from the navbar: "News" and "Sources". Users can select a country and category to view related news and can view detailed information about individual news articles.

## Project Structure
The project is structured as follows:


	/project-root
 
               ├── /src
     		 ├── /routes
         		  	├── +page.svelte
         	     	  	└── +page.server.ts
		   
	         		├── /news
					├── +page.svelte
					├── +page.server.ts
					└── /[slug]
						├── +page.svelte
						└── +page.server.ts
	         	 	 ├── /news-sources
	         	     		├── +page.svelte
	         	     		└── +page.server.ts

## Technologies Used
* Svelte: A modern JavaScript framework for building user interfaces.
* SvelteKit: A framework for building Svelte applications with a focus on performance and developer experience.
* Fetch API: Used to make HTTP requests to “https://news.api.org" to fetch news data.
* SvelteKit's Page Server Load: Used to handle server-side data fetching.

## Navbar
The main layout file (+layout.svelte) includes a navbar with links to "News" and "Sources".


## Sources Page
The sources page (/sources +page.svelte) displays a list of news sources fetched from the API. The corresponding server-side data fetching logic is in  /sources +page.server.ts.


## News Page
The news page (/news +page.svelte) contains a form where users can select a country and category to fetch news articles. The selected options are used to fetch data from the API, which is displayed on the page. The server-side data fetching logic is in /news +page.server.ts.

## News Details Page
The news details page (/news/[slug] +page.svelte) displays detailed information about a selected news article. The article is identified by a slug generated from the article's title. The server-side data fetching logic is in /news/[slug] +page.server.ts.

## Detailed Code Breakdown

## +layout.svelte
### Purpose
* Defines the main layout of the application including the navbar and footer.

### Structure
* A navbar with links to "News" and “Sources".
* A main slot where the content of the current page will be rendered.
* A footer with a simple copyright notice.

## /sources +page.svelte
### Purpose:
* Displays a list of news sources.

### Structure:
* Fetches and displays sources using a grid layout.
* Each source includes a name, description, category, and country.

## /sources +page.server.ts
### Purpose: 
* Fetches the list of news sources from the API.

### Structure:
* Uses SvelteKit's load function to fetch data from “https://newsapi.org/docs/endpoints/sources"
* Handles errors and returns the sources to be used in the /sources +page.svelte.

## /news +page.svelte
### Purpose: 
* Allows users to select a country and category to fetch news articles.

### Structure:
* A form with dropdowns for country and category selection.
* Fetches and displays news articles based on user input.
* Each article is a clickable link that navigates to the news details page.

## /news +page.server.ts
### Purpose: 
* Fetches news articles based on the selected country and category.

### Structure:
* Uses SvelteKit's load function to fetch data from [news.api.org](https://newsapi.org/docs/endpoints/top-headlines)
* Handles errors and returns the articles, selected country, and category to be used in /news +page.svelte.

## /news/[slug] +page.svelte
### Purpose: 
* Displays detailed information about a selected news article.
* Stelve buttons components to share the article on specific social media platforms.

### Structure:
* Fetches the article based on the slug parameter from the URL.
* Displays the article's title, description, and a button linking to the original source.
* Shares the article on social media.


## /news/[slug] +page.server.ts
### Purpose: 
* Fetches the detailed information of a specific news article based on the slug.

### Structure:
* Uses SvelteKit's load function to fetch data from [News API](https://newsapi.org/docs/endpoints/top-headlines).
* Finds the article that matches the slug and returns it to be used in /news/[slug] +page.svelte.
* Shortens the link that is in RRS format by using [TinyURL OpenAPI](https://tinyurl.com/app/dev).

## Summary
### Layout: 
* The main layout includes a navbar with links to "News" and "Sources".
### News Page:
* A form allows users to input country and category to fetch and display news articles.
### News Details Page:
* Displays detailed information about a selected news article, with a button to visit the original news source.
Sources Page: Displays a list of news sources with details such as name, description, category, and country.

## Notes
* Replace 'your_api_key' with your actual API key from [News API](https://newsapi.org) and [TinyURL OpenAPI](https://tinyurl.com/app/dev)
* Ensure the slug generation in the slugify function handles all necessary characters to match the URL slugs correctly.



											
