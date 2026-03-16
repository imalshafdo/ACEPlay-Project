<template>
  <div class="page">
    <!-- Navbar -->
    <header class="navbar">
      <div class="navbar-inner">
        <NuxtLink to="/" class="brand">
          <span class="brand-mark" aria-hidden="true" style="color:aliceblue">◈</span>
          <span class="brand-text" style="color:aliceblue">ACE<span class="brand-accent" style="color:aliceblue">Play</span></span>
        </NuxtLink>

        <nav class="nav-links">
          <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          <a class="nav-link" href="#">Games</a>
          <a class="nav-link" href="#">Casinos</a>
          <a class="nav-link" href="#">Promotions</a>
          <a class="nav-link" href="/review">Reviews</a>
          
        </nav>

        <div class="nav-actions">
          <NuxtLink to="/countries" class="btn primary" style="color:aliceblue">Join now</NuxtLink>
        </div>
      </div>
    </header>

    <!-- Hero -->
    <section class="hero" style="color:aliceblue">
      <div class="hero-inner">
        <h1 class="hero-title">Find a Casino near you</h1>
        <p class="subtitle">
          Include recommended casinos in your country! Hot promotions, secure system, easy and fast deposits
          and withdrawals. Only select reliable online casinos. For the peace of mind of the players.
        </p>
      </div>
    </section>

    <!-- Region browser -->
    <section class="section">
      <div class="section-top">
        <div class="section-copy">
          <h2 class="section-title" style="color:aliceblue">Browse by Region</h2>
          <p class="section-subtitle">Showing {{ visibleCountries.length }} countries</p>
        </div>

        <div class="controls">
          <label class="control">
            <span class="control-label">Region</span>
            <select v-model="activeRegion" class="control-select">
              <option v-for="r in regions" :key="r" :value="r">{{ r }}</option>
            </select>
          </label>

          <label class="control">
            <span class="control-label">Sort</span>
            <select v-model="activeSort" class="control-select">
              <option v-for="s in sorts" :key="s.id" :value="s.id">{{ s.label }}</option>
            </select>
          </label>
        </div>
      </div>

      <div class="country-grid">
        <article v-for="c in visibleCountries" :key="c.slug" class="country-card">
          <div class="country-top">
            <div class="flag">
              <img :src="c.flagUrl" alt="" class="flag-img" />
            </div>
            <div class="country-spacer"></div>
              <button class="icon-btn" style="color: black;" aria-label="Open details">
                    <span aria-hidden="true">↗</span>
               </button>
          </div>

          <div class="country-body">
            <h3 class="country-name">{{ c.name }}</h3>
            <div class="country-meta">
              <span class="dot" />
              <span style="color: black;">{{ c.casinos }} Casinos Available</span>
            </div>
          </div>

          <div class="country-actions">
            <NuxtLink class="btn card" :to="`/countries/${c.slug}`" style="color:black;">
               View Casinos
              <span aria-hidden="true">›</span>
            </NuxtLink>
          </div>
        </article>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="footer-logo">
            <span class="brand-mark" aria-hidden="true">◈</span>
            <span class="brand-text">ACE<span class="brand-accent">Play</span></span>
          </div>
          <p class="footer-text">
            ACEPlay is your premier source for unbiased casino reviews, exclusive bonuses, and expert gambling
            strategies. We help you play smarter and stay safe.
          </p>
        </div>

        <div class="footer-columns">
          <div class="footer-column">
            <h4>Our Reviews</h4>
            <a href="#">New Casinos</a>
            <a href="#">Live Dealer Sites</a>
            <a href="#">Mobile Apps</a>
            <a href="#">Payment Methods</a>
          </div>
          <div class="footer-column">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
            <a href="#">T&amp;Cs</a>
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

      <div class="footer-bottom">
        <span>© Copyright 2018 - {{ new Date().getFullYear() }}, ACEPlay All Rights Reserved.</span>
       
       
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const countries = [
  { slug: 'thailand', name: 'Thailand', flagUrl: 'https://aceplay.bet/_vercel/image?url=%2Fimg%2Fcountry%2Fth.webp&w=1536&q=100', casinos: 8, region: 'Asia', popularity: 95 },
  { slug: 'philippinespg', name: 'Philippines', flagUrl: 'https://aceplay.bet/_vercel/image?url=%2Fimg%2Fcountry%2Fph.webp&w=1536&q=100', casinos: 6, region: 'Asia', popularity: 89 },
  { slug: 'bangladesh', name: 'Bangladesh', flagUrl: 'https://aceplay.bet/_vercel/image?url=%2Fimg%2Fcountry%2Fbd.webp&w=1536&q=100', casinos: 1, region: 'Asia', popularity: 72 },
]

const regions = ['All', 'Asia']
const activeRegion = ref('All')

const sorts = [
  { id: 'popular', label: 'Most Popular' },
  { id: 'casinos', label: 'Most Casinos' },
  { id: 'az', label: 'A → Z' },
]
const activeSort = ref('popular')

const visibleCountries = computed(() => {
  const filtered =
    activeRegion.value === 'All'
      ? countries
      : countries.filter((c) => c.region === activeRegion.value)

  const sorted = [...filtered]
  if (activeSort.value === 'popular') sorted.sort((a, b) => b.popularity - a.popularity)
  if (activeSort.value === 'casinos') sorted.sort((a, b) => b.casinos - a.casinos)
  if (activeSort.value === 'az') sorted.sort((a, b) => a.name.localeCompare(b.name))
  return sorted
})
</script>

<style scoped>
:root {
  /* match index.vue blue + red theme */
  --bg: radial-gradient(circle at top, #22324a 0, #071227 55%, #03050b 100%);
  --text: #e5e7eb;
  --muted: rgba(229, 231, 235, 0.68);
  --border: rgba(85, 112, 150, 0.22);
  --shadow: 0 20px 46px rgba(3, 7, 18, 0.75);
  --shadow-soft: 0 18px 34px rgba(15, 23, 42, 0.7);
  --accent: #ff2d2d;
  --accent-2: #3b82f6;
  --card: radial-gradient(circle at top left, rgba(15, 23, 42, 0.96), rgba(3, 7, 18, 0.95));
  --card-border: rgba(82, 108, 145, 0.28);
  --radius-lg: 18px;
  --radius-md: 14px;
  --pill: 999px;
  --t-fast: 0.18s ease-out;
  --t-med: 0.24s ease-out;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.page {
  min-height: 100vh;
  background: rgb(47, 65, 100);
  color: var(--text);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* Navbar */
.navbar {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(18px);
  background: linear-gradient(
    to bottom,
    rgba(7, 12, 24, 0.94),
    rgba(7, 12, 24, 0.78),
    transparent
  );
  border-bottom: 1px solid rgba(30, 64, 175, 0.6);
}

.navbar-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  gap: 26px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.brand-mark {
  width: 34px;
  height: 34px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 30% 0%, var(--accent),rgb(30, 54, 101) 70%);
  box-shadow: 0 14px 34px rgba(255, 45, 45, 0.28);
}

.brand-text {
  font-size: 1.05rem;
}

.brand-accent {
  color: var(--accent);
}

.nav-links {
  display: flex;
  gap: 18px;
  font-size: 0.9rem;
  color: rgba(229, 231, 235, 0.7);
}

.nav-link {
  text-decoration: none;
  color: inherit;
  position: relative;
  padding: 4px 0;
}

.nav-link:hover {
  color: rgba(82, 106, 133, 0.95);
}

.nav-actions {
  margin-left: auto;
}

/* Hero */
.hero {
  padding: 84px 20px 46px;
}

.hero-inner {
  max-width: 980px;
  margin: 0 auto;
  text-align: center;
}

.hero-title {
  font-size: clamp(2.2rem, 4.3vw, 3.7rem);
  line-height: 1.05;
  letter-spacing: 0.01em;
  margin: 0 0 10px;
}

.hero-subtitle {
  max-width: 720px;
  margin: 0 auto;
  color: var(--muted);
  font-size: 0.98rem;
}

/* Section */
.section {
  max-width: 1120px;
  margin: 0 auto;
  padding: 36px 20px 70px;
}

.section-top {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 18px;
}

.section-title {
  font-size: 1.15rem;
  margin: 0 0 4px;
}

.section-subtitle {
  margin: 0;
  color: rgba(229, 231, 235, 0.5);
  font-size: 0.85rem;
}

/* Controls */
.controls {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.control {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: var(--pill);
  border: 1px solid rgba(37, 99, 235, 0.6);
  background: rgba(18, 21, 30, 0.7);
  box-shadow: var(--shadow-soft);
}

.control-label {
  font-size: 0.78rem;
  color: rgba(229, 231, 235, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.14em;
}

.control-select {
  appearance: none;
  background: transparent;
  border: 0;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 600;
  font-size: 0.82rem;
  outline: none;
  padding-right: 8px;
  cursor: pointer;
}

/* Cards */
.country-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 18px;
}

.country-card {
  border-radius: var(--radius-lg);
  background: var(--card);
  background-color:#453f56f5;
  border: 1px solid var(--card-border);
  box-shadow: var(--shadow);
  padding: 16px;
  display: flex;
  flex-direction: column;
  min-height: 170px;
  transition: transform var(--t-med), border-color var(--t-med), box-shadow var(--t-med);
}

.country-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 45, 45, 0.78);
  box-shadow: 0 28px 60px rgba(0, 0, 0, 0.7);
}

.country-top {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.flag {
  width: 56px;
  height: 56px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 30% 0%, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.06));
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.flag-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.country-spacer {
  flex: 1;
}

.icon-btn {
  width: 34px;
  height: 34px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(10, 12, 18, 0.25);
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all var(--t-fast);
}

.icon-btn:hover {
  border-color: rgba(59, 130, 246, 0.7);
  color: rgba(255, 255, 255, 0.92);
}

.country-name {
  margin: 0 0 6px;
  font-size: 0.98rem;
  font-weight: 700;
}

.country-meta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(229, 231, 235, 0.58);
  font-size: 0.82rem;
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: #22c55e;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.12);
}

.country-actions {
  margin-top: auto;
  padding-top: 14px;
}

/* Buttons */
.btn {
  border-radius: var(--pill);
  border: 1px solid transparent;
  padding: 10px 16px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: all var(--t-fast);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn.primary {
  background: linear-gradient(135deg, var(--accent), #e94040);
  color: #7a1529;
  box-shadow: 0 18px 42px rgba(255, 45, 45, 0.22);
}

.btn.primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 22px 48px rgba(255, 45, 45, 0.28);
}

.btn.card {
  width: 100%;
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.09);
  color: rgba(255, 255, 255, 0.9);
}

.btn.card:hover {
  border-color: rgba(59, 130, 246, 0.7);
  background: rgba(255, 255, 255, 0.075);
}

/* Footer */
.footer {
  margin-top: 40px;
  background: linear-gradient(180deg, rgba(10, 12, 18, 0.7), #050509);
  border-top: 1px solid rgba(15, 23, 42, 0.9);
  padding: 36px 20px 18px;
  color: rgba(229, 231, 235, 0.64);
}

.footer-inner {
  max-width: 1120px;
  margin: 0 auto 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
}

.footer-brand {
  flex: 1 1 260px;
  max-width: 360px;
}

.footer-logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 900;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.92);
}

.footer-text {
  font-size: 0.84rem;
  margin: 10px 0 14px;
  color: rgba(229, 231, 235, 0.58);
}

.footer-columns {
  display: flex;
  flex: 2 1 360px;
  gap: 44px;
  flex-wrap: wrap;
  margin-left: auto;
}

.footer-column h4 {
  margin: 0 0 10px;
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.92rem;
}

.footer-column a {
  display: block;
  color: rgba(229, 231, 235, 0.62);
  text-decoration: none;
  font-size: 0.84rem;
  margin-bottom: 6px;
}

.footer-column a:hover {
  color: rgba(255, 255, 255, 0.92);
}

.footer-bottom {
  max-width: 1120px;
  margin: 0 auto;
  padding-top: 12px;
  border-top: 1px solid rgba(31, 41, 55, 0.9);
  font-size: 0.78rem;
  color: rgba(229, 231, 235, 0.5);
  text-align: center;
}

@media (max-width: 980px) {
  .country-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 880px) {
  .nav-links {
    display: none;
  }
}

@media (max-width: 640px) {
  .section-top {
    flex-direction: column;
    align-items: stretch;
  }

  .controls {
    justify-content: flex-start;
  }

  .country-grid {
    grid-template-columns: 1fr;
  }
}
</style>

