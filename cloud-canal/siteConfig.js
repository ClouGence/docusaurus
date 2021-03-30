/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = require('./data/users');

const siteConfig = {
  title: '',
  tagline: '全域数据融合工具',
  url: 'https://www.clougence.com/',
  baseUrl: process.env.BASE_URL || '/',
  organizationName: 'clougence',
  projectName: 'CloudCanal',
  // cname: 'docusaurus.io',
  customDocsPath: '../cloudcanal_doc/docs',
  noIndex: false,
  users,
  headerLinks: [
    {doc: 'product_intro', label: ''},
    // {search: true},
  ],
  headerIcon: 'img/logo.svg',
  favicon: 'img/clougence.svg',
  // algolia: {
  //   apiKey: '3eb9507824b8be89e7a199ecaa1a9d2c',
  //   indexName: '',
  //   algoliaOptions: {
  //     facetFilters: ['language:LANGUAGE', 'version:VERSION'],
  //   },
  // },
  colors: {
    primaryColor: '#0087c7',
    secondaryColor: '#0087c7',
  },
  translationRecruitingLink: 'https://crowdin.com/project/docusaurus',
  copyright: `Copyright © ${new Date().getFullYear()} ClouGence Inc.`,
  usePrism: ['jsx'],
  // highlight: {
  //   theme: 'atom-one-dark',
  // },
  scripts: [
    '/js/buttons.js',
    '/js/clipboard.min.js',
    '/js/code-blocks-buttons.js',
  ],
  gaTrackingId: 'UA-44373548-31',
  onPageNav: 'separate',
  cleanUrl: true,
  scrollToTop: false,
  scrollToTopOptions: {
    zIndex: 100,
  },
  enableUpdateTime: true,
  enableUpdateBy: true,
  docsSideNavCollapsible: false,
};

module.exports = siteConfig;
