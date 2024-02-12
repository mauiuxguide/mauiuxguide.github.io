import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

export const locales = {
	root: { label: 'English', lang: 'en' },
	es: { label: 'Español', lang: 'es' },
};

const site = 'https://mauiuxguide.github.io/';

export default defineConfig({
	site,
	base: '',
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'MauiUXGuide',
			logo: {
				light: '/src/assets/logo-light.svg',
				dark: '/src/assets/logo-dark.svg',
				replacesTitle: true,
			},
			editLink: {
				baseUrl: 'https://github.com/withastro/starlight/edit/main/docs/',
			},
			social: {
				github: 'https://github.com/withastro/starlight',
				discord: 'https://astro.build/chat',
			},
			head: [
				{
					tag: 'script',
					attrs: {
						src: 'https://cdn.usefathom.com/script.js',
						'data-site': 'EZBHTSIG',
						defer: true,
					},
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: site + 'og.jpg?v=1' },
				},
				{
					tag: 'meta',
					attrs: { property: 'twitter:image', content: site + 'og.jpg?v=1' },
				},
			],
			customCss: process.env.NO_GRADIENTS ? [] : ['./src/assets/landing.css'],
			locales,
			sidebar: [
				{
					label: 'Start Here',
					translations: {
						es: 'Comienza aqui',
					},
					items: [
						{
							label: 'Getting Started',
							link: 'getting-started',
							translations: {
								es: 'Empezando',
							},
						},
						{
							label: 'Manual Setup',
							link: 'manual-setup',
							translations: {
								es: 'Configuración Manual',
							},
						},
						{
							label: 'Environmental Impact',
							link: 'environmental-impact',
							translations: {
								es: 'Documentación ecológica',
							},
						},
					],
				},
				{
					label: 'Guides',
					translations: {
						es: 'Guías',
					},
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					translations: {
						es: 'Referencias',
					},
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Resources',
					badge: 'New',
					translations: {
						es: 'Recursos',
					},
					autogenerate: { directory: 'resources' },
				},
			],
			plugins: process.env.CHECK_LINKS
				? [
						starlightLinksValidator({
							errorOnFallbackPages: false,
							errorOnInconsistentLocale: true,
						}),
				  ]
				: [],
		}),
	],
});
