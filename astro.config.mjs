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
					label: 'Introduction',
					translations: {
						es: 'Introducción',
					},
					items: [
						{
							label: 'What is MauiUX?',
							link: 'what-is-mauiux',
							translations: {
								es: '¿Qué es MauiUX?',
							},
						},
						{
							label: 'Objectives and benefits',
							link: 'objectives-and-benefits',
							translations: {
								es: 'Objetivos y beneficios',
							},
						},
						{
							label: 'Target audience',
							link: 'target-audience',
							translations: {
								es: 'Audiencia objetivo',
							},
						},
					],
				},
				{
					label: 'UI/UX Basics',
					translations: {
						es: 'Conceptos Básicos de UI/UX',
					},
					autogenerate: { directory: 'ui-ux-basics' },
				},
				{
					label: 'Stunning UIs with Controls',
					translations: {
						es: 'Impresionantes Interfaces de Usuario con Controles',
					},
					autogenerate: { directory: 'stunning-uis-with-controls' },
				},
				{
					label: 'Animations in .NET MAUI',
					translations: {
						es: 'Animaciones en .NET MAUI',
					},
					autogenerate: { directory: 'animations-in-net-maui' },
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
