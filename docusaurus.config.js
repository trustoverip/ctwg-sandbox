module.exports = {
  title: 'Decentralized SSI Governance Docs',
  tagline: 'Terminology',
  url: 'https://MarIliadi.github.io',
  baseUrl: '/ctwg-sandbox/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'MarIliadi', // Usually your GitHub org/user name.
  projectName: 'ctwg-sandbox', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/decentralized-ssi-governance',
          activeBasePath: 'docs',
          label: 'Decentralized SSI Governance',
          position: 'left',
        },
        {
          to: 'docs/glossary',
          activeBasePath: 'docs',
          label: 'Glossary of Terms',
          position: 'left',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'https://v2.docusaurus.io/docs/markdown-features',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          //sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus-terminology/parser',
      {
        termsDir: './docs/terms',
        glossaryFilepath: './docs/glossary_file.md'
      }
    ]
  ]
};
