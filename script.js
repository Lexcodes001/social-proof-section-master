const scrollElements = document.querySelectorAll(".js-scroll"),
      ratingBox = document.querySelectorAll(".rating-box"),
      reviewBox = document.querySelectorAll(".review-box");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

if (window.innerWidth > 968) {
  ratingBox[1].className = 'rating-box js-scroll slide-in-right-one';
  ratingBox[2].className = 'rating-box js-scroll slide-in-right-two';
  reviewBox[1].className = 'review-box js-scroll fade-in-bottom-one';
  reviewBox[2].className = 'review-box js-scroll fade-in-bottom-two';
  handleScrollAnimation();
} else {
  ratingBox[1].className = 'rating-box js-scroll slide-in-right';
  ratingBox[2].className = 'rating-box js-scroll slide-in-right';

  reviewBox[1].className = 'review-box js-scroll fade-in-bottom';
  reviewBox[2].className = 'review-box js-scroll fade-in-bottom';
}