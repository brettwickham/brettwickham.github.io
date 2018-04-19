const handleSmoothScroll = $element => {
	if ($element.length) {
		return false;
	}

	$element.addEventListener("click", event => {
		event.preventDefault();
		const href = event.currentTarget.getAttribute("href").substr(1);
		const $destination = document.getElementById(href);

		window.scroll({
		  top: ($destination.offsetTop - 15), 
		  left: 0, 
		  behavior: "smooth"
		});
	});
};

export default handleSmoothScroll;