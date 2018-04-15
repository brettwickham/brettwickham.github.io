const heroHandleScroll = ($hero) => {
  const $heroLeft = $hero.querySelectorAll(".hero-left")[0];
  let position = ($hero.offsetHeight + $hero.offsetTop);
  let scrollY = null;
  let percent = null;

  setTimeout(() => {
    $hero.classList.add("in");
  }, 500);

  window.addEventListener("resize", (event) => {
    position = ($hero.offsetHeight + $hero.offsetTop);
  });

  window.addEventListener("scroll", (event) => {
    $hero.classList.add("scrolling");
    scrollY = window.scrollY;

    if (scrollY && scrollY <= position) {
      percent = ((position - scrollY) / position * 50 - 100);
      console.log(percent);
      $heroLeft.style.setProperty("transform", "translateX(" + percent + "%)");
    }
    else {
      $heroLeft.style.setProperty("transform", "translateX(-50%)");
    }
  });
};

export default heroHandleScroll;