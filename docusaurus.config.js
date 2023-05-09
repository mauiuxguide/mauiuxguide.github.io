const codeTheme = require('./src/utils/prism');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: 'Mauiniverse',
    tagline: 'Official technical documentation to develop skills in creating beautiful applications in .NET MAUI.',
    url: 'https://mauiniverse.github.io/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'mauiniverse', // Usually your GitHub org/user name.
    projectName: 'mauiniverse.github.io', // Usually your repo name.
    plugins: [
      'docusaurus-plugin-sass',
      [
        'docusaurus-plugin-plausible',
        {
          domain: 'mauiniverse.github.io',
        },
      ],
    ],
    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarCollapsed: true,
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            editUrl: 'https://github.com/mauiniverse/mauiniverse.github.io/blob/main/docs/',
            breadcrumbs: true,
            routeBasePath: '/',
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
          },
          theme: {
            customCss: require.resolve('./src/css/custom.scss'),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        metadata: [
          { name: 'robots', content: 'max-image-preview:large' },
          {
            name: 'keywords',
            content:
              'mauiniverse,mauiniverse documentation,mauiniverse docs,dotnetmaui,ui,ux,open source,oss',
          },
        ],
        image: '/img/social-preview.jpg',
        algolia: {
          appId: 'OAZ5MHRC9Y',
          apiKey: 'f315ecdb3d62184de0fb91c728e71215',
          indexName: 'mauiniverse',
          contextualSearch: true,
          externalUrlRegex: 'https://mauiniverse.github.io/.*',
        },
        docs: {
          sidebar: {
            autoCollapseCategories: true,
          },
        },
        colorMode: {
          respectPrefersColorScheme: true,
        },
        navbar: {
          logo: {
            alt: 'Mauiniverse Logo',
            src: 'img/logo-light-bg.svg',
            srcDark: 'img/logo-dark-bg.svg',
            href: '/',
            target: '_self',
            width: 160,
            height: 32,
          },
          items: [
            {
              type: 'search',
              position: 'left',
            },
            {
              href: 'https://mauiniverse.github.io',
              label: 'API Reference',
              position: 'right',
            },
            {
              href: 'https://github.com/mauiniverse/mauiniverse.github.io',
              label: 'GitHub',
              position: 'right',
            },
            {
              href: 'https://discord.mauiniverse',
              label: 'Community',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          logo: {
            alt: 'Mauiniverse',
            src: 'img/logo-light-bg.svg',
            srcDark: 'img/logo-dark-bg.svg',
            href: '/',
            width: 160,
            height: 32,
          },
          links: [
            {
              items: [
                {
                  label: 'Home',
                  href: 'https://mauiniverse.github.io/',
                },
                {
                  label: 'Documentation',
                  to: '/',
                },
                {
                  label: 'Providers',
                  href: 'https://github.com/mauiniverse/mauiniverse.github.io/tree/main/providers',
                },
                {
                  label: 'Contact Us',
                  href: 'https://discord.mauiniverse',
                },
              ],
            },
            {
              items: [
                {
                  label: 'Discord',
                  href: 'https://mauiniverse.github.io/',
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/mauiniverse',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/mauiniverse/mauiniverse.github.io',
                },
              ],
            },
          ],
          copyright: `© ${new Date().getFullYear()} Mauiniverse`,
        },
        tableOfContents: {
          minHeadingLevel: 2,
          maxHeadingLevel: 2,
        },
        prism: {
          theme: codeTheme,
          additionalLanguages: ['php', 'ruby', 'java'],
        },
      }),
  }
);
