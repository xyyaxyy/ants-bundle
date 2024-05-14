// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ants Bundle',
  tagline: 'antsxdp定制构建工具，基于 esbuild 实现',
  favicon: 'img/avatar.png',

  url: 'https://ants-studio-fe.github.io',
  baseUrl: '/ants-bundle/',

  organizationName: 'ants-studio-fe',
  projectName: 'ants-bundle',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'ants avatar',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '完整功能',
          },
          {
            href: 'https://github.com/ants-studio-fe/ants-bundle',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档说明',
            items: [
              {
                label: '完整功能',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'antsxdp官网',
                href: 'http://antsstudio.cn',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ants-studio-fe/ants-bundle',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ants studio, Inc. Built with antsxdp.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
