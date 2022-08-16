"use strict";

const modal = () => {
	// Специфичный код!

	let needModal = true;

	// Специфичный код!

	const bindModal = (
		modalTriggersSelector,
		modalWindowSelector,
		closeTriggerSelector
	) => {
		const modalTriggers = document.querySelectorAll(modalTriggersSelector),
			modalWindow = document.querySelector(modalWindowSelector),
			closeTrigger = document.querySelector(
				modalWindowSelector + " " + closeTriggerSelector
			);

		modalWindow.classList.add("animated", "fadeIn");
		modalTriggers.forEach((modalTrigger) => {
			modalTrigger.addEventListener("click", () => {
				modalWindow.style.display = "block";
				document.body.style.overflow = "hidden";

				// Удалить, если код будет переиспользоваться!

				needModal = false;
				if (modalTriggersSelector === ".fixed-gift") {
					document.querySelector(".fixed-gift").remove();
				}

				// Специфичный код!
			});
		});

		closeTrigger.addEventListener("click", () => {
			modalWindow.style.display = "none";
			document.body.style.overflow = "";
		});

		modalWindow.addEventListener("click", (event) => {
			if (event.target.classList.contains(modalWindowSelector.slice(1))) {
				modalWindow.style.display = "none";
				document.body.style.overflow = "";
			}
		});

		// Специфичный код! button-cons должна быть первой!

		setTimeout(() => {
			if (needModal) {
				modalWindow.style.display = "block";
				document.body.style.overflow = "hidden";
				needModal = false;
			}
		}, 60000);

		// Специфичный код!
	};

	function openByScroll(selector) {
		window.addEventListener("scroll", () => {
			if (
				needModal &&
				window.scrollY + document.documentElement.clientHeight >=
					document.documentElement.scrollHeight
			) {
				document.querySelector(selector).click();
			}
		});
	}

	bindModal(".button-consultation", ".popup-consultation", ".popup-close");
	bindModal(".button-design", ".popup-design", ".popup-close");
	bindModal(".fixed-gift", ".popup-gift", ".popup-close");
	openByScroll(".fixed-gift");
};

export default modal;
