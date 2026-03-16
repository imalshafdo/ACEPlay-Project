<template>
  <div class="page">
    <header class="navbar">
      <div class="navbar-inner">
        <NuxtLink to="/" class="brand">
          <span class="brand-mark" aria-hidden="true">◈</span>
          <span class="brand-text">ACE<span class="brand-accent">Play</span></span>
        </NuxtLink>

        <nav class="nav-links">
          <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          <NuxtLink class="nav-link" to="/countries/country">Countries</NuxtLink>
          <NuxtLink class="nav-link" to="/countries/thailand"> Thailand Casinos</NuxtLink>
          <NuxtLink class="nav-link" to="/games">Games</NuxtLink>
          <NuxtLink class="nav-link" to="#about">About us</NuxtLink>
        </nav>

        <div class="nav-actions">
          <button class="btn btn-join primary">Join Now</button>
        </div>
      </div>
    </header>

    <main class="main-layout">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-header">
          <div class="sidebar-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff2d2d" stroke-width="2" stroke-linecap="round" class="filter-icon">
              <path d="M4 6h16M7 12h10M10 18h4"/>
            </svg>
            Filters
          </div>
          <button class="reset-btn">Reset</button>
        </div>

        <div class="filter-group">
          <h4 class="filter-label">MINIMUM RATING</h4>
          <label class="checkbox-label">
            <input type="checkbox" class="custom-checkbox" />
            <span>4+ Stars <span class="text-red">★★★★</span></span>
          </label>
          <label class="checkbox-label">
            <input type="checkbox" class="custom-checkbox" />
            <span>3+ Stars <span class="text-red">★★★</span></span>
          </label>
        </div>

        <div class="filter-group">
          <h4 class="filter-label">BONUS TYPES</h4>
          <label class="checkbox-label">
            <input type="checkbox" class="custom-checkbox" checked />
            <span>Welcome Bonus</span>
          </label>
          <label class="checkbox-label">
            <input type="checkbox" class="custom-checkbox" />
            <span>No Deposit Bonus</span>
          </label>
          <label class="checkbox-label">
            <input type="checkbox" class="custom-checkbox" />
            <span>Low Deposit Bonus</span>
          </label>
        </div>

        <div class="filter-group">
          <h4 class="filter-label">PAYMENT METHODS</h4>
          <label class="checkbox-label">
            <input type="checkbox" class="custom-checkbox" checked />
            <span class="icon-text"><span class="icon-placeholder payment-icon" style="color:red">💳</span> E-wallet</span>
          </label>
          <label class="checkbox-label">
            <input type="checkbox" class="custom-checkbox" />
            <span class="icon-text"><span class="icon-placeholder payment-icon" style="color:red">🏦</span> Bank Transfer</span>
          </label>
          <label class="checkbox-label">
            <input type="checkbox" class="custom-checkbox" />
            <span class="icon-text"><span class="icon-placeholder payment-icon" style="color:red">📱</span> QR Payment</span>
          </label>
          <label class="checkbox-label">
            <input type="checkbox" class="custom-checkbox" />
            <span class="icon-text"><span class="icon-placeholder payment-icon" style="color:red">₿</span> Cryptocurrency</span>
          </label>
        </div>
      </aside>

      <!-- Content -->
      <section class="content">
        <h1 class="page-title"><span class="highlight text-red" style="color:red">{{ countryName }} </span> Top Online Casinos</h1>
        <p class="page-subtitle" style="color:aliceblue">
          We have reviewed the latest bonuses from the top online casinos in {{ countryName }}. Compare great offers like welcome
          bonuses and no deposit pros — so you can get the most out of playing games for real money.
        </p>

        <div class="sort-bar">
          <div class="sort-tabs">
            <button class="sort-tab active">Most Popular</button>
            <button class="sort-tab">Newest</button>
            <button class="sort-tab">Highest Rated</button>
          </div>
          <div class="results-text">Showing 6 verified casinos</div>
        </div>

        <div class="casino-list">
          <article v-for="c in casinos" :key="c.name" class="casino-card-long">
            <span class="bonus-badge">BONUS PACKAGE</span>

            <div class="card-inner">
              <div class="card-logo-col">
                <img :src="c.logo" alt="" class="card-logo" />
              </div>

              <div class="card-main-col">
                <div class="card-title-row">
                  <h3 class="casino-name">{{ c.name }}</h3>
                  <span class="casino-since">{{ c.since }}</span>
                </div>

                <div class="card-rating">
                  <span class="stars">
                    <span class="text-red">★★★★</span>
                    <span class="star-half text-red">★</span>
                  </span>
                  <span class="rating-val">({{ c.rating }}/5)</span>
                  <span class="star-gray"></span>
                </div>

                <div class="card-promo">
                  <span class="promo-label">Promotion:</span> {{ c.promo }}
                </div>

                <div class="card-transfer">
                  {{ c.transfer }}
                </div>

                <div class="card-terms">
                  {{ c.terms }}
                </div>
              </div>

              <div class="card-action-col">
                <div class="range-info">
                  <div class="range-row">
                    <span class="range-label">Deposit range :</span>
                    <span class="range-val">{{ c.depositRange }}</span>
                  </div>
                  <div class="range-row">
                    <span class="range-label">Withdrawal Range :</span>
                    <span class="range-val">{{ c.withdrawalRange }}</span>
                  </div>
                </div>

                <div class="card-buttons">
                  <NuxtLink to="/casinopage" class="btn primary full-width py" style="text-decoration:none">More Reviews</NuxtLink>
                  <button class="btn secondary full-width py">Get Promotions Now</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>

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
        <span>ACEPlay website is endorsed by: </span>
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
const countryName = computed(() => 'Philippines')

const casinos = [
  {
    name: 'JILINO1',
    since: 'since 2018 (8 years)',
    rating: '4.8',
    promo: 'New members bonus package with extra rewards',
    transfer: 'Deposit20 → Bonuses200 → Receive220',
    terms: '(Turnover 6000x • Maximum withdrawal 200)',
    depositRange: '1 - 100000',
    withdrawalRange: '100 - 500000',
    logo: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/logo/philippines/jilino1.png',
  },
  {
    name: 'MILYON88',
    since: 'since 2019 (7 years)',
    rating: '4.7',
    promo: 'Welcome bonus + cashback offers for regular players',
    transfer: 'Deposit20 → Bonuses200 → Receive220',
    terms: '(Turnover 6000x • Maximum withdrawal 200)',
    depositRange: '1 - 100000',
    withdrawalRange: '100 - 500000',
    logo: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/logo/philippines/milyon88.png',
  },
  {
    name: 'SSBET77',
    since: 'since 2019 (7 years)',
    rating: '4.7',
    promo: 'Sports + casino promos with weekly reload bonuses',
    transfer: 'Deposit20 → Bonuses200 → Receive220',
    terms: '(Turnover 6000x • Maximum withdrawal 200)',
    depositRange: '1 - 100000',
    withdrawalRange: '100 - 500000',
    logo: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/logo/philippines/swerte99.png',
  },
  {
    name: 'SWERTE99',
    since: 'since 2020 (6 years)',
    rating: '4.6',
    promo: 'High-value welcome bonus for new players',
    transfer: 'Deposit20 → Bonuses200 → Receive220',
    terms: '(Turnover 6000x • Maximum withdrawal 200)',
    depositRange: '1 - 100000',
    withdrawalRange: '100 - 500000',
    logo: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/logo/philippines/ssbet77.webp',
  },
  {
    name: '7SPIN',
    since: 'since 2020 (6 years)',
    rating: '4.6',
    promo: 'Slots-focused promos with daily rewards',
    transfer: 'Deposit20 → Bonuses200 → Receive220',
    terms: '(Turnover 6000x • Maximum withdrawal 200)',
    depositRange: '1 - 100000',
    withdrawalRange: '100 - 500000',
    logo: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/logo/philippines/7spin.png',
  },
  {
    name: 'BETSO88',
    since: 'since 2021 (5 years)',
    rating: '4.5',
    promo: 'New members challenge bonus pack',
    transfer: 'Deposit20 → Bonuses200 → Receive220',
    terms: '(Turnover 6000x • Maximum withdrawal 200)',
    depositRange: '1 - 100000',
    withdrawalRange: '100 - 500000',
    logo: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/logo/philippines/betso88.png',
  },
]
</script>

<style scoped>
::root {
  --bg-gradient: radial-gradient(circle at top, #22324a 0, #071227 55%, #03050b 100%);
  --accent: #e53935;
  --text-main: #f1f5f9;
  --text-muted: #9ca3af;
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
  border-bottom: 1px solid rgba(82, 108, 145, 0.28);
}

.navbar-inner {
  max-width: 1300px;
  margin: 0 auto;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  gap: 30px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #fff;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-right: 20px;
}

.brand-mark {
  width: 34px;
  height: 34px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 30% 0%, var(--accent), #0b1220 70%);
}

.brand-text {
  font-size: 1.1rem;
}

.brand-accent {
  color: var(--accent);
}

.nav-links {
  display: flex;
  gap: 24px;
  font-size: 0.9rem;
  color: #fff;
  font-weight: 600;
}

.nav-link {
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s;
}

.nav-link:hover {
  color: rgba(229, 231, 235, 0.7);
}

.nav-actions {
  margin-left: auto;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 1px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
}

.btn.primary {
  background: #576890;
  color: white;
}
.btn.primary:hover {
  background: #d32f2f;
}

.btn.secondary {
  background: transparent;
  color: #94a3b8;
  border: 1px solid rgba(148, 163, 184, 0.3);
}
.btn.secondary:hover {
  border-color: #64748b;
  color: #cbd5e1;
}

.btn-join {
  padding: 8px 24px;
  border-radius: 8px;
}

.full-width {
  width: 100%;
}
.py {
  padding: 10px 0;
}

.text-red {
  color: var(--accent);
}

/* Main Layout */
.main-layout {
  max-width: 1300px;
  margin: 40px auto;
  padding: 0 24px;
  display: flex;
  gap: 32px;
  align-items: flex-start;
}

/* Sidebar */
.sidebar {
  width: 250px;
  flex-shrink: 0;
  background: #1e1515;
  border-radius: 12px;
  padding: 24px 20px;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.sidebar-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
}

.reset-btn {
  background: none;
  border: none;
  color: var(--accent);
  font-size: 0.85rem;
  cursor: pointer;
  font-weight: 600;
}

.filter-group {
  margin-bottom: 24px;
}
.filter-group:last-child {
  margin-bottom: 0;
}

.filter-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 12px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 0.85rem;
  color: #e2e8f0;
}
.checkbox-label:last-child {
  margin-bottom: 0;
}

.custom-checkbox {
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  border: 1px solid #475569;
  background: #0f172a;
  outline: none;
  cursor: pointer;
  position: relative;
}

.custom-checkbox:checked {
  background: var(--accent);
  border-color: var(--accent);
}

.custom-checkbox:checked::after {
  content: "✓";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 12px;
}

.icon-text {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.payment-icon {
  font-size: 1.1rem;
}

/* Content */
.content {
  flex: 1;
  min-width: 0;
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 16px 0;
  line-height: 1.1;
  letter-spacing: -0.01em;
}

.page-subtitle {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-muted);
  max-width: 800px;
  margin-bottom: 32px;
}

.sort-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1e1515;
  border-radius: 12px;
  padding: 6px 20px 6px 6px;
  margin-bottom: 24px;
}

.sort-tabs {
  display: flex;
  gap: 6px;
}

.sort-tab {
  background: transparent;
  border: none;
  color: #94a3b8;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.sort-tab.active {
  background: var(--accent);
  color: #fff;
}

.results-text {
  font-size: 0.85rem;
  color: #64748b;
}

/* Card layout */
.casino-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.casino-card-long {
  background: #111a28;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  padding: 24px;
  padding-top: 32px; /* space for absolute badge */
}

.bonus-badge {
  position: absolute;
  top: 12px;
  right: 24px;
  font-size: 0.7rem;
  font-weight: 700;
  color: #64748b;
  letter-spacing: 0.05em;
}

.card-inner {
  display: flex;
  gap: 24px;
  align-items: stretch;
}

.card-logo-col {
  width: 160px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-logo {
  width: 140px;
  height: 140px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.card-main-col {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-title-row {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 4px;
}

.casino-name {
  font-size: 1.5rem;
  font-weight: 800;
  margin: 0;
  color: #fff;
}

.casino-since {
  font-size: 0.8rem;
  color: #94a3b8;
}

.card-rating {
  font-size: 0.85rem;
  margin-bottom: 16px;
  display: flex;
  color: red;
  align-items: center;
  gap: 8px;
}

.stars {
  letter-spacing: 2px;
}

.star-half {
  color: rgba(229, 57, 53, 0.4);
}

.rating-val {
  color: #94a3b8;
}

.card-promo {
  font-size: 0.95rem;
  color: #fff;
  margin-bottom: 16px;
}

.promo-label {
  font-weight: 700;
}

.card-transfer {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 6px;
}

.card-terms {
  font-size: 0.85rem;
  color: #64748b;
}

.card-action-col {
  width: 240px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.range-info {
  margin-bottom: 20px;
}

.range-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.85rem;
}
.range-row:last-child {
  margin-bottom: 0;
}

.range-label {
  color: #fff;
  font-weight: 600;
}

.range-val {
  color: #fff;
  font-weight: 700;
}

.card-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

@media (max-width: 1024px) {
  .main-layout {
    flex-direction: column;
  }
  .sidebar {
    width: 100%;
  }
  .card-inner {
    flex-wrap: wrap;
  }
  .card-action-col {
    width: 100%;
    margin-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 20px;
  }
}

@media (max-width: 640px) {
  .card-logo-col {
    width: 100%;
    margin-bottom: 20px;
  }
  .card-logo {
    width: 100px;
    height: 100px;
  }
}

/* Footer */
.footer {
  margin-top: 40px;
  background:rgb(42, 48, 74);
  border-top: 1px solid rgba(15, 23, 42, 0.9);
  padding: 36px 20px 18px;
  color: rgba(229, 231, 235, 0.64);
}

.footer-inner {
  max-width: 1000px;
  margin: 0 auto 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 350px;
}

.footer-brand {
  flex: 1 1 260px;
  max-width: 360px;
}

.footer-logo {
  display: inline-flex;
  align-items: center;
  gap: 15px;
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
  gap: 100px;
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
  padding-top: 1px;
  border-top: 1px solid rgba(31, 41, 55, 0.9);
  font-size: 0.78rem;
  color: rgba(229, 231, 235, 0.5);
  text-align: center;
}
</style>
