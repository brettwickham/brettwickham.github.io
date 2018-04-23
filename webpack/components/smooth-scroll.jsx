import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

const handleSmoothScroll = $element => {

	$element.addEventListener("click", event => {
		event.preventDefault();
		const href = event.currentTarget.getAttribute("href").substr(1);
		const dest = document.getElementById(href).offsetTop;

		window.scroll({
      top: dest,
      left: 0,
      behavior: 'smooth'
    });

	});
};

export default handleSmoothScroll;
