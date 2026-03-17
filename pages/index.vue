<template>
  <div class="page">
    <!-- Navbar -->
    <header class="navbar">
      <div class="navbar-inner">
        <NuxtLink to="/" class="logo" style="color:aliceblue">
          <span class="logo-badge" style="color:aliceblue">ACE</span>
          <span class="logo-text" style="color:rgb(213, 27, 27)">Play</span>
        </NuxtLink>

        <nav class="nav-links" style="color:aliceblue">
          <a href="#casinos">Casinos</a>
          <a href="#games">Games</a>
          <a href="#promotions">Promotions</a>
          <a href="#guide">Guide</a>
          <a href="#about">About us</a>
        </nav>

        <div class="nav-actions" style="color:aliceblue">
          <button class="btn ghost">Log in</button>
          <button class="btn primary" style="color:snow">Sign up</button>
        </div>
      </div>
    </header>

    <!-- Hero -->
    <section class="hero">
      <div class="hero-inner">
        <p class="hero-eyebrow"style="color:darkgray">Trusted reviews   • Real player insights</p>
        <h1 class="hero-title" style="color:white">
          Online Casino Hub
          <span class="hero-highlight" style="color:red">ACEPlay</span>
        </h1>
        <p class="subtitle"style="color:white">
          Find the "right casino" for you. Ranked according to international standards, transparent and verifiable, with free bonuses and exclusive promotions — ACEPlay is leading the way in online gaming!
        </p>

        <div class="hero-actions">
          <div class="country-selector">
            <button class="btn primary large" style="color: #fefefe;" @click="toggleDropdown">
              {{ selectedCountry === 'default' ? 'See Top Casinos' : `See Top Casinos` }}
              <span class="dropdown-arrow">▼</span>
            </button>
            <div v-if="showDropdown" class="dropdown-menu" @click.stop>
              <div 
                v-for="country in countries" 
                :key="country.code"
                class="dropdown-item"
                @click="selectCountry(country.code)"
                :class="{ active: selectedCountry === country.code }"
              >
                <span class="flag">{{ country.flag }}</span>
                <span>{{ country.name }}</span>
              </div>
            </div>
          </div>
          <NuxtLink class="btn secondary large" to="/countries/country" style="color:rgb(199, 200, 201)">All Countries</NuxtLink>
        </div>

        <div class="hero-meta">
          <div class="meta-item" style="color:rgb(193, 187, 187)">
            <span class="meta-label" >Casinos reviewed</span>
            <span class="meta-value">120+</span>
          </div>
          <div class="meta-divider" />
          <div class="meta-item" style="color:darkgray">
            <span class="meta-label">Exclusive bonuses</span>
            <span class="meta-value">฿2,490,000+</span>
          </div>
          <div class="meta-divider" />
          <div class="meta-item" style="color:darkgray">
            <span class="meta-label">Players in Thailand</span>
            <span class="meta-value">85,000+</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Top casinos -->
    <section id="casinos" class="section">
      <div class="section-header">
        <h2 class="section-title" style="color:rgb(255, 248, 248)">Top Casinos in {{ currentCountryData.name }}</h2>
        <p class="section-subtitle" style="color:white">
          {{ currentCountryData.subtitle }}
        </p>
      </div>

      <div class="casino-scroller" aria-label="Top casinos horizontal scroller">
        <div class="casino-track">
          <article v-for="casino in currentCountryData.casinos" :key="casino.name" class="casino-card">
            <div class="casino-logo">
              <template v-if="casino.logoUrl">
                <img :src="casino.logoUrl" :alt="casino.name + ' logo'" class="casino-logo-img" />
              </template>
              <template v-else>
                <span>{{ casino.short }}</span>
              </template>
            </div>

            <div class="casino-content" style="color:darkgray">
              <div class="casino-header">
                <h3 class="casino-name">{{ casino.name }}</h3>
                <div class="casino-rating">
                  <span class="stars"> ★★★★ </span>
                  <span class="rating-score">{{ casino.rating }}</span>
                </div>
              </div>

              <p class="casino-bonus">
                {{ casino.bonus }}
              </p>

              <ul class="casino-tags">
                <li v-for="tag in casino.tags" :key="tag">{{ tag }}</li>
              </ul>

              <div class="casino-actions">
                <button class="btn small primary">Play now</button>
                <button class="btn small ghost">Review</button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Beginner's guide -->
    <section id="guide" class="section section-muted">
      <div class="section-header">
        <h2 class="section-title" style="color:white">Online Betting Beginner's Guide</h2>
        <p class="section-subtitle" style="color:white">
          New to online casinos? Follow these simple steps to play safely and responsibly.
        </p>
      </div>

      <div class="guide-grid" style="color:lightblue">
        <article v-for="step in guideSteps" :key="step.title" class="guide-card">
          <div class="guide-icon">{{ step.icon }}</div>
          <h3 class="guide-title">{{ step.title }}</h3>
          <p class="guide-text">{{ step.text }}</p>
        </article>
      </div>
    </section>

    <!-- Popular games -->
    <section id="games" class="section">
      <div class="section-header">
        <h2 class="section-title"style="color:white">Popular Games in Thailand</h2>
        <p class="section-subtitle"style="color:white">
          Explore the most played slots, live casino tables and sports betting markets.
        </p>
      </div>

      <!-- Filters -->
      <div class="filter-bar">
        <button style="color:azure"
          v-for="category in categories"
          :key="category"
          class="filter-pill"
          :class="{ active: activeCategory === category }"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <!-- Game grid -->
      <div class="game-scroller" aria-label="Popular games horizontal scroller">
        <div class="game-track">
          <article v-for="game in filteredGames" :key="game.title" class="game-card">
            <div class="game-image">
              <span>{{ game.badge }}</span>
              <img
                v-if="game.img"
                :src="game.img"
                :alt="game.title"
                class="game-image-img"
                loading="lazy"
              >
            </div>
            <div class="game-info">
              <h3 class="game-title">{{ game.title }}</h3>
              <p class="game-provider">{{ game.provider }}</p>

              <div class="game-meta-row">
                <span class="game-meta-label">RTP</span>
                <span class="game-meta-value">{{ game.rtp }}%</span>
              </div>
              <div class="game-meta-row">
                <span class="game-meta-label">Volatility</span>
                <span class="game-meta-value">{{ game.volatility }}</span>
              </div>

              <button class="btn small secondary full-width" style="color:crimson">Play now</button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Promotions -->
    <section id="promotions" class="section section-muted">
      <div class="section-header" style="color:white">
        <h2 class="section-title">Exclusive Promotions for {{ currentCountryData.name }}</h2>
        <p class="section-subtitle">
          {{ currentCountryData.promoSubtitle }}
        </p>
      </div>

      <div class="promo-grid">
        <article v-for="promo in currentCountryData.promotions" :key="promo.title" class="promo-card">
          <div class="promo-banner">
            <div class="promo-badge">Exclusive</div>
            <div class="promo-banner-main">
              <span class="promo-banner-eyebrow">{{ promo.casinos }}</span>
              <span class="promo-banner-title">{{ promo.highlight }}</span>
            </div>
          </div>

          <div class="promo-content">
            <h3 class="promo-title">{{ promo.title }}</h3>
            <p class="promo-text">{{ promo.text }}</p>

            <div class="promo-meta">
              <div>
                <span class="promo-meta-label">Bonus</span>
                <span class="promo-meta-value">{{ promo.bonus }}</span>
              </div>
              <div>
                <span class="promo-meta-label">Wagering</span>
                <span class="promo-meta-value">{{ promo.wagering }}</span>
              </div>
              <div>
                <span class="promo-meta-label">Min. deposit</span>
                <span class="promo-meta-value">{{ promo.minDeposit }}</span>
              </div>
            </div>

            <button class="btn primary full-width small">Claim bonus</button>
          </div>
        </article>
      </div>
    </section>

    <!-- Footer -->
    <footer id="about" class="footer" style="color:azure">
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="logo">
            <span class="logo-badge">ACE</span>
            <span class="logo-text">Play</span>
          </div>
          <p class="footer-text">
            ACEPlay is an independent casino comparison site. We promote responsible gambling and only list
            licensed operators.
          </p>
        </div>

        <div class="footer-columns">
          <div class="footer-column">
            <h4>Company</h4>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
            <a href="#">Careers</a>
          </div>
          <div class="footer-column">
            <h4>Legal</h4>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
          <div class="footer-column">
            <h4>Responsible play</h4>
            <a href="#">18+ Only</a>
            <a href="#">Self-exclusion tools</a>
            <a href="#">Help &amp; support</a>
          </div>
        </div>
      </div>

     
       <div style="display: flex; justify-content: center; gap: 15px; margin-bottom: 20px;">
         <span>ACEPlay website is endorsed by:  </span> 
        <img src="https://aceplay.bet/_vercel/image?url=%2Fimg%2Fcertify%2Ftruste.webp&w=1536&q=100" alt="TRUSTe" style="height: 15px; object-fit: contain;">
        <img src="https://aceplay.bet/_vercel/image?url=%2Fimg%2Fcertify%2Fsucun.webp&w=1536&q=100" alt="Sucuri" style="height: 15px; object-fit: contain;">
        <img src="https://aceplay.bet/_vercel/image?url=%2Fimg%2Fcertify%2Fnorton.webp&w=1536&q=100" alt="Norton" style="height: 15px; object-fit: contain;">
        <img src="https://aceplay.bet/_vercel/image?url=%2Fimg%2Fcertify%2Fgpwa.webp&w=1536&q=100" alt="GPWA" style="height: 15px; object-fit: contain;">
        <img src="https://aceplay.bet/_vercel/image?url=%2Fimg%2Fcertify%2Fdmca.webp&w=1536&q=100" alt="DMCA" style="height: 15px; object-fit: contain;">
      </div>
      <div class="footer-bottom" >
        <span>© Copyright 2018 - {{ new Date().getFullYear() }}, ACEPlay All Rights Reserved.</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'

// Reactive state for country selection
const selectedCountry = ref('thailand')
const showDropdown = ref(false)

// Country data
const countries = [
  { code: 'thailand', name: 'Thailand', flag: '🇹🇭' },
  { code: 'philippines', name: 'Philippines', flag: '🇵🇭' },
  { code: 'bangladesh', name: 'Bangladesh', flag: '🇧🇩' }
]

// Country-specific data
const countryData = {
  thailand: {
    name: 'Thailand',
    subtitle: 'Hand-picked, licensed operators with generous welcome bonuses and fast payouts.',
    promoSubtitle: 'Sign up through ACEPlay and unlock special deposit offers you will not find anywhere else.',
    casinos: [
      {
        name: 'BETLUCKMAK',
        short: 'RT',
        logoUrl: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/logo/thailand/betluckmak.jpg',
        rating: '4.9',
        bonus: '100% up to ฿20,000 + 100 Free Spins',
        tags: ['Fast payouts', '24/7 support', 'Mobile friendly'],
      },
      {
        name: 'GXY888',
        short: 'BS',
        logoUrl: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/logo/thailand/gxy888.png',
        rating: '4.8',
        bonus: '150% up to ฿15,000 + Cashback',
        tags: ['Thai language', 'VIP program', 'Live dealers'],
      },
      {
        name: 'Heng9999',
        short: 'LB',
        logoUrl: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/logo/thailand/heng9999.png',
        rating: '4.7',
        bonus: '250% welcome bundle + Free Bets',
        tags: ['Sports & casino', 'High limits', 'Local payments'],
      },
      {
        name: 'LUK666',
        short: 'SJ',
        logoUrl: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/logo/thailand/luk666.jpg',
        rating: '4.7',
        bonus: 'Mega jackpot slots & daily drops',
        tags: ['Jackpot slots', 'Tournaments', 'Crypto friendly'],
      },
      {
        name: '777WW',
        short: 'W1',
        logoUrl: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/logo/thailand/777ww.png',
        rating: '4.6',
        bonus: 'Welcome bonus up to ฿10,000 + Free Spins',
        tags: ['Fast registration', 'Local banks', 'Slots focus'],
      },
      {
        name: '88FED',
        short: 'TW',
        logoUrl: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/logo/thailand/88fed.png',
        rating: '4.6',
        bonus: 'Cashback deals + weekly reload bonuses',
        tags: ['Cashback', 'Promotions', 'Mobile optimized'],
      },
      {
        name: 'Ubet89',
        short: 'KB',
        logoUrl: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/logo/thailand/ubet89.png',
        rating: '4.5',
        bonus: 'Sports + casino combo bonus up to ฿12,000',
        tags: ['Sportsbook', 'Live casino', 'Quick payouts'],
      },
      {
        name: '550WW',
        short: 'L9',
        logoUrl: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/logo/thailand/550ww.png',
        rating: '4.5',
        bonus: 'Daily drops + VIP perks for regular players',
        tags: ['VIP perks', 'Daily rewards', 'Slots & live'],
      },
    ],
    promotions: [
      {
        title: 'First Deposit Get 2,490 FREE Bonus',
        highlight: '100% up to ฿20,000',
        casinos: 'Selected Thailand casinos',
        text: 'Register within 3 minutes and unlock your matched first deposit bonus plus extra free spins.',
        bonus: '฿20,000 + 100 spins',
        wagering: '35x bonus',
        minDeposit: '฿300',
      },
      {
        title: 'Signup to get free credit, no deposit needed',
        highlight: '฿300 free credit',
        casinos: 'No-deposit partners',
        text: 'Try real money games without risking your own cash. Wager requirements apply.',
        bonus: '฿300 free',
        wagering: '50x free credit',
        minDeposit: 'None',
      },
      {
        title: 'Reload bonuses every weekend',
        highlight: '50% up to ฿5,000',
        casinos: 'VIP & regular players',
        text: 'Top up your balance every Friday–Sunday and receive extra funds for your favorite games.',
        bonus: '฿5,000 reload',
        wagering: '25x bonus',
        minDeposit: '฿500',
      },
    ]
  },
  philippines: {
    name: 'Philippines',
    subtitle: 'Top-rated Filipino casinos with GCash support and localized payment methods.',
    promoSubtitle: 'Exclusive bonuses for Filipino players with fast peso withdrawals.',
    casinos: [
      {
        name: 'JILINO.1',
        short: 'MC',
        logoUrl: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/logo/philippines/jilino1.png',
        rating: '4.9',
        bonus: '200% up to ₱50,000 + 200 Free Spins',
        tags: ['GCash support', 'Tagalog language', '24/7 support'],
      },
      {
        name: 'BetSo88',
        short: 'LB',
        logoUrl: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/logo/philippines/betso88.png',
        rating: '4.8',
        bonus: '150% up to ₱30,000 + Cashback',
        tags: ['Mobile app', 'Live dealers', 'Fast payouts'],
      },
      {
        name: '7Spin',
        short: 'PW',
        logoUrl: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/logo/philippines/7spin.png',
        rating: '4.7',
        bonus: '100% up to ₱25,000 + Welcome Package',
        tags: ['Local banks', 'VIP program', 'Sports betting'],
      },
      {
        name: 'Milyon88',
        short: 'MS',
        logoUrl: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/logo/philippines/milyon88.png',
        rating: '4.6',
        bonus: 'Free ₱500 no deposit + 100% match',
        tags: ['No deposit bonus', 'Slot tournaments', 'Mobile friendly'],
      },
      {
        name: 'SSBet77',
        short: 'MS',
        logoUrl: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/logo/philippines/ssbet77.webp',
        rating: '4.6',
        bonus: 'Free ₱500 no deposit + 100% match',
        tags: ['No deposit bonus', 'Slot tournaments', 'Mobile friendly'],
      }
    ],
    promotions: [
      {
        title: 'GCash Special Bonus',
        highlight: '₱10,000 GCash Bonus',
        casinos: 'GCash Partner Casinos',
        text: 'Deposit using GCash and get exclusive bonus with instant processing.',
        bonus: '₱10,000 + 50 spins',
        wagering: '30x bonus',
        minDeposit: '₱500',
      },
      {
        title: 'Filipino Welcome Package',
        highlight: '₱50,000 Total Bonus',
        casinos: 'Top PH Casinos',
        text: 'Multi-deposit bonus package designed for Filipino players.',
        bonus: '₱50,000 + 200 spins',
        wagering: '35x bonus',
        minDeposit: '₱1,000',
      },
    ]
  },
  bangladesh: {
    name: 'Bangladesh',
    subtitle: 'Trusted Bangladeshi casinos with BDT support and local banking options.',
    promoSubtitle: 'Special offers for Bangladeshi players with convenient payment methods.',
    casinos: [
      {
        name: 'BORO JEET',
        short: 'DC',
        logoUrl: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/logo/bangladesh/borojeet.png',
        rating: '4.9',
        bonus: '150% up to ৳30,000 + 150 Free Spins',
        tags: ['BDT support', 'Bengali language', 'Local banks'],
      }
    ],
    promotions: [
      {
        title: 'Welcome to BoroJeet',
        highlight: '৳30,000 Match Bonus',
        casinos: 'Bangladesh Casinos',
        text: 'Exclusive bonus for Bangladeshi players with local currency support.',
        bonus: '৳30,000 + 100 spins',
        wagering: '40x bonus',
        minDeposit: '৳800',
      }
    ]
  }
}

// Computed property for current country data
const currentCountryData = computed(() => {
  return countryData[selectedCountry.value] || countryData.thailand
})

// Dropdown methods
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const selectCountry = (countryCode) => {
  selectedCountry.value = countryCode
  showDropdown.value = false
}

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.country-selector')) {
    showDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const guideSteps = [
  {
    icon: '①',
    title: 'Choose a licensed casino',
    text: 'Compare our trusted partners and pick a site that supports your preferred games and payment methods.'
  },
  {
    icon: '②',
    title: 'Create your account',
    text: 'Complete a quick registration, verify your details and secure your profile with strong authentication.',
  },
  {
    icon: '③',
    title: 'Claim your bonus',
    text: 'Make a qualifying deposit, enter any bonus code if needed and read the wagering requirements carefully.',
  },
  {
    icon: '④',
    title: 'Play responsibly',
    text: 'Set deposit limits, track your sessions and only gamble with money you can afford to lose.',
  },
]

const categories = ['All', 'Slots', 'Live Casino', 'Sports', 'Lottery']

const games = [
  {
    img: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/game/thailand/777ww/sexy-baccarat-classic-%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B8%AE%E0%B8%B4%E0%B8%95-%E0%B9%81%E0%B8%88%E0%B8%81%E0%B9%82%E0%B8%AB%E0%B8%94.jpg',
    title: 'SEXY - Baccarat Classic',
    provider: 'Pragmatic Play',
    category: 'Slots',
    rtp: 96.5,
    volatility: 'High',
    badge: 'Hot slot',
  },
  {
    img: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/game/thailand/550ww/top-game.jpg',
    title: 'JDB - Super Niubi',
    provider: 'Evolution Gaming',
    category: 'Live Casino',
    rtp: 97.2,
    volatility: 'Medium',
    badge: 'Live dealer',
  },
  {
    img: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/game/thailand/betluckmak/%E0%B9%81%E0%B8%95%E0%B8%81%E0%B8%AD%E0%B8%B5%E0%B8%81%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7%20500x300.jpg',
    title: 'JILI - Jackpot Joker',
    provider: 'Big Time Gaming',
    category: 'Slots',
    rtp: 95.9,
    volatility: 'Very high',
    badge: 'Jackpot',
  },
  {
    img: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/game/thailand/luk666/pg-caishen-wins.webp',
    title: 'PG - Caishen Wins',
    provider: 'SA Gaming',
    category: 'Live Casino',
    rtp: 98.3,
    volatility: 'Low',
    badge: 'VIP table',
  },
  {
    img: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/game/thailand/heng9999/top-game.jpg',
    title: 'PG - Fortune Rabbit',
    provider: 'ACEPlay Sports',
    category: 'Sports',
    rtp: 94.1,
    volatility: 'Variable',
    badge: 'Top odds',
  },
  {
    img:'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/game/thailand/88fed/sexy-baccarat.jpg',
    title: 'AWC - Sexy Baccarat',
    provider: 'ACEPlay',
    category: 'Lottery',
    rtp: 92.0,
    volatility: 'High',
    badge: 'Daily draw',
  },
  {
    img:'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/game/thailand/ubet89/awc-sexy-baccarat.jpg',
    title: 'AWC - Sexy Baccarat',
    provider: 'Ubet89',
    category: 'Lottery',
    rtp: 92.0,
    volatility: 'High',
    badge: 'Daily draw',
  },
]

const promotions = [
  {
    title: 'First Deposit Get 2,490 FREE Bonus',
    highlight: '100% up to ฿20,000',
    casinos: 'Selected Thailand casinos',
    text: 'Register within 3 minutes and unlock your matched first deposit bonus plus extra free spins.',
    bonus: '฿20,000 + 100 spins',
    wagering: '35x bonus',
    minDeposit: '฿300',
  },
  {
    title: 'Signup to get free credit, no deposit needed',
    highlight: '฿300 free credit',
    casinos: 'No-deposit partners',
    text: 'Try real money games without risking your own cash. Wager requirements apply.',
    bonus: '฿300 free',
    wagering: '50x free credit',
    minDeposit: 'None',
  },
  {
    title: 'Reload bonuses every weekend',
    highlight: '50% up to ฿5,000',
    casinos: 'VIP & regular players',
    text: 'Top up your balance every Friday–Sunday and receive extra funds for your favorite games.',
    bonus: '฿5,000 reload',
    wagering: '25x bonus',
    minDeposit: '฿500',
  },
]

const activeCategory = ref('All')

const filteredGames = computed(() => {
  if (activeCategory.value === 'All') return games
  return games.filter((game) => game.category === activeCategory.value)
})
</script>

<style scoped>
:root {
  --bg-gradient: radial-gradient(circle at top, #22324a 0, #071227 55%, #03050b 100%);
  --accent: #EC2513;
  --accent-soft: rgba(255, 45, 45, 0.12);
  --accent-secondary:rgb(13, 39, 81);
  --accent-secondary-soft: rgba(59, 130, 246, 0.14);
  --text-main: #e5e7eb;
  --text-muted: #9ca3af;
  --card-bg: #020617;
  --card-elevated: #020617;
  --border-subtle: rgba(150, 170, 198, 0.22);
  --danger: #facc15;
  --radius-lg: 18px;
  --radius-md: 14px;
  --radius-pill: 999px;
  --shadow-soft: 0 24px 60px rgba(15, 23, 42, 0.75);
  --shadow-card: 0 20px 40px rgba(15, 23, 42, 0.7);
  --transition-fast: 0.18s ease-out;
  --transition-med: 0.24s ease-out;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.page {
  min-height: 100vh;
  background: rgb(47, 65, 100);
  color: var(--text-main);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', sans-serif;
}

/* Country Selector Dropdown */
.country-selector {
  position: relative;
  display: inline-block;
  
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 170px;
 background: rgb(149, 43, 43);
  border: 1px solid var(--border-subtle);
  border-radius: 3px;
  box-shadow: var(--shadow-card);
  z-index: 50;
  margin-top: 8px;
  overflow: hidden;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background var(--transition-fast);
  color: white;
  font-weight: 400px;
}

.dropdown-item:hover {
  background: rgba(59, 130, 246, 0.1);
  color: rgb(21, 20, 20);
}

.dropdown-item.active {
  background: rgba(236, 37, 19, 0.1);
  color: white;
}

.flag {
  font-size: 1.2rem;
}

.dropdown-arrow {
  margin-left: 2px;
  font-size: 0.8rem;
  transition: transform var(--transition-fast);
}

.country-selector:hover .dropdown-arrow {
  transform: translateY(2px);
}

/* Layout helpers */

.section {
  max-width: 1120px;
  margin: 0 auto;
  padding: 64px 20px;
}

.section-muted {
  background: radial-gradient(circle at top, rgba(15, 23, 42, 0.5), transparent);
}

.section-header {
  text-align: center;
  margin-bottom: 32px;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  margin-bottom: 8px;
}

.section-subtitle {
  color: var(--text-muted);
  font-size: 0.90rem;
}

/* Navbar */

.navbar {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(20px);
  background: linear-gradient(to bottom, rgba(2, 6, 23, 0.92), rgba(2, 6, 23, 0.8), transparent);
  border-bottom: 1px solid rgba(148, 163, 184, 0.2);
}

.navbar-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  gap: 28px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  color: inherit;
}

.logo-badge {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: conic-gradient(from 180deg, var(--accent), #ff6b6b, var(--accent-secondary), #60a5fa, var(--accent), #ff6b6b);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  color: #020617;
}

.logo-text {
  font-size: 1.05rem;
}

.nav-links {
  display: flex;
  gap: 20px;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.nav-links a {
  text-decoration: none;
  color: inherit;
  position: relative;
  padding-bottom: 2px;
}

.nav-links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  background: linear-gradient(to right, var(--accent), var(--accent-secondary));
  border-radius: 999px;
  transition: width var(--transition-fast);
}

.nav-links a:hover {
  color: #e5e7eb;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-actions {
  margin-left: auto;
  display: flex;
  gap: 10px;
}

/* Buttons */

.btn {
  border-radius: var(--radius-pill);
  border: 1px solid transparent;
  padding: 8px 12px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: all var(--transition-fast);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap:7px;
}

.btn.primary {
  background: linear-gradient(135deg,rgb(175, 34, 34),rgb(208, 64, 64));
  color: #0b1220;
  box-shadow: 0 16px 40px rgba(255, 45, 45, 0.32);
  border-color: rgba(191, 197, 207, 0.45);
  border-radius: 8px;
 
}

.btn.primary:hover {
  transform: translateY(2px);
  box-shadow: 0 20px 48px rgba(204, 42, 42, 0.42);
}

.btn.secondary {
  background: rgba(1, 5, 14, 0.7);
  border-color: rgb(70, 102, 153);
  border-radius: 6px; 
}

.btn.secondary:hover {
  background: rgba(46, 70, 123, 0.92);
  transform: translateY(2px);
  box-shadow: 0 20px 48px rgba(84, 66, 157, 0.42);
}

.btn.ghost {
  background: transparent;
  color: var(--text-main);
  border-color: rgba(148, 163, 184, 0.3);
}

.btn.ghost:hover {
  border-color: rgba(59, 130, 246, 0.8);
  color: rgba(255, 255, 255, 0.94);
}

.btn.large {
  padding: 16px 20px;
  font-size: 0.9rem;
}

.btn.small {
  padding: 10px 11px;
  font-size: 0.8rem;
}

.btn.full-width {
  width: 100%;
}

/* Hero */

.hero {
  padding: 70px 20px 40px;
}

.hero-inner {
  max-width: 840px;
  margin: 0 auto;
  text-align: center;
}

.hero-eyebrow {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: rgba(72, 42, 42, 0.78);
  margin-bottom: 10px;
}

.hero-title {
  font-size: clamp(2.4rem, 4vw, 3.3rem);
  line-height: 1.1;
  margin-bottom: 14px;
}

.hero-highlight {
  display: inline-block;
  background: linear-gradient(135deg, var(--accent-secondary), var(--accent));
  -webkit-background-clip: text;
  color: transparent;
  margin-left: 6px;
}
`
.hero-subtitle {
  max-width: 560px;
  margin: 0 auto 24px;
  font-size: 0.98rem;
  color: var(--text-muted);
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-bottom: 26px;
}

.hero-meta {
  display: inline-flex;
  align-items: center;
  padding: 10px 18px;
  border-radius: 999px;
  background: radial-gradient(circle at top left, rgba(59, 130, 246, 0.14), transparent),
    rgba(9, 18, 40, 0.86);
  border: 1px solid rgba(59, 130, 246, 0.28);
  box-shadow: var(--shadow-soft);
  gap: 18px;
}

.meta-item {
  text-align: left;
}

.meta-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-muted);
}

.meta-value {
  display: block;
  font-size: 0.95rem;
  font-weight: 600;
}

.meta-divider {
  width: 1px;
  height: 30px;
  background: linear-gradient(to bottom, transparent, rgba(128, 137, 148, 0.6), transparent);
}

/* Top casinos */

.casino-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
}

.casino-scroller {
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 10px;
  -webkit-overflow-scrolling: touch;
  scrollbar-gutter: stable both-edges;
}

.casino-track {
  display: flex;
  gap: 18px;
  scroll-snap-type: x mandatory;
}

.casino-card {
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: 14px;
  padding: 16px;
  border-radius: var(--radius-lg);
  background: radial-gradient(circle at top left, rgba(15, 23, 42, 0.85), #020617);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-card);
  transition: transform var(--transition-med), box-shadow var(--transition-med), border-color var(--transition-med);
  flex: 0 0 calc((100% - (18px * 3)) / 4);
  scroll-snap-align: start;
}

.casino-card:hover {
  transform: translateY(-4px);
  border-color: rgba(188, 56, 56, 0.75);
  box-shadow: 0 26px 60px rgba(15, 23, 42, 0.9);
}

.casino-logo {
  width: 72px;
  height: 72px;
  border-radius: 22px;
  background: radial-gradient(circle at 30% 0%, rgba(203, 30, 30, 0.95), #020617 65%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  letter-spacing: 0.12em;
  font-size: 0.8rem;
  overflow: hidden;
}

.casino-logo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.casino-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.casino-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 6px;
}

.casino-name {
  font-size: 1rem;
  font-weight: 600;
}

.casino-rating {
  display: flex;
  align-items: center;
  gap: 6px;
}

.stars {
  font-size: 0.8rem;
  color: #facc15;
}

.rating-score {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.casino-bonus {
  font-size: 0.85rem;
  color: #e5e7eb;
}

.casino-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.casino-tags li {
  padding: 3px 9px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.4);
  font-size: 0.7rem;
  color: var(--text-muted);
}

.casino-actions {
  display: flex;
  gap: 8px;
  margin-top: 4px;
}

/* Guide */

.guide-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.guide-card {
  background: linear-gradient(145deg, rgba(15, 23, 42, 0.96), rgba(17, 24, 39, 0.9));
  border-radius: var(--radius-md);
  padding: 16px 16px 18px;
  border: 1px solid rgba(148, 163, 184, 0.25);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.8);
}

.guide-icon {
  width: 32px;
  height: 32px;
  border-radius: 12px;
  background: var(--accent-soft);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.guide-title {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 6px;
}

.guide-text {
  font-size: 0.85rem;
  color: var(--text-muted);
}

/* Filters & games */

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.filter-pill {
  padding: 7px 15px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.4);
  background: rgba(105, 113, 130, 0.8);
  color: var(--text-muted);
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.filter-pill.active {
  color: #020617;
  border-color: transparent;
  background: linear-gradient(135deg, var(--accent-secondary), var(--accent));
  box-shadow: 0 14px 36px rgba(59, 130, 246, 0.32);
}

.filter-pill:hover:not(.active) {
  border-color: rgba(255, 45, 45, 0.7);
  color: #e5e7eb;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 14px;
}

.game-scroller {
  overflow-x: auto;
  overflow-y: hidden;      
  padding-bottom: 8px;
  -webkit-overflow-scrolling: touch;
  scrollbar-gutter: stable both-edges;
}

.game-track {
  display: flex;
  gap: 16px;
  scroll-snap-type: x mandatory;
}

.game-card {
  border-radius: var(--radius-lg);
  background: radial-gradient(circle at top left, rgba(15, 23, 42, 0.9), #020617);
  border: 1px solid rgba(33, 47, 65, 0.9);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition: transform var(--transition-med), box-shadow var(--transition-med), border-color var(--transition-med);
  flex: 0 0 calc((100% - (16px * 3)) / 4);
  scroll-snap-align: start;
}

.game-card:hover {
  transform: translateY(-4px);
  border-color: rgba(59, 130, 246, 0.85);
  box-shadow: 0 24px 48px rgba(15, 23, 42, 0.95);
}

.game-image {
  height: 120px;
  background: linear-gradient(135deg, #0b2a5b,rgb(15, 41, 113), #8c231a);
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 10px 12px;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.95);
  position: relative;
}

.game-image-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.game-image > span {
  position: relative;
  z-index: 1;
}

.game-info {
  padding: 12px 14px 14px;
}

.game-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: rgb(196, 199, 211)
}

.game-provider {
  font-size: 0.8rem;
  color: rgb(196, 199, 211);
  margin-bottom: 8px;
}

.game-meta-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  margin-bottom: 4px;
  color: rgb(196, 199, 211)
}

.game-meta-label {
  color: rgb(196, 199, 211);
}

.game-meta-value {
  font-weight: 500; 
}

/* Promotions */

.promo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}

.promo-card {
  border-radius: 22px;
  background: radial-gradient(circle at top left, rgba(21, 24, 40, 0.96), #020617);
  border: 1px solid rgba(148, 163, 184, 0.35);
  overflow: hidden;
  box-shadow: var(--shadow-card);
}

.promo-banner {
  position: relative;
  padding: 14px 18px;
  background: linear-gradient(135deg, #1d4ed8, #0b2a5b, #9f1919);
  display: flex;
  align-items: center;
  gap: 14px;
}

.promo-badge {
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(28, 49, 97, 0.9);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #e5e7eb;
}

.promo-banner-main {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.promo-banner-eyebrow {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.82);
}

.promo-banner-title {
  font-size: 1.05rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.95);
}

.promo-content {
  padding: 14px 16px 18px;
}

.promo-title {
  font-size: 0.98rem;
  font-weight: 600;
  margin-bottom: 4px;
 color: rgb(196, 199, 211)
}

.promo-text {
  font-size: 0.85rem;
  color: rgb(196, 199, 211);
  margin-bottom: 10px;
}

.promo-meta {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 0.8rem;
  color: rgb(196, 199, 211)
}

.promo-meta-label {
  display: block;
  color: rgb(196, 199, 211);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.7rem;
}

.promo-meta-value {
  font-weight: 600;
}

/* Footer */

.footer {
  margin-top: 32px;
  border-top: 1px solid rgba(31, 41, 55, 0.9);
  background:rgb(42, 48, 74);
  padding: 32px 20px 18px;
  color: var(--text-muted);
}

.footer-inner {
  max-width: 1000px;
  margin: 0 auto 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 300px;
}

.footer-brand {
  flex: 1 1 220px;
  max-width: 320px;
}

.footer-text {
  font-size: 0.82rem;
  margin-top: 10px;
}

.footer-columns {
  display: flex;
  flex: 2 1 360px;
  gap: 50px;
  flex-wrap: wrap;
}

.footer-column h4 {
  font-size: 0.85rem;
  margin-bottom: 8px;
  color: #e5e7eb;
}

.footer-column a {
  display: block;
  font-size: 0.8rem;
  color: var(--text-muted);
  text-decoration: none;
  margin-bottom: 4px;
}

.footer-column a:hover {
  color:rgb(131, 148, 184);
}

.footer-bottom {
  max-width: 1120px;
  margin: 0 auto;
  padding-top: 10px;
  border-top: 1px solid rgba(47, 61, 80, 0.9);
  font-size: 0.78rem;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
}

/* Responsive */

@media (max-width: 880px) {
  .navbar-inner {
    gap: 14px;
  }

  .nav-links {
    display: none;
  }

  .hero-meta {
    width: 100%;
    justify-content: space-between;
  }

  .casino-card {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 980px) {
  .casino-card {
    flex-basis: calc((100% - 18px) / 2);
  }
}

@media (max-width: 520px) {
  .casino-card {
    flex-basis: 100%;
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 56px;
  }

  .hero-actions {
    flex-direction: column;
  }

  .hero-meta {
    flex-direction: column;
    align-items: stretch;
  }

  .footer-inner {
    flex-direction: column;
  }

  .footer-columns {
    flex-direction: column;
  }
}

@media (max-width: 980px) {
  .game-card {
    flex-basis: calc((100% - 16px) / 2);
  }
}

@media (max-width: 520px) {
  .game-card {
    flex-basis: 100%;
  }
}
</style>

