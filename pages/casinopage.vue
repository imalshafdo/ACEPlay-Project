<template>
  <div class="page">
    <header class="navbar">
      <div class="navbar-inner">
        <NuxtLink to="/" class="brand">
          <span class="brand-mark" aria-hidden="true">◈</span>
          <span class="brand-text">ACE<span class="brand-accent">Play</span></span>
        </NuxtLink>

        <nav class="nav-links" style="color:aliceblue">
          <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          <NuxtLink class="nav-link" to="/countries">Countries</NuxtLink>
          <NuxtLink class="nav-link" to="/casinos">Casinos</NuxtLink>
          <NuxtLink class="nav-link" to="/promotions">Promotions</NuxtLink>
          <NuxtLink class="nav-link" to="/games">Games</NuxtLink>
        </nav>

        <div class="nav-actions">
          <button class="btn btn-join primary">Join Now</button>
        </div>
      </div>
    </header>

    <main class="main-layout container">
      <!-- Casino Hero Section -->
      <section class="casino-hero">
        <div class="hero-content">
          <div class="hero-left">
            <img src="https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/logo/thailand/ubet89.png" alt="UBET89" class="hero-logo" />
            <div class="hero-info">
              <h1 class="hero-title">UBET89</h1>
              <p class="hero-subtitle">Start Year: 2017 | Deposit amount: 10 THB - 200,000 THB</p>
              <p class="hero-desc">
                Bet Slot Fish Shooting Online Casino One<br>Place Deposit and Withdrawal 24H outs
              </p>
              <button class="btn primary play-now-btn">Play Now</button>
            </div>
          </div>
          <div class="hero-right">
            <ul class="hero-features">
              <li>
                <span class="check-icon">☑</span>
                Direct web automatic deposit-withdrawal<br>system
              </li>
              <li>
                <span class="check-icon">☑</span>
                Supports all platforms, play anytime, anywhere
              </li>
              <li>
                <span class="check-icon">☑</span>
                24-hour customer care team
              </li>
            </ul>
            <div class="hero-actions">
              <button class="btn secondary action-btn">All withdrawals</button>
              <button class="btn secondary action-btn">View All Promotions</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Tabs Section -->
      <section class="casino-tabs">
        <button v-for="tab in tabs" :key="tab" class="tab-btn">{{ tab }}</button>
      </section>

      <!-- Promotion Banner -->
      <section class="promo-banner-section">
        <div class="promo-banner-card">
          <div class="promo-img-wrapper">
            <img src= "https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/promotion/thailand/ubet89/%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%99%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%A1%E0%B8%B2%E0%B8%8A%E0%B8%B4%E0%B8%81%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%20ubet89.jpg" alt="Promo" class="promo-img" />
          </div>
          <div class="promo-banner-info">
            <h3 class="promo-banner-title" style="color:oldlace";>UBET89 Trending Casinos 2025</h3>
            <p class="promo-banner-text">
              Deposit 50 → Bonus 150 → Get 200<br>
              (Turnover ฿5,000 Withdraw up to 300)
            </p>
            <button class="btn dark-btn">Participate in the Promotion</button>
          </div>
        </div>
      </section>

      <!-- Celebrate Big Wins 1 -->
      <section class="game-section">
        <h2 class="section-title">Celebrate Big Wins at UBET89!</h2>
        <p class="section-subtitle">Experience the thrill of real player winnings, with big winnings every day - the most popular money-making game awaits you. One spin can change lives!💰✨</p>
        
        <div class="game-grid">
          <div v-for="game in games1" :key="game.id" class="game-card">
            <div class="game-img-box">
              <img :src="game.image" alt="Game" class="game-img" />
              <div class="game-overlay">
                <button class="btn play-btn-overlay">Play Now</button>
              </div>
            </div>
            <div class="game-info">
              <div class="game-info-row">
                <span class="game-date">{{ game.date }} • {{ game.time }}</span>
                <span class="game-bet">Bet: {{ game.bet }}</span>
              </div>
              <div class="game-info-row">
                <span class="game-name">{{ game.name }} • {{ game.multiplier }}</span>
                <span class="game-win">Winnings: {{ game.win }} 🏆<span class="tag-yellow">{{ game.tag }}</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

        <!-- Most popular games -->
      <section class="game-section">
        <h2 class="section-title">The most popular game that players love across the country.</h2>
        <p class="section-subtitle">Experience the thrill of real player winnings, with big winnings every day - the most popular money-making game awaits you. One spin can change lives! 💰✨</p>
        
        <div class="game-grid">
          <div v-for="game in games2" :key="game.id" class="game-card">
            <div class="game-img-box">
              <img :src="game.image" alt="Game" class="game-img" />
              <div class="game-overlay">
                <button class="btn play-btn-overlay">Play Now</button>
              </div>
            </div>
            <div class="game-info">
              <div class="game-info-row">
                <span class="game-date">{{ game.date }} • {{ game.time }}</span>
                <span class="game-bet">Bet: {{ game.bet }}</span>
              </div>
              <div class="game-info-row">
                <span class="game-name">{{ game.name }} • {{ game.multiplier }}</span>
                <span class="game-win">Winnings: {{ game.win }} 🏆<span class="tag-yellow">{{ game.tag }}</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- Exclusive Promotions -->
      <section class="promo-section">
        <h2 class="section-title">Exclusive <span class="text-red">Promotions</span> Don't miss it!</h2>
        <p class="section-subtitle">Enjoy your favorite web games and get special bonuses, high cashback, VIP rewards and exciting events every day. Don't miss out on your chance to win big! 🎁💎🔥</p>

        <div class="promo-grid">
          <div v-for="promo in promotions" :key="promo.id" class="promo-card">
            <div class="promo-img-box">
              <img :src="promo.image" alt="Promo" class="promo-card-img" />
              <div class="game-overlay">
                <button class="btn play-btn-overlay">Join Now</button>
              </div>
            </div>
            <div class="promo-info">
              <h4 class="promo-name">{{ promo.title }}</h4>
              <span class="promo-tag-sm">🎁 {{ promo.tag }}</span>
              
              <div class="promo-details">
                <div class="promo-col">
                  <div>Deposit: {{ promo.dep }}</div>
                  <div>Turnover Amount: {{ promo.turnover }}</div>
                  <div>Maximum Withdrawal: {{ promo.maxW }}</div>
                </div>
                <div class="promo-col right-align">
                  <div>Bonuses: {{ promo.bonus }}</div>
                  <div>Game Wins: {{ promo.wins }}</div>
                  <div>Game Type: {{ promo.type }}</div>
                </div>
              </div>
            </div>
          </div>
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

      <div class="certify-row">
         <span>ACEPlay website is endorsed by:  </span> 
        <img src="https://aceplay.bet/_vercel/image?url=%2Fimg%2Fcertify%2Ftruste.webp&w=1536&q=100" alt="TRUSTe">
        <img src="https://aceplay.bet/_vercel/image?url=%2Fimg%2Fcertify%2Fsucun.webp&w=1536&q=100" alt="Sucuri">
        <img src="https://aceplay.bet/_vercel/image?url=%2Fimg%2Fcertify%2Fnorton.webp&w=1536&q=100" alt="Norton">
        <img src="https://aceplay.bet/_vercel/image?url=%2Fimg%2Fcertify%2Fgpwa.webp&w=1536&q=100" alt="GPWA">
        <img src="https://aceplay.bet/_vercel/image?url=%2Fimg%2Fcertify%2Fdmca.webp&w=1536&q=100" alt="DMCA">
      </div>

      <div class="footer-bottom">
        <span>© Copyright 2018 - {{ new Date().getFullYear() }}, ACEPlay All Rights Reserved.</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tabs = ['Slot Games', 'Fish Shooting', 'Rocket Games', 'Live Casino', 'Sports' , 'Bingo']

const createGame = (id, image) => ({
  id,
  image,
  date: '9 Jul 2025',
  time: '10:36',
  bet: '฿100',
  name: 'Lucky Dragons',
  multiplier: 'x130',
  win: 'THB 33,100',
  tag: '553Xs'
})

const games1 = ref([
  createGame(1, 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/bigwin/thailand/ubet89/1.Lucky%20Dragons.jpg'),
  createGame(2, 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/bigwin/thailand/ubet89/2.Fortune%20Tiger.jpg'),
  createGame(3, 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/bigwin/thailand/ubet89/3.Treasures%20of%20Aztec.jpg')
])
const games2 = ref([...games1.value].map(g => ({...g, id: g.id + 10})))
const popularGames = ref([
  createGame(101, 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/game/thailand/ubet89/pg-treasures-of-aztec.jpg'),
  createGame(102, 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/game/thailand/ubet89/ps-fortune-tiger.jpg'),
  createGame(103, 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/game/thailand/ubet89/pg-wild-ape.jpg')
])

const promotions = ref([
  {
    id: 1,
    image: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/promotion/thailand/ubet89/%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%99%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%A1%E0%B8%B2%E0%B8%8A%E0%B8%B4%E0%B8%81%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%20ubet89.jpg',
    title: 'New Members Free Credits 150',
    tag: 'New Members',
    dep: '฿250.0', turnover: '฿5,000', maxW: '200',
    bonus: '฿250.0', wins: '~', type: '🎰+📸'
  },
  {
    id: 2,
    image: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/promotion/thailand/ubet89/%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B8%8A%E0%B8%B8%E0%B9%88%E0%B8%A1%E0%B8%89%E0%B9%88%E0%B8%B3%20%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%9D%E0%B8%99.jpg',
    title: 'New Members Free Credits 150',
    tag: 'New Members',
    dep: '฿250.0', turnover: '฿5,000', maxW: '200',
    bonus: '฿250.0', wins: '~', type: '🎰+📸'
  },
  {
    id: 3,
    image: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/promotion/thailand/ubet89/%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B8%9D%E0%B8%B2%E0%B8%81%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B9%80%E0%B8%99%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%207%20%E0%B8%9A%E0%B8%B4%E0%B8%A5.jpg',
    title: 'New Members Free Credits 150',
    tag: 'New Members',
    dep: '฿250.0', turnover: '฿5,000', maxW: '150',
    bonus: '฿250.0', wins: '~', type: '🎰+📸'
  }
])
</script>

<style scoped>
:root {
  --bg-color: rgb(47, 65, 100);
  --accent: #e53935;
  --text-main: #f1f5f9;
  --text-muted: #9ca3af;
}

*, *::before, *::after { box-sizing: border-box; }

.page {
  min-height: 100vh;
  background: rgb(47, 65, 100);
  color: var(--text-main);
  font-family: system-ui, -apple-system, sans-serif;
}

/* Navbar */
.navbar {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(18px);
  background: linear-gradient(to bottom, rgba(7, 12, 24, 0.94), rgba(7, 12, 24, 0.78), transparent);
  border-bottom: 1px solid rgba(82, 108, 145, 0.28);
}
.navbar-inner {
  max-width: 1300px; margin: 0 auto; padding: 14px 24px;
  display: flex; align-items: center; gap: 30px;
}
.brand {
  display: inline-flex; align-items: center; gap: 10px;
  text-decoration: none; color: #fff; font-weight: 800;
  text-transform: uppercase; margin-right: 20px;
}
.brand-mark {
  width: 34px; height: 34px; border-radius: 12px;
  display: inline-flex; align-items: center; justify-content: center;
  background: radial-gradient(circle at 30% 0%, var(--accent), #0b1220 70%);
}
.brand-accent { color: var(--accent); }
.nav-links { display: flex; gap: 24px; font-size: 0.9rem; font-weight: 600; }
.nav-link { text-decoration: none; color: inherit; transition: opacity 0.2s; }
.nav-link:hover { opacity: 0.7; }
.nav-actions { margin-left: auto; }

/* Buttons */
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: 6px; border: none; font-size: 0.9rem; font-weight: 600;
  cursor: pointer; transition: all 0.2s; padding: 10px 20px;
}
.btn.primary { background: #4a597b; color: rgb(255, 255, 255); }
.btn.primary:hover { background: #d32f2f; }
.btn.secondary { background: transparent; color: #8091a7; border: 1px solid rgba(148, 163, 184, 0.3); }
.btn.secondary:hover { border-color: #586a84; color: #cbd5e1; }
.dark-btn { background: #0f172a; color: white; border: 1px solid rgba(255,255,255,0.1); }
.dark-btn:hover { background: #1e293b; }
.text-red { color: var(--accent); }

.container { max-width: 1100px; margin: 0 auto; padding: 32px 24px; }

/* Hero Section */
.casino-hero {
  background: #142345;
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  border: 1px solid rgba(255,255,255,0.05);
}
.hero-content {
  display: flex;
  justify-content: space-between;
  gap: 32px;
}
.hero-left {
  display: flex;
  gap: 32px;
  flex: 1;
}
.hero-logo {
  width: 160px;
  height: 160px;
  border-radius: 24px;
  object-fit: cover;
  box-shadow: 0 8px 20px rgba(0,0,0,0.4);
}
.hero-info {
  display: flex;
  flex-direction: column;
}
.hero-title {
  font-size: 3.5rem;
  font-weight: 900;
  margin: 0 0 8px 0;
  line-height: 1;
  color: #fff;
}
.hero-subtitle {
  color: #94a3b8;
  font-size: 0.95rem;
  margin-bottom: 16px;
}
.hero-desc {
  color: #cbd5e1;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 24px;
}
.play-now-btn {
  width: 200px;
  font-size: 1.1rem;
  padding: 12px 0;
  border-radius: 8px;
}

.hero-right {
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.hero-features {
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
  color: #cbd5e1;
  font-size: 0.9rem;
}
.hero-features li {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  line-height: 1.4;
}
.check-icon {
  color: #94a3b8;
}
.hero-actions {
  display: flex;
  gap: 12px;
}
.action-btn {
  flex: 1;
  font-size: 0.85rem;
  padding: 10px 0;
}

/* Tabs */
.casino-tabs {
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}
.tab-btn {
  background: #111a2e;
  color: #94a3b8;
  border: 1px solid rgba(255,255,255,0.05);
  padding: 14px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  flex: 1;
  min-width: 140px;
}
.tab-btn:hover {
  background: #1b263b;
  color: #fff;
}

/* Promo Banner Section */
.promo-banner-section {
  margin-bottom: 40px;
}
.promo-banner-card {
  background: #1e2c4f;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 24px;
  gap: 32px;
  border: 1px solid #2a3d68;
}
.promo-img-wrapper {
  width: 50%;
  border-radius: 8px;
  overflow: hidden;
}
.promo-img {
  width: 100%;
  height: auto;
  display: block;
}
.promo-banner-info {
  flex: 1;
}
.promo-banner-title {
  color: var(--accent);
  font-size: 1.4rem;
  margin: 0 0 16px 0;
}
.promo-banner-text {
  font-size: 1.1rem;
  color: #e2e8f0;
  line-height: 1.6;
  margin-bottom: 24px;
}

/* Game Sections */
.game-section, .promo-section {
  margin-bottom: 50px;
}
.section-title {
  font-size: 1.6rem;
  font-weight: 800;
  margin: 0 0 8px 0;
  color: #fff;
}
.section-subtitle {
  color: #cbd5e1;
  font-size: 0.95rem;
  margin-bottom: 24px;
}

/* Grid */
.game-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.game-card {
  background: #0f172a;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.05);
  transition: transform 0.2s;
}
.game-card:hover {
  transform: translateY(-4px);
}
.game-img-box {
  position: relative;
  width: 100%;
  padding-top: 55%;
}
.game-img {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;
}
.game-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s;
}
.game-card:hover .game-overlay, .promo-card:hover .game-overlay {
  opacity: 1;
}
.play-btn-overlay {
  font-size: 1.2rem;
  padding: 12px 32px;
  border-radius: 8px;
  background: #111;
  color: #fff;
  border: 2px solid rgba(255,255,255,0.2);
}
.game-info {
  padding: 16px;
}
.game-info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: #94a3b8;
  margin-bottom: 6px;
}
.game-info-row:last-child { margin-bottom: 0; }
.game-name { color: #fff; font-weight: 600; font-size: 0.85rem; }
.game-win { color: #22c55e; font-weight: 700; display: flex; align-items: center; gap: 4px; }
.tag-yellow { background: #eab308; color: #000; padding: 2px 6px; border-radius: 4px; font-weight: 800; font-size: 0.7rem; }

/* Promotions Grid */
.promo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.promo-card {
  background: #111827;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.05);
  transition: transform 0.2s;
}
.promo-card:hover {
  transform: translateY(-4px);
}
.promo-img-box {
  position: relative;
  width: 100%;
  padding-top: 50%;
}
.promo-card-img {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;
}
.promo-info {
  padding: 16px;
}
.promo-name {
  color: #fff;
  font-size: 1rem;
  margin: 0 0 8px 0;
}
.promo-tag-sm {
  display: inline-block;
  font-size: 0.75rem;
  color: #94a3b8;
  background: rgba(255,255,255,0.1);
  padding: 2px 8px;
  border-radius: 4px;
  margin-bottom: 12px;
}
.promo-details {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #94a3b8;
  line-height: 1.6;
}
.promo-col {
  display: flex;
  flex-direction: column;
}
.right-align { text-align: right; }

/* Footer */
.footer { background:rgb(42, 48, 74);; color: #fff; padding-top: 0px; }
.footer-inner {
  max-width: 1300px; margin: 0 auto; padding: 0 50px;
  display: grid; grid-template-columns: 1fr 1fr; gap: 60px; margin-bottom: 30px;
}
.footer-brand { max-width: 400px; }
.footer-logo {
  display: inline-flex; align-items: center; gap: 10px;
  font-size: 1.3rem; font-weight: 800; text-transform: uppercase; margin-bottom: 16px;
}
.footer-text { color: #94a3b8; line-height: 1.6; font-size: 0.90rem; }
.footer-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
.footer-column h4 { font-size: 1.1rem; margin-bottom: 20px; }
.footer-column a {
  display: block; color: #94a3b8; text-decoration: none;
  margin-bottom: 12px; transition: color 0.2s;
}
.footer-column a:hover { color: #fff; }
.certify-row { display: flex; justify-content: center; align-items: center; gap: 15px; margin-bottom: 20px; color: #94a3b8; }
.certify-row img { height: 15px; object-fit: contain; }
.footer-bottom {
  text-align: center; padding: 24px; border-top: 1px solid rgba(255,255,255,0.1);
  color: #64748b; font-size: 0.9rem;
}

@media (max-width: 1024px) {
  .hero-content { flex-direction: column; }
  .hero-right { width: 100%; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px; }
  .promo-banner-card { flex-direction: column; }
  .promo-img-wrapper { width: 100%; }
  .game-grid, .promo-grid { grid-template-columns: repeat(2, 1fr); }
  .footer-inner { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .game-grid, .promo-grid { grid-template-columns: 1fr; }
  .hero-left { flex-direction: column; align-items: center; text-align: center; }
}
</style>
