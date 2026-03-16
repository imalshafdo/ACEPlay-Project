<template>
  <div class="page">
    <!-- Navbar -->
    <header class="navbar">
      <div class="navbar-inner">
        <NuxtLink to="/" class="logo" style="color:aliceblue">
          <span class="logo-badge" style="color:aliceblue">ACE</span>
          <span class="logo-text">Play</span>
        </NuxtLink>

        <nav class="nav-links" style="color:aliceblue">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="Games">Games</NuxtLink>
          <a href="/countries">Countries</a>
          <a href="#">How to play</a>
          <a href="#">Pros & Cons</a>
          <a href="#">FAQ</a>
        </nav>

        <div class="nav-actions" style="color:aliceblue">
          <button class="btn ghost">Log in</button>
          <button class="btn primary" style="color:snow">Join Now</button>
        </div>
      </div>
    </header>

    <!-- Game Hero Section -->
    <section class="game-hero">
      <div class="game-hero-inner">
        <div class="game-hero-content">
          <div class="game-breadcrumb">
            <NuxtLink to="/games">Games ></NuxtLink>
            <span class="separator"></span>
            <NuxtLink to="/games">JILI ></NuxtLink>
            <span class="separator"></span>
            <span class="current">{{ game.title }}</span>
          </div>
          
          <div class="game-main-info">
            <div class="game-image-container">
              <img :src="game.image" :alt="game.title" class="game-main-image" />
              <div class="game-provider-badge">{{ game.provider }}</div>
            </div>
            
            <div class="game-details">
              <h1 class="game-title">{{ game.title }}</h1>
              <div class="game-meta">
                <div class="meta-item">
                  <span class="meta-label">RTP</span>
                  <span class="meta-value">{{ game.rtp }}%</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Volatility</span>
                  <span class="meta-value">{{ game.volatility }}</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Max Win</span>
                  <span class="meta-value">{{ game.maxWin }}</span>
                </div>
              </div>
              
              <div class="game-features">
                <h3>Key Features</h3>
                <ul>
                  <li v-for="feature in game.features" :key="feature">{{ feature }}</li>
                </ul>
              </div>
              
              <div class="game-actions">
                <button class="btn primary large">Play Now</button>
                <button class="btn secondary large">Try Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Game Overview Section -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">Game Overview</h2>
      </div>
      
      <div class="overview-content">
        <div class="overview-text">
          <p>{{ game.overview }}</p>
          <p>{{ game.overview2 }}</p>
        </div>
        
        <div class="overview-stats">
          <div class="stat-card">
            <div class="stat-icon">🎰</div>
            <div class="stat-info">
              <h4>Game Type</h4>
              <p>{{ game.gameType }}</p>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">📏</div>
            <div class="stat-info">
              <h4>Reels & Rows</h4>
              <p>{{ game.reelsRows }}</p>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">💰</div>
            <div class="stat-info">
              <h4>Min/Max Bet</h4>
              <p>{{ game.betRange }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How to Play Section -->
    <section class="section section-muted">
      <div class="section-header">
        <h2 class="section-title">How to Play {{ game.title }}</h2>
      </div>
      
      <div class="how-to-play">
        <div class="steps-container">
          <div v-for="(step, index) in game.howToPlay" :key="index" class="step-item">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
        
        <div class="tips-box">
          <h3>Pro Tips</h3>
          <ul>
            <li v-for="tip in game.tips" :key="tip">{{ tip }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Pros & Cons Section -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">Pros & Cons</h2>
      </div>
      
      <div class="pros-cons-grid">
        <div class="pros-card">
          <h3>✓ Advantages</h3>
          <ul>
            <li v-for="pro in game.pros" :key="pro">{{ pro }}</li>
          </ul>
        </div>
        <div class="cons-card">
          <h3>✗ Disadvantages</h3>
          <ul>
            <li v-for="con in game.cons" :key="con">{{ con }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Who Is This Game For Section -->
    <section class="section section-muted">
      <div class="section-header">
        <h2 class="section-title">Who Is This Game For?</h2>
      </div>
      
      <div class="target-audience">
        <div class="audience-grid">
          <div v-for="audience in game.targetAudience" :key="audience.type" class="audience-card">
            <div class="audience-icon">{{ audience.icon }}</div>
            <h3>{{ audience.type }}</h3>
            <p>{{ audience.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Top Pick Section -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">Our Top Pick</h2>
        <p class="section-subtitle" style="color:whitesmoke">Exclusive bonus offer for {{ game.title }}</p>
      </div>
      
      <div class="top-pick-card">
        <div class="top-pick-content">
          <div class="top-pick-info">
            <div class="top-pick-badge">Exclusive</div>
            <h3>{{ game.topPick.title }}</h3>
            <p class="top-pick-description">{{ game.topPick.description }}</p>
            
            <div class="top-pick-features">
              <div class="feature-item">
                <span class="feature-label">Bonus Amount</span>
                <span class="feature-value">{{ game.topPick.bonus }}</span>
              </div>
              <div class="feature-item">
                <span class="feature-label">Wagering</span>
                <span class="feature-value">{{ game.topPick.wagering }}</span>
              </div>
              <div class="feature-item">
                <span class="feature-label">Min Deposit</span>
                <span class="feature-value">{{ game.topPick.minDeposit }}</span>
              </div>
            </div>
            
            <button class="btn primary large">Claim Bonus</button>
          </div>
          
          <div class="top-pick-casino">
            <img :src="game.topPick.casinoLogo" :alt="game.topPick.casino" class="casino-logo" />
            <div class="casino-rating">
              <span class="stars">★★★★★</span>
              <span class="rating">{{ game.topPick.rating }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- More Games Section -->
    <section class="section section-muted">
      <div class="section-header">
        <h2 class="section-title">More From {{ game.provider }}</h2>
      </div>
      
      <div class="related-games-grid">
        <div v-for="relatedGame in relatedGames" :key="relatedGame.title" class="related-game-card">
          <div class="related-game-image">
            <img :src="relatedGame.image" :alt="relatedGame.title" />
          </div>
          <div class="related-game-info">
            <h3>{{ relatedGame.title }}</h3>
            <p class="related-provider">{{ relatedGame.provider }}</p>
            <div class="related-meta">
              <span class="rtp">RTP: {{ relatedGame.rtp }}%</span>
              <span class="volatility">{{ relatedGame.volatility }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer" style="color:azure">
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="logo">
            <span class="logo-badge">ACE</span>
            <span class="logo-text">Play</span>
          </div>
          <p class="footer-text">
            ACEPlay is your premier source for unbiased casino reviews, exclusive bonuses, and expert gambling strategies. We help you play smarter and play safe.
          </p>
        </div>

        <div class="footer-columns">
          <div class="footer-column">
            <h4>Quick Links</h4>
            <a href="#">New Casinos</a>
            <a href="#">Casinos</a>
            <a href="#">Bonuses</a>
            <a href="#">Game Guides</a>
          </div>
          <div class="footer-column">
            <h4>Company</h4>
            <a href="#">About us</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
            <a href="#">T&Cs</a>
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
import { computed } from 'vue'

const game = computed(() => ({
  title: 'Super Ace',
  provider: 'JILI',
  image: 'https://png.pngtree.com/thumb_back/fw800/background/20230718/pngtree-a-3d-realistic-online-casino-slot-machine-with-roulette-flying-chips-image_3905105.jpg',
  rtp: 97.0,
  volatility: 'High',
  maxWin: '1500x',
  gameType: 'Video Slot',
  reelsRows: '5×3',
  betRange: '฿1 - ฿1000',
  features: [
    'Free Spins with Multipliers',
    'Wild Symbol Substitutions',
    'Scatter Symbol Bonuses',
    'Gamble Feature',
    'Progressive Jackpot'
  ],
  overview: 'Super Ace is an exciting video slot game from JILI that combines classic casino themes with modern gameplay mechanics. This high-volatility slot offers players the chance to win big with its impressive 1500x maximum multiplier and engaging bonus features.',
  overview2: 'The game features a sleek design with smooth animations and intuitive controls, making it accessible to both beginners and experienced players. With an RTP of 97%, Super Ace provides excellent value for players seeking thrilling entertainment with substantial winning potential.',
  howToPlay: [
    {
      title: 'Set Your Bet',
      description: 'Adjust your bet size using the (+) and (-) buttons. Choose from a minimum bet of ฿1 up to ฿1000 per spin.'
    },
    {
      title: 'Understand the Paylines',
      description: 'Super Ace features 25 adjustable paylines. More active paylines increase your chances of winning but also cost more per spin.'
    },
    {
      title: 'Spin the Reels',
      description: 'Click the spin button to start the game. You can also use the auto-spin feature for continuous gameplay.'
    },
    {
      title: 'Watch for Special Symbols',
      description: 'Wild symbols substitute for other symbols, while scatter symbols trigger bonus features and free spins.'
    },
    {
      title: 'Trigger Bonus Features',
      description: 'Land 3+ scatter symbols to activate free spins with multipliers. Use the gamble feature to double your wins.'
    }
  ],
  tips: [
    'Start with smaller bets to understand the game mechanics',
    'Activate all paylines for maximum winning opportunities',
    'Take advantage of free spins to boost your winnings',
    'Set a budget and stick to it for responsible gaming',
    'Try the demo version before playing with real money',
    'Activate all paylines for maximum winning opportunities',
    'Take advantage of free spins to boost your winnings',
  ],
  pros: [
    'High RTP of 97% offers excellent return potential',
    'Exciting bonus features with free spins and multipliers',
    'Sleek design and smooth gameplay experience',
    'Wide betting range suitable for all budgets',
    'Progressive jackpot adds extra excitement'
  ],
  cons: [
    'High volatility may lead to longer losing streaks',
    'Complex features might be overwhelming for beginners',
    'Maximum bet limit may not suit high rollers',
    'Bonus features trigger infrequently due to high variance'
  ],
  targetAudience: [
    {
      type: 'High Rollers',
      icon: '💰',
      description: 'Players who enjoy high-stakes gaming and the thrill of chasing big wins with substantial bankrolls.'
    },
    {
      type: 'Bonus Hunters',
      icon: '🎯',
      description: 'Strategic players who focus on maximizing value through bonus features and RTP optimization.'
    },
    {
      type: 'Experienced Players',
      icon: '🎮',
      description: 'Seasoned slot enthusiasts who appreciate complex mechanics and high-volatility gameplay.'
    }
  ],
  topPick: {
    title: 'Get 150% Welcome Bonus + 50 Free Spins',
    description: 'Sign up at our recommended casino and claim an exclusive bonus package perfect for Super Ace players.',
    bonus: '฿20,000 + 50 Spins',
    wagering: '35x',
    minDeposit: '฿300',
    casino: 'LuckyBet Casino',
    rating: '4.9',
    casinoLogo: 'https://j99jfc6l8uchv7rv.public.blob.vercel-storage.com/logo/philippines/jilino1.png'
  }
}))

const relatedGames = [
  {
    title: 'Golden Empire',
    provider: 'JILI',
    image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.39003.3.webp?version=3ss',
    rtp: 96.8,
    volatility: 'Medium'
  },
  {
    title: 'Wild Bounty Showdown',
    provider: 'JILI',
    image: 'https://download.ocms.cloud/v2/common2/PGV2/PlatformGameList.32614.3.webp?version=6',
    rtp: 96.5,
    volatility: 'High'
  },
  {
    title: 'Charge Buffalo',
    provider: 'JILI',
    image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7476.3.webp?version=18',
    rtp: 96.2,
    volatility: 'Medium'
  },
  {
    title: 'Fortune Gems',
    provider: 'JILI',
    image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7443.3.webp?version=20',
    rtp: 97.2,
    volatility: 'Low'
  }
]
</script>

<style scoped>
:root {
  --bg-gradient: radial-gradient(circle at top, #22324a 0, #071227 55%, #03050b 100%);
  --accent: #EC2513;
  --accent-soft: rgba(255, 45, 45, 0.12);
  --accent-secondary: rgb(13, 39, 81);
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

/* Layout helpers */
.section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

.section-muted {
  background: radial-gradient(circle at top, rgba(25, 44, 89, 0.5), transparent);
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
  color: white;
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
  color: #a4bae2;
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
  padding: 8px 16px;
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
  gap: 8px;
}

.btn.primary {
  background: linear-gradient(135deg, rgb(175, 34, 34), rgb(180, 73, 73));
  color: #0b1220;
  box-shadow: 0 16px 40px rgba(255, 45, 45, 0.32);
  border-color: rgba(157, 169, 188, 0.45);
  border-radius: 5px;
}

.btn.primary:hover {
  transform: translateY(2px);
  box-shadow: 0 20px 48px rgba(178, 40, 40, 0.42);
}

.btn.secondary {
  background: rgba(15, 23, 42, 0.7);
  border-color: rgb(70, 102, 153);
  border-radius: 10px;
  color: #e5e7eb;
}

.btn.secondary:hover {
  background: rgba(39, 52, 83, 0.92);
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
  padding: 12px 20px;
  font-size: 0.9rem;
}

/* Game Hero */
.game-hero {
  padding: 20px 50px;
  background: radial-gradient(circle at top, rgba(57, 84, 145, 0.574), transparent);
}

.game-hero-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.game-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  font-size: 0.86rem;
  color: rgb(238, 236, 236);
}

.game-breadcrumb a {
  color: var(--accent-secondary);
  text-decoration: none;
}

.game-breadcrumb a:hover {
  color: #8eb2df;
}

.separator {
  color: var(--text-muted);
}

.current {
  color: #e5e7eb;
}

.game-main-info {
  display:grid;
  grid-template-columns: 800px 1fr;
  gap: 40px;
  align-items: start;
}

.game-image-container {
  position: relative;
}

.game-main-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius:5px;
  box-shadow: var(--shadow-card);
}

.game-provider-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background: var(--accent);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.game-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #e5e7eb;
}

.game-meta {
  display: flex;
  gap: 24px;
  color: #9fa0a3;
  margin-bottom: 24px;
}

.meta-item {
  text-align: center;
}

.meta-label {
  display: block;
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 4px;
}

.meta-value {
  font-size: 1.2rem;
  font-weight: 700;
  color: #e5e7eb;
}

.game-features {
  margin-bottom: 32px;
}

.game-features h3 {
  font-size: 1.1rem;
  margin-bottom: 12px;
  color: #e5e7eb;
}

.game-features ul {
  list-style: none;
  padding: 0;
  color: #d9e4e9;
}

.game-features li {
  padding: 6px 0;
  padding-left: 20px;
  position: relative;
  color: var(--text-muted);
}

.game-features li::before {
  content: '✓';
  position:relative;
  left: 0;
  color: #3ad673;
}

.game-actions {
  display: flex;
  gap: 10px;
}

/* Overview Section */
.overview-content {
  display:flex;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
}

.overview-text {
  background: radial-gradient(circle at top left, rgba(113, 125, 154, 0.85), #384471);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 25px;
  box-shadow: var(--shadow-card);
}

.overview-text p {
  margin-bottom: 12px;
  line-height: 1.6;
  color: whitesmoke;
}

.overview-stats {
  display: flex;
  flex-direction:row;
  gap: 20px;
}

.stat-card {
  background: radial-gradient(circle at top left, rgba(76, 114, 175, 0.15), transparent);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 5pxs;
  padding:8px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: var(--shadow-card);
}

.stat-icon {
  font-size: 2rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-secondary);
  border-radius: 50%;
}

.stat-info h4 {
  font-size: 0,98rem;
  color: white;
  margin-bottom: 4px;
}

.stat-info p {
  font-size: 1rem;
  font-weight: 400;
  color: #e5e7eb;
}

/* How to Play */
.how-to-play {
  display: flex;
  flex-direction: row ;
  gap:20px;
}

.steps-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 1800px;
  height: 700px;
}

.step-item {
  display: flex;
  gap: 20px;
  background: radial-gradient(circle at top left, rgba(15, 23, 42, 0.85), #3f4874);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 12px;
  box-shadow: rgb(230, 213, 183);
}

.step-number {
  width: 40px;
  height: 40px;
  background: var(--accent);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
}

.step-content h3 {
  font-size: 1rem;
  margin-bottom: 8px;
  color: #f8f8f9;
}

.step-content p {
  color: rgb(194, 193, 193);
  line-height: 1.5;
}

.tips-box {
  background: radial-gradient(circle at top left, rgba(193, 209, 223, 0.15), transparent);
  border: 1px solid rgba(169, 204, 182, 0.3);
  border-radius: var(--radius-lg);
  padding: 15px;
  box-shadow: var(--shadow-card);
}

.tips-box h3 {
  font-size: 1.1rem;
  margin-bottom: 20px;
  color: #e5e7eb;
}

.tips-box ul {
  list-style: none;
  padding: 0;
  color: #e5e 7eb;
}

.tips-box li {
  padding: 8px 0;
  padding-left: 20px;
  position: relative;
  color: #a0a2a7fa;
}

.tips-box li::before {
  content: '💡';
  position: absolute;
  left: 0;
}

/* Pros & Cons */
.pros-cons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
}

.pros-card,
.cons-card {
  background: radial-gradient(circle at top left, rgba(139, 142, 148, 0.85), #3f4f96);
  border: 1px solid var(--border-subtle);
  border-radius: 6px;
  padding: 24px;
  box-shadow: var(--shadow-card);
}

.pros-card h3 {
  color: #40dd79;
  margin-bottom: 16px;
  font-size: 1.2rem;
  text-align: center;
}

.cons-card h3 {
  color: #ef4444;
  margin-bottom: 16px;
  font-size: 1.2rem;
   text-align: center;

}

.pros-card ul,
.cons-card ul {
  list-style: none;
  padding: 0;
}

.pros-card li,
.cons-card li {

  padding: 5px 0;
  position: relative;
  padding-left: 24px;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.pros-card li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #18c557;
}

.cons-card li::before {
  content: '✗';
  position: absolute;
  left: 0;
  color: #ef4444;
}

/* Target Audience */
.target-audience {
  max-width: 950px;
  margin: 0 auto;
}

.audience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.audience-card {
  background: radial-gradient(circle at top left, rgba(100, 91, 128, 0.774),#765d5d);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 15px 20px;
  text-align: center;
  box-shadow: var(--shadow-card);
  transition: transform var(--transition-med);
}

.audience-card:hover {
  transform: translateY(-4px);
}

.audience-icon {
  font-size: 3rem;
  margin-bottom: 16px;
}

.audience-card h3 {
  font-size: 1.2rem;
  margin-bottom: 12px;
  color: #e5e7eb;
}

.audience-card p {
  color: var(--text-muted);
  line-height: 1.5;
}

/* Top Pick */
.top-pick-card {
  background: linear-gradient(135deg, rgba(124, 107, 105, 0.1), rgba(136, 149, 168, 0.1));
  border: 2px solid var(--accent);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-card);
}

.top-pick-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
  padding: 10px;
}

.top-pick-badge {
  display: inline-block;
  background: var(--accent);
  color: white;
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.top-pick-info h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: #e5e7eb;
}

.top-pick-description {
  color: whitesmoke;
  margin-bottom: 15px;
  line-height: 1.5;
}

.top-pick-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 12px;
}

.feature-item {
  text-align: center;
}

.feature-label {
  display: block;
  font-size: 0.8rem;
  color: rgb(123, 120, 120);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 4px;
}

.feature-value {
  font-size: 1rem;
  font-weight: 600;
  color: #e5e7eb;
}

.top-pick-casino {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.casino-logo {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 9px;
}

.casino-rating {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.stars {
  color: #facc15;
  font-size: 1.2rem;
}

.rating {
  font-size: 0.9rem;
  color: white;
}

/* Related Games */
.related-games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 0.5fr));
  gap: 20px;
}

.related-game-card {
  background: radial-gradient(circle at top left, rgba(15, 23, 42, 0.9), #020617);
  border: 1px solid rgba(33, 47, 65, 0.9);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition: transform var(--transition-med);
  cursor: pointer;
}

.related-game-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 48px rgba(88, 104, 143, 0.95);
}

.related-game-image {
  height: 90px;
  position: relative;
}

.related-game-image img {
  width: 80%;
  height: 100%;
  object-fit: cover;
}

.related-game-info {
  padding: 12px;
}

.related-game-info h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #d3d8e2;
  margin-bottom: 2px;
}

.related-provider {
  font-size: 0.8rem;
  color: white;
  margin-bottom: 8px;
}

.related-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--text-muted);
}

.rtp {
  color: #22c55e;
}

.volatility {
  color: #f59e0b;
}

/* Footer */
.footer {
  margin-top: 32px;
  border-top: 1px solid rgba(31, 41, 55, 0.9);
  background: rgb(42, 48, 74);
  padding: 32px 20px 18px;
  color: var(--text-muted);
}

.footer-inner {
  max-width: 1120px;
  margin: 0 auto 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
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
  gap: 40px;
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
  color: rgb(131, 148, 184);
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

  .game-main-info {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .overview-content,
  .how-to-play,
  .top-pick-content {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .game-meta {
    justify-content: space-around;
  }
}

@media (max-width: 640px) {
  .section {
    padding: 40px 16px;
  }

  .game-title {
    font-size: 2rem;
  }

  .game-actions {
    flex-direction: column;
  }

  .top-pick-features {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .footer-inner {
    flex-direction: column;
  }

  .footer-columns {
    flex-direction: column;
  }
}
</style>
