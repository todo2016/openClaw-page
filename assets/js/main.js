// 页面加载完成后的交互动画
document.addEventListener('DOMContentLoaded', () => {
  // Agent 卡片入场动画
  const cards = document.querySelectorAll('.agent-card');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${index * 0.1}s`;
          entry.target.classList.add('fade-in');
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => observer.observe(card));

  // 添加 fade-in 样式
  const style = document.createElement('style');
  style.textContent = `
    .agent-card {
      opacity: 0;
      transform: translateY(20px);
    }
    .agent-card.fade-in {
      animation: fadeInUp 0.5s ease forwards;
    }
    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
});
