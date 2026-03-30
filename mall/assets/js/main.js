// Mock Data
const categories = [
  { icon: '👗', name: '女装', color: '#ffe4e6' },
  { icon: '👔', name: '男装', color: '#e0f2fe' },
  { icon: '👟', name: '鞋靴', color: '#fef3c7' },
  { icon: '👜', name: '箱包', color: '#fce7f3' },
  { icon: '💄', name: '美妆', color: '#fecdd3' },
  { icon: '📱', name: '数码', color: '#dbeafe' },
  { icon: '🍎', name: '食品', color: '#d1fae5' },
  { icon: '🏠', name: '家居', color: '#fef9c3' },
  { icon: '📚', name: '图书', color: '#e5e7eb' },
  { icon: '🌿', name: '生鲜', color: '#d1fae5' },
];

const flashProducts = [
  { id: 1, name: '运动休闲鞋', price: 129, oldPrice: 299, img: 'https://picsum.photos/200/200?random=10' },
  { id: 2, name: '简约双肩包', price: 89, oldPrice: 199, img: 'https://picsum.photos/200/200?random=11' },
  { id: 3, name: '无线蓝牙耳机', price: 199, oldPrice: 399, img: 'https://picsum.photos/200/200?random=12' },
  { id: 4, name: '护肤套装', price: 89, oldPrice: 258, img: 'https://picsum.photos/200/200?random=13' },
  { id: 5, name: '纯棉T恤', price: 49, oldPrice: 129, img: 'https://picsum.photos/200/200?random=14' },
];

const recommendedProducts = [
  { id: 6, name: '韩版修身夹克男秋季新款商务休闲外套', price: 258, oldPrice: 599, img: 'https://picsum.photos/400/400?random=20' },
  { id: 7, name: '日系复古工装裤男宽松直筒多口袋长裤', price: 168, oldPrice: 388, img: 'https://picsum.photos/400/400?random=21' },
  { id: 8, name: '女士轻奢手提包大容量通勤单肩包', price: 399, oldPrice: 899, img: 'https://picsum.photos/400/400?random=22' },
  { id: 9, name: '智能运动手表心率血压血氧监测', price: 299, oldPrice: 699, img: 'https://picsum.photos/400/400?random=23' },
  { id: 10, name: '保湿修护面膜贴20片淡化细纹提亮肤色', price: 69, oldPrice: 199, img: 'https://picsum.photos/400/400?random=24' },
  { id: 11, name: '北欧轻奢台灯简约现代书房卧室床头灯', price: 189, oldPrice: 459, img: 'https://picsum.photos/400/400?random=25' },
  { id: 12, name: '进口混合坚果礼盒每日坚果年货送礼', price: 98, oldPrice: 238, img: 'https://picsum.photos/400/400?random=26' },
  { id: 13, name: '折叠静音风扇台夹两用USB供电办公桌扇', price: 79, oldPrice: 159, img: 'https://picsum.photos/400/400?random=27' },
];

// Render Categories
const categoriesEl = document.getElementById('categories');
if (categoriesEl) {
  categories.forEach(cat => {
    categoriesEl.innerHTML += `
      <a href="#" class="category-item">
        <div class="category-icon" style="background:${cat.color}">${cat.icon}</div>
        <span>${cat.name}</span>
      </a>
    `;
  });
}

// Render Flash Products
const flashEl = document.getElementById('flashProducts');
if (flashEl) {
  flashProducts.forEach(p => {
    flashEl.innerHTML += `
      <a href="#" class="flash-product">
        <div class="flash-product-img"><img src="${p.img}" alt="${p.name}"></div>
        <div class="flash-price">¥${p.price}<span class="old">¥${p.oldPrice}</span></div>
      </a>
    `;
  });
}

// Render Product Grid
const gridEl = document.getElementById('productGrid');
if (gridEl) {
  recommendedProducts.forEach(p => {
    gridEl.innerHTML += `
      <a href="#" class="product-card">
        <div class="product-img"><img src="${p.img}" alt="${p.name}"></div>
        <div class="product-info">
          <div class="product-name">${p.name}</div>
          <div class="product-price">¥${p.price}<span class="old">¥${p.oldPrice}</span></div>
        </div>
      </a>
    `;
  });
}

// Countdown Timer
let countdown = 2 * 3600 + 13 * 60 + 45; // seconds
function updateCountdown() {
  const h = Math.floor(countdown / 3600);
  const m = Math.floor((countdown % 3600) / 60);
  const s = countdown % 60;
  const hourEl = document.getElementById('hour');
  const minEl = document.getElementById('min');
  const secEl = document.getElementById('sec');
  if (hourEl) hourEl.textContent = String(h).padStart(2, '0');
  if (minEl) minEl.textContent = String(m).padStart(2, '0');
  if (secEl) secEl.textContent = String(s).padStart(2, '0');
  if (countdown > 0) countdown--;
}
setInterval(updateCountdown, 1000);

// Banner Auto-scroll
const bannerImg = document.getElementById('bannerImg');
if (bannerImg) {
  const banners = [
    'https://picsum.photos/800/300?random=1',
    'https://picsum.photos/800/300?random=2',
    'https://picsum.photos/800/300?random=3',
    'https://picsum.photos/800/300?random=4',
  ];
  let currentBanner = 0;
  const dots = document.querySelectorAll('.banner-dots span');
  setInterval(() => {
    currentBanner = (currentBanner + 1) % banners.length;
    bannerImg.src = banners[currentBanner];
    dots.forEach((d, i) => d.classList.toggle('active', i === currentBanner));
  }, 3000);
}
