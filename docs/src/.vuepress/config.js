const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Connaxio\'s documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#008040' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Supported languages
   */
   locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-CA', // this will be set as the lang attribute on <html>
      title: 'Connaxio',
      description: 'An open source electronics manufacturer'
    },
//    '/fr/': {
//      lang: 'fr-CA',
//      title: 'Connaxio',
//      description: 'Un manufacturier d\'électronique open source'
//    }
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: true,
    docsRepo: 'Connaxio/documentation',
    docsDir: 'docs/src',
    docsBranch: 'master',
    editLinkText: '',
    lastUpdated: true,
    logo: '/images/connaxio_icon_black_512x512.png',
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Language',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Language',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          { text: 'Buy', link: 'https://www.crowdsupply.com/connaxio/espoir' },
          { text: 'Source', link: 'https://github.com/Connaxio' },
          { text: 'Main Website', link: 'https://www.connaxio.com' }
        ],
        sidebar: [
          {
            title: 'Espoir',   // required
            path: '/espoir/hardware',      // optional, link of the title, which should be an absolute path and must exist
            collapsable: true, // optional, defaults to true
            sidebarDepth: 1,    // optional, defaults to 1
            initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
            children: [
              {
                title: 'Hardware',
                path: '/espoir/hardware'
              },
              '/espoir/arduino',
              '/espoir/micropython',
              '/espoir/esphome',
              '/espoir/tasmota'
            ]
          },
          {
            title: 'IO One mikroShield',
            path: '/io_one_mikroshield/'
          },
          {
            title: 'Pmod Compatible mikroShield',
            path: '/pmod_compatible_mikroshield/'
          },
    ]
      },
      '/fr/': {
        selectText: 'Langue',
        label: 'Français',
        editLinkText: 'Modifier la page sur GitHub',
        serviceWorker: {
          updatePopup: {
            message: "Une mise à jour est disponible.",
            buttonText: "Rafraîchir"
          }
        },
        nav: [
          { text: 'Acheter', link: 'https://www.crowdsupply.com/connaxio/espoir' },
          { text: 'Source', link: 'https://github.com/Connaxio' },
          { text: 'Siter principal', link: 'https://www.connaxio.com' }
        ],
        sidebar: [
          {
            title: 'Espoir',   // required
            path: '/espoir/hardware/',      // optional, link of the title, which should be an absolute path and must exist
            collapsable: true, // optional, defaults to true
            sidebarDepth: 1,    // optional, defaults to 1
            initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
            children: [
              {
                title: 'Électronique',
                path: '/espoir/hardware/'
              },
              '/espoir/arduino/',
              '/espoir/micropython/',
              '/espoir/platformio/',
              '/espoir/esphome/',
              '/espoir/tasmota/'
            ]
          },
          {
            title: 'IO One mikroShield',
            path: '/io_one_mikroshield/'
          },
          {
            title: 'Pmod Compatible mikroShield',
            path: '/pmod_compatible_mikroshield/'
          },
    ]
      }
    }
  },
  
  

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/active-header-links',
  ]
}
