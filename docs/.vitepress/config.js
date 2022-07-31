export default {
	base: '/strvejs-doc/',
	title: 'Strve.js',
	titleTemplate: 'A JS library that can convert strings into view',
	description: 'A JS library that can convert strings into view',
	head: [['link', { rel: 'icon', href: '/strvejs-doc/' + 'logo.svg' }]],
	// ignoreDeadLinks: true,
	lang: 'en-US',
	markdown: {
		theme: 'material-palenight',
		lineNumbers: true,
	},
	themeConfig: {
		logo: '/logo.svg',
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/maomincoding/strve' },
		],
		sidebar: {
			'/': [
				{
					text: 'Guide',
					collapsible: true,
					items: [
						{
							text: 'Introduce',
							link: '/guide/introduce/',
						},
						{
							text: 'Install',
							link: '/guide/install/',
						},
						{
							text: 'Started',
							link: '/guide/started/',
						},
					],
				},
				{
					text: 'Essentials',
					collapsible: true,
					items: [
						{
							text: 'API',
							link: '/essentials/api/',
						},
						{
							text: 'Usage',
							link: '/essentials/usage/',
						},
					],
				},
				{
					text: 'Tool',
					collapsible: true,
					items: [
						{
							text: 'CreateStrveApp',
							link: '/tool/createStrveApp/',
						},
						{
							text: 'CreateStrve',
							link: '/tool/createStrve/',
						},
						{
							text: 'StrveRouter',
							link: '/tool/strveRouter/',
						},
					],
				},
				{
					text: 'Other',
					collapsible: true,
					items: [
						{
							text: 'Change Log',
							link: '/other/changeLog/',
						},
						{
							text: 'IDE Support',
							link: '/other/ide/',
						},
						{
							text: 'UI Framework',
							link: '/other/ui/',
						},
						{
							text: 'Browser Compatibility',
							link: '/other/browser/',
						},
						{
							text: 'About',
							link: '/other/about/',
						},
					],
				},
			],
		},
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2021-present maomincoding',
		},
	},
};
