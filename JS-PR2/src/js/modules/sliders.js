"use strict";

const sliders = (slidesSelector, dir, prevSelector, nextSelector) => {
	let slideIndex = 0;

	const slides = document.querySelectorAll(slidesSelector);
	let currentInterval;

	slides[0].parentElement.addEventListener("mouseenter", () => {
		clearInterval(currentInterval);
	});

	slides[0].parentElement.addEventListener("mouseleave", () => {
		autoNext();
	});

	slides.forEach((slide) => {
		slide.classList.add("animated");
	});

	const reRender = (animateClass = "") => {
		slides.forEach((slide, i) => {
			if (i !== slideIndex) {
				slide.style.display = "none";
				if (animateClass !== "") {
					slide.classList.remove(animateClass);
				}
			} else {
				if (animateClass !== "") {
					slide.classList.add(animateClass);
				}
				slide.style.display = "block";
			}
		});
	};

	const prevSlide = () => {
		if (slideIndex === 0) {
			slideIndex = slides.length - 1;
		} else {
			slideIndex -= 1;
		}

		reRender("fadeInLeft");
	};

	const nextSlide = () => {
		if (slideIndex === slides.length - 1) {
			slideIndex = 0;
		} else {
			slideIndex += 1;
		}

		if (dir === "vertical") {
			reRender("fadeInDown");
		} else {
			reRender("fadeInRight");
		}
	};

	reRender();

	if (dir !== "vertical") {
		const prev = document.querySelector(prevSelector),
			next = document.querySelector(nextSelector);

		prev.addEventListener("click", () => {
			prevSlide();
		});

		next.addEventListener("click", () => {
			nextSlide();
		});
	}

	const autoNext = () => {
		currentInterval = setInterval(() => {
			nextSlide();
		}, 10000);
	};

	autoNext();
};

export default sliders;
