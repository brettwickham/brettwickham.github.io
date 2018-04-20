
// From: https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/

function smoothScroll(destination, duration = 1000, easing = "easeInOut", callback) {
  const easings = {
    linear(t) {
      return t;
    },
    easeIn(t) {
      return t * t;
    },
    easeOut(t) {
      return t * (2 - t);
    },
    easeInOut(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
  };

  const start = window.pageYOffset;
  const startTime = "now" in window.performance ? performance.now() : new Date().getTime();

  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ("requestAnimationFrame" in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }

  function scroll() {
    const now = "now" in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}


const handleSmoothScroll = $element => {

	$element.addEventListener("click", event => {
		event.preventDefault();
		const href = event.currentTarget.getAttribute("href").substr(1);
		const dest = document.getElementById(href).offsetTop;

		smoothScroll(dest);

	});
};

export default handleSmoothScroll;
