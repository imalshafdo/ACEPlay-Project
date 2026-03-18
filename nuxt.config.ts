export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  app: {
    head: {
      title: 'ACEPlay - Best Online Casino Reviews & Bonuses',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        //Basic SEO
        { name: 'description', content: 'ACEPlay is your trusted hub for top online casino reviews, bonuses, and guides.' },
        { name: 'keywords', content: 'online casino, casino reviews, betting, bonuses, aceplay' },

        //Open Graph (Facebook, LinkedIn)
        { property: 'og:title', content: 'ACEPlay - Best Online Casino Reviews' },
        { property: 'og:description', content: 'Discover top-rated online casinos and exclusive bonuses at ACEPlay.' },
        { property: 'og:image', content: 'https://aceplay.bet/preview.jpg' },
        { property: 'og:url', content: 'https://aceplay.bet' },
        { property: 'og:type', content: 'website' },

        //Twitter SEO
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'ACEPlay Casino Hub' },
        { name: 'twitter:description', content: 'Best casino reviews and bonuses in one place.' },
        { name: 'twitter:image', content: 'https://aceplay.bet/preview.jpg' }
      ],

      link: [
        // Canonical URL
        { rel: 'canonical', href: 'https://aceplay.bet' },

        // Favicon
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Sitemap config
  sitemap: {
    hostname: 'https://aceplay.bet',
    gzip: true
  },

  // Robots.txt config
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://aceplay.bet/sitemap.xml'
  }
})
