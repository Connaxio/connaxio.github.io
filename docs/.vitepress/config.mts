import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-CA',
  title: "Connaxio",
  description: "Connaxio's website and documentation",
  lastUpdated: true,
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    logo: '/connaxio_logo_black.svg',
    siteTitle: false,
    
    head: [['link', { rel: 'icon', href: '/connaxio_icon_black_in_white_squircle_512x512.ico' }]],
    
    search: {
      provider: 'local'
    },
    
    editLink: {
      pattern: 'https://github.com/Connaxio/documentation/edit/master/docs/:path'
    },
    
    nav: [
      { text: 'Buy', link: 'https://www.crowdsupply.com/connaxio/espoir' },
    ],

    sidebar: [
          {
            text: 'Printed Circuit Boards',
              items: [
                { text: 'Espoir: PoE devboard', link: '/espoir/hardware.md',
                  items: [
                    { text: 'Hardware', link: '/espoir/hardware.md' },
                    { text: 'Firmware', link: '/espoir/firmware.md' },
                    { text: 'Guide: Tasmota & Home Assistant', link: '/guides/tasmota_hass/' },
                    { text: 'Guide: Irrigation with Espoir', link: '/guides/iot_irrigation_with_espoir/' },
                  ] 
                },
                { text: 'IO One mikroShield', link: '/io_one_mikroshield/' },
                { text: 'Pmod<sup>TM</sup> Compatible mikroShield', link: '/pmod_compatible_mikroshield/' },
              ],
           }
        ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Connaxio' }
    ]
  }
})
