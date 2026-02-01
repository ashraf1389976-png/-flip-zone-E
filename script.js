// الترجمة
const langBtn = document.getElementById("langBtn");
let isArabic = false;

langBtn.onclick = () => {
  isArabic = !isArabic;

  if (isArabic) {
    document.documentElement.lang = "ar";
    document.body.style.direction = "rtl";

    document.querySelector("h1").innerHTML = "مرحباً بك في <span>FlipZone</span>";
    document.querySelector(".desc").innerText =
      "عِش المستحيل. امشِ على الأسقف وتحدى الجاذبية.";
    document.querySelector(".btn").innerText = "احجز تجربتك";

    langBtn.innerText = "EN";
  } else {
    document.documentElement.lang = "en";
    document.body.style.direction = "ltr";

    document.querySelector("h1").innerHTML = "Welcome to <span>FlipZone</span>";
    document.querySelector(".desc").innerText =
      "Experience the impossible. Walk on ceilings, defy gravity.";
    document.querySelector(".btn").innerText = "Book Your Experience";

    langBtn.innerText = "AR";
  }
};

// أنيميشن الإحصائيات
const stats = document.querySelectorAll(".stat");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.8;

  stats.forEach(stat => {
    const top = stat.getBoundingClientRect().top;
    if (top < trigger) {
      stat.classList.add("show");
    }
  });
});
