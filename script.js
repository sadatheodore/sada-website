/* ============================================
   SADA - JavaScript
   Interactions, Animations & Fun Features
   ============================================ */

// ===== SCROLL-BASED HEADER SHADOW =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===== MOBILE MENU TOGGLE =====
function toggleMenu() {
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  nav.classList.toggle('open');
  hamburger.classList.toggle('open');
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.getElementById('nav');
    const hamburger = document.getElementById('hamburger');
    nav.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

// ===== SCROLL REVEAL ANIMATION =====
const revealElements = document.querySelectorAll('.reveal, .game-card, .idea-card');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ===== SURPRISE ME BUTTON =====
const funPages = [
  '#card-unnecessary',
  '#card-fortune',
  '#card-potato',
  '#card-conspiracy',
  '#card-procrastination',
  '#card-reverse'
];

function surpriseMe() {
  const randomIndex = Math.floor(Math.random() * funPages.length);
  const target = document.querySelector(funPages[randomIndex]);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // Add a fun highlight effect
    target.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    target.style.transform = 'scale(1.05) rotate(-1deg)';
    target.style.boxShadow = '8px 8px 0 #1a1a1a';
    setTimeout(() => {
      target.style.transform = '';
      target.style.boxShadow = '';
    }, 1000);
  }
}

// ===== GIVE ME SOMETHING RANDOM =====
function giveRandom() {
  surpriseMe();
  // Add dice animation to button
  const btn = document.getElementById('btn-random');
  btn.style.animation = 'wiggle 0.5s ease';
  setTimeout(() => {
    btn.style.animation = '';
  }, 500);
}

// ===== PLAY GAME =====
const uselessFacts = [
  "A group of flamingos is called a 'flamboyance'.",
  "Honey never spoils. Archaeologists found 3000-year-old honey in Egyptian tombs that was still edible.",
  "The shortest war in history lasted 38 minutes (Britain vs Zanzibar, 1896).",
  "Bananas are berries, but strawberries aren't.",
  "A jiffy is an actual unit of time: 1/100th of a second.",
  "The dot over the letters 'i' and 'j' is called a 'tittle'.",
  "Octopuses have three hearts and blue blood.",
  "A cloud can weigh more than a million pounds."
];

const fortuneCookieMessages = [
  "You will find what you're looking for... in the last place you look. Obviously.",
  "A great adventure awaits you. Or maybe just a nap. Both are valid.",
  "The cookie you just opened questions why it exists. Do you?",
  "Your future is bright. But not LED bright, more like candle bright.",
  "Success is around the corner. Unfortunately, so is a dead end.",
  "You will meet someone interesting today. It might be your reflection.",
  "The answer you seek is within you. Along with that burrito from lunch.",
  "Life is short. Eat the dessert first. This cookie approves."
];

const conspiracyTheories = [
  "Birds aren't real — they're government surveillance drones recharged by power lines.",
  "The moon is actually a giant disco ball installed by aliens in 1969.",
  "WiFi signals are actually mind-control waves from sentient routers.",
  "Cats already rule the world. They just let us think we're in charge.",
  "Rain is just clouds crying because they watched too many sad movies.",
  "Socks disappear in the laundry because they're escaping to a sock dimension.",
  "Pigeons are actually reporters for the squirrel government."
];

const moodColors = [
  { mood: "happy", colors: ["#FFD93D", "#FF6B9D", "#5DE5D5"] },
  { mood: "chill", colors: ["#BDE0FE", "#A2D2FF", "#CDB4DB"] },
  { mood: "energetic", colors: ["#FF6B6B", "#FFA500", "#FFD93D"] },
  { mood: "dreamy", colors: ["#C084FC", "#F0ABFC", "#E8D5F5"] },
  { mood: "creative", colors: ["#5DE5D5", "#FFD93D", "#FF6B9D"] }
];

function playGame(game) {
  // Create a modal/toast notification
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    background: white;
    border: 3px solid #1a1a1a;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 6px 6px 0 #1a1a1a;
    z-index: 10000;
    max-width: 450px;
    width: 90%;
    text-align: center;
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    font-family: 'Inter', sans-serif;
  `;

  let content = '';

  switch(game) {
    case 'unnecessary':
      const actions = [
        "✨ The button did... absolutely nothing. Congratulations!",
        "🎉 You unlocked... this popup. That's it. That's the reward.",
        "🔄 The button rotated the Earth by 0.000001 degrees. You're welcome.",
        "💤 The button yawned. It's tired of being clicked.",
        "🎵 *plays imaginary music* The button is vibing right now.",
        "🌈 Somewhere, a rainbow appeared. Probably not because of this button though."
      ];
      const action = actions[Math.floor(Math.random() * actions.length)];
      content = `
        <div style="font-size: 3rem; margin-bottom: 16px;">⚙️</div>
        <h3 style="font-family: 'Fredoka', sans-serif; font-size: 1.4rem; margin-bottom: 12px;">The Unnecessary Button</h3>
        <p style="color: #555; font-size: 1.05rem; line-height: 1.6;">${action}</p>
      `;
      break;

    case 'fortune':
      const fortune = fortuneCookieMessages[Math.floor(Math.random() * fortuneCookieMessages.length)];
      content = `
        <div style="font-size: 3rem; margin-bottom: 16px;">🥠</div>
        <h3 style="font-family: 'Fredoka', sans-serif; font-size: 1.4rem; margin-bottom: 12px;">Your Existential Fortune</h3>
        <p style="color: #555; font-size: 1.05rem; line-height: 1.6; font-style: italic;">"${fortune}"</p>
      `;
      break;

    case 'potato':
      const items = ["This website", "Your productivity today", "Mondays", "Pineapple on pizza", "Your WiFi speed", "This button"];
      const item = items[Math.floor(Math.random() * items.length)];
      const rating = (Math.random() * 4 + 1).toFixed(1);
      const potatoes = '🥔'.repeat(Math.round(parseFloat(rating)));
      content = `
        <div style="font-size: 3rem; margin-bottom: 16px;">🥔</div>
        <h3 style="font-family: 'Fredoka', sans-serif; font-size: 1.4rem; margin-bottom: 12px;">Potato Rating</h3>
        <p style="color: #333; font-size: 1.1rem; font-weight: 600; margin-bottom: 8px;">"${item}"</p>
        <div style="font-size: 2rem; margin: 12px 0;">${potatoes}</div>
        <p style="color: #555; font-size: 1.05rem;">${rating} / 5.0 potatoes</p>
        <p style="color: #888; font-size: 0.85rem; margin-top: 8px;">A truly scientific measurement.</p>
      `;
      break;

    case 'conspiracy':
      const theory = conspiracyTheories[Math.floor(Math.random() * conspiracyTheories.length)];
      content = `
        <div style="font-size: 3rem; margin-bottom: 16px;">👁️</div>
        <h3 style="font-family: 'Fredoka', sans-serif; font-size: 1.4rem; margin-bottom: 12px;">CLASSIFIED THEORY</h3>
        <p style="color: #555; font-size: 1.05rem; line-height: 1.6;">${theory}</p>
        <p style="color: #888; font-size: 0.8rem; margin-top: 12px;">* This theory is 100% made up (or IS it?)</p>
      `;
      break;

    case 'procrastination':
      const place = Math.floor(Math.random() * 100) + 1;
      const times = ['2 hours', '4 hours', '8 hours', '3 days', '1 week', 'since birth'];
      const time = times[Math.floor(Math.random() * times.length)];
      content = `
        <div style="font-size: 3rem; margin-bottom: 16px;">🏆</div>
        <h3 style="font-family: 'Fredoka', sans-serif; font-size: 1.4rem; margin-bottom: 12px;">Procrastination Leaderboard</h3>
        <p style="color: #555; font-size: 1.05rem; line-height: 1.6;">You're currently in <strong>${place}th place!</strong></p>
        <p style="color: #666; font-size: 0.95rem; margin-top: 8px;">Time spent avoiding work: <strong>${time}</strong></p>
        <p style="color: #888; font-size: 0.8rem; margin-top: 12px;">Keep not working to climb the ranks! 💪</p>
      `;
      break;

    case 'reverse':
      const definitions = [
        { def: "The feeling of joy when finding money in old pants", word: "Serendipity (sort of)" },
        { def: "Pretending to be busy when the boss walks by", word: "Professionalism" },
        { def: "The art of doing absolutely nothing productively", word: "Procrastination" },
        { def: "That thing you use to scroll through memes", word: "Phone (or 'lifeline')" },
        { def: "A beverage that turns zombies into functioning adults", word: "Coffee" },
        { def: "The 5-second panic when you can't find your phone", word: "Nomophobia" }
      ];
      const pair = definitions[Math.floor(Math.random() * definitions.length)];
      content = `
        <div style="font-size: 3rem; margin-bottom: 16px;">📖</div>
        <h3 style="font-family: 'Fredoka', sans-serif; font-size: 1.4rem; margin-bottom: 12px;">Reverse Dictionary</h3>
        <p style="color: #888; font-size: 0.85rem; margin-bottom: 8px;">Definition:</p>
        <p style="color: #555; font-size: 1.05rem; line-height: 1.6; font-style: italic;">"${pair.def}"</p>
        <div style="margin-top: 16px; padding: 12px 20px; background: #f5f0e5; border-radius: 12px; border: 2px solid #1a1a1a;">
          <p style="color: #333; font-size: 1.1rem; font-weight: 600;">→ ${pair.word}</p>
        </div>
      `;
      break;

    case 'mood':
      const randomMood = moodColors[Math.floor(Math.random() * moodColors.length)];
      content = `
        <div style="font-size: 3rem; margin-bottom: 16px;">🎭</div>
        <h3 style="font-family: 'Fredoka', sans-serif; font-size: 1.4rem; margin-bottom: 12px;">Your Mood: ${randomMood.mood.charAt(0).toUpperCase() + randomMood.mood.slice(1)}</h3>
        <div style="display: flex; gap: 12px; justify-content: center; margin: 20px 0;">
          ${randomMood.colors.map(c => `<div style="width: 60px; height: 60px; background: ${c}; border-radius: 12px; border: 2px solid #1a1a1a;"></div>`).join('')}
        </div>
        <p style="color: #666; font-size: 0.9rem;">Your completely arbitrary mood palette!</p>
      `;
      break;

    case 'pixel':
      content = `
        <div style="font-size: 3rem; margin-bottom: 16px;">🖼️</div>
        <h3 style="font-family: 'Fredoka', sans-serif; font-size: 1.4rem; margin-bottom: 12px;">Mini Pixel Canvas</h3>
        <div id="pixel-canvas" style="display: grid; grid-template-columns: repeat(8, 1fr); gap: 2px; margin: 16px auto; width: fit-content;"></div>
        <p style="color: #666; font-size: 0.85rem; margin-top: 8px;">Click pixels to paint! 🎨</p>
      `;
      break;

    case 'sound':
      content = `
        <div style="font-size: 3rem; margin-bottom: 16px;">🔊</div>
        <h3 style="font-family: 'Fredoka', sans-serif; font-size: 1.4rem; margin-bottom: 12px;">Sound Sandwich</h3>
        <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin: 16px 0;">
          ${['🥁', '🎸', '🎹', '🎺', '🎻', '🪘'].map(e =>
            `<button onclick="this.style.background=this.style.background?'':'#FFD93D'" style="font-size: 1.8rem; padding: 12px; border: 2px solid #1a1a1a; border-radius: 12px; cursor: pointer; background: none; transition: all 0.2s;">${e}</button>`
          ).join('')}
        </div>
        <p style="color: #666; font-size: 0.85rem;">Tap instruments to add to your sandwich!</p>
      `;
      break;
  }

  // Close button
  content += `
    <button onclick="this.parentElement.style.opacity='0';this.parentElement.style.transform='translate(-50%,-50%) scale(0.8)';setTimeout(()=>this.parentElement.remove(),300)"
      style="margin-top: 20px; padding: 10px 28px; background: #1a1a1a; color: white; border: none; border-radius: 50px; font-family: 'Fredoka', sans-serif; font-size: 0.95rem; cursor: pointer; font-weight: 600;">
      Close ✕
    </button>
  `;

  // Overlay
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.3s ease;
  `;
  overlay.onclick = () => {
    toast.style.opacity = '0';
    toast.style.transform = 'translate(-50%, -50%) scale(0.8)';
    overlay.style.opacity = '0';
    setTimeout(() => {
      toast.remove();
      overlay.remove();
    }, 300);
  };

  toast.innerHTML = content;
  document.body.appendChild(overlay);
  document.body.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    overlay.style.opacity = '1';
    toast.style.opacity = '1';
    toast.style.transform = 'translate(-50%, -50%) scale(1)';
  });

  // Pixel canvas setup
  if (game === 'pixel') {
    setTimeout(() => {
      const canvas = document.getElementById('pixel-canvas');
      if (canvas) {
        const colors = ['#ff6b9d', '#5de5d5', '#ffd93d', '#c084fc', '#ff8c42', '#7dd87d', '#bde0fe', '#1a1a1a'];
        for (let i = 0; i < 64; i++) {
          const pixel = document.createElement('div');
          pixel.style.cssText = `
            width: 30px;
            height: 30px;
            background: #f0f0f0;
            border: 1px solid #ddd;
            border-radius: 4px;
            cursor: pointer;
            transition: background 0.15s ease;
          `;
          pixel.onclick = () => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            pixel.style.background = randomColor;
          };
          canvas.appendChild(pixel);
        }
      }
    }, 100);
  }
}

// ===== VOTE SYSTEM =====
const votes = {
  1: { count: 2847, voted: false },
  2: { count: 1923, voted: false },
  3: { count: 1456, voted: false }
};

function toggleVote(id) {
  const btn = document.getElementById(`vote-btn-${id}`);
  const countEl = document.getElementById(`vote-count-${id}`);

  if (votes[id].voted) {
    votes[id].count--;
    votes[id].voted = false;
    btn.classList.remove('voted');
  } else {
    votes[id].count++;
    votes[id].voted = true;
    btn.classList.add('voted');

    // Bounce animation
    btn.style.transform = 'scale(1.3)';
    setTimeout(() => {
      btn.style.transform = 'scale(1)';
    }, 200);
  }

  countEl.textContent = votes[id].count.toLocaleString();
}

// ===== SAY HI =====
function sayHi() {
  const btn = document.getElementById('btn-say-hi');
  const originalText = btn.innerHTML;

  btn.innerHTML = '👋 Hi right back at ya!';
  btn.style.background = '#ffd93d';

  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.style.background = '';
  }, 2000);
}

// ===== NEWSLETTER SUBSCRIBE =====
function subscribe(event) {
  event.preventDefault();
  const input = document.getElementById('newsletter-email');
  const btn = document.getElementById('btn-subscribe');
  const email = input.value;

  if (email) {
    btn.textContent = '🎉 You\'re in!';
    btn.style.background = '#7dd87d';
    input.value = '';
    input.disabled = true;
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = 'Count Me In!';
      btn.style.background = '';
      input.disabled = false;
      btn.disabled = false;
    }, 3000);
  }
}

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const offset = 80; // Header height
      const pos = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  });
});

// ===== FUN: Random hero icon rotation on page load =====
document.querySelectorAll('.hero-icon').forEach((icon, i) => {
  icon.style.animationDelay = `${-i * 1.5}s`;
});

// ===== FUN: Card hover sound effect visual =====
document.querySelectorAll('.game-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    const icon = card.querySelector('.game-card-icon');
    if (icon) {
      icon.style.transform = 'scale(1.2) rotate(10deg)';
      icon.style.transition = 'transform 0.3s ease';
    }
  });
  card.addEventListener('mouseleave', () => {
    const icon = card.querySelector('.game-card-icon');
    if (icon) {
      icon.style.transform = '';
    }
  });
});

// ===== Initialize on page load =====
window.addEventListener('DOMContentLoaded', () => {
  // Immediately show hero content (no delay)
  document.querySelector('.hero-content')?.classList.add('visible');
});

console.log('✨ Sada loaded! Welcome to the Internet\'s Toy Box!');
