"use strict";

const accordion = (
	headingActive,
	blockActive,
	headingSelector,
	blockSelector
) => {
	const headings = document.querySelectorAll(headingSelector),
		blocks = document.querySelectorAll(blockSelector);

	blocks.forEach((item) => {
		item.style.display = "none";
	});

	headings.forEach((heading) => {
		heading.addEventListener("click", () => {
			if (heading.classList.contains(headingActive)) {
				heading.classList.remove(headingActive);
				heading.nextElementSibling.classList.remove(blockActive);
				heading.nextElementSibling.style.display = "none";
			} else {
				heading.classList.add(headingActive);
				heading.nextElementSibling.style.display = "block";
				heading.style.marginBottom = "50px";
				heading.style.cursor = "pointer";
				heading.nextElementSibling.classList.add(blockActive);
			}
		});
	});
};

export default accordion;
