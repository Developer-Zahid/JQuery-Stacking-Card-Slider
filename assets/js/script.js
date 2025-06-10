$(function () {
	const $cardsParent = $('[data-slider="list"]');
	const $cards = $('[data-slider="item"]');
	const animationDuration = Number($cardsParent.data("speed")) || 500;
	const rawAutoplaySpeed = Number($cardsParent.data("autoplay-speed")) || 2000;
	const autoplaySpeed = Math.max(rawAutoplaySpeed, animationDuration);
	const autoplay = $cardsParent.data("autoplay") === true || $cardsParent.data("autoplay") === "true";
	let isAnimating = false;
	let autoplayInterval;

	$cardsParent.css({
		"--_items-length": $cards.length,
		"--_animation-duration": `${animationDuration}ms`,
	});

	const updateCardPositions = () => {
		const $cards = $('[data-slider="item"]');
		const count = $cards.length;
		$cards.each((index, el) => {
			$(el).css("--_position-index", (count - 1 - index) * -1);
		});
	};

	const animateCard = ($el) => {
		if (isAnimating) return;
		isAnimating = true;

		$el.addClass("active");

		setTimeout(() => {
			$el.removeClass("active").prependTo($cardsParent);
			updateCardPositions();
			isAnimating = false;
		}, animationDuration);
	};

	updateCardPositions();

	$cards.on("click", function () {
		animateCard($(this));
	});

	const startAutoplay = () => {
		if (!autoplay) return;
		autoplayInterval = setInterval(() => {
			const $lastCard = $('[data-slider="item"]').last();
			animateCard($lastCard);
		}, autoplaySpeed);
	};

	const stopAutoplay = () => {
		clearInterval(autoplayInterval);
	};

	if (autoplay) {
		startAutoplay();
		$cardsParent.on("mouseenter touchstart", stopAutoplay);
		$cardsParent.on("mouseleave touchend touchcancel", startAutoplay);
	}
});