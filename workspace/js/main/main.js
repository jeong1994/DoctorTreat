//1. 버튼
const upBtn = document.getElementById("main-up");
const appearBtn = document.getElementById("main-scroll-book");

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  
  if (scrollTop > 100) {
  appearBtn.style.display = "flex"; // 버튼을 표시
  } else {
  appearBtn.style.display = "none"; // 버튼을 숨김
  }
  });
upBtn.addEventListener("click", () => {
  window.scrollTo(0, 0); 
});

// 2. 슬라이드
var swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 3000, // 3초마다 자동으로 넘어감
    disableOnInteraction: false,
  },
});