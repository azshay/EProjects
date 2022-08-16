"use strict";

const changeImage = (blockToChangeSelector) => {
	const blocksToChange = document.querySelectorAll(blockToChangeSelector);

	blocksToChange.forEach((blockToChange, i) => {
		blockToChange.style.transition = "1s";
		blockToChange.addEventListener("mouseenter", () => {
			blockToChange.style.opacity = "0";
			setTimeout(() => {
				blockToChange.firstElementChild.src = `assets/img/sizes-${i + 1}-1.png`;
				blockToChange.style.opacity = "1";
			}, 500);
		});

		blockToChange.addEventListener("mouseleave", () => {
			blockToChange.style.opacity = "0";
			setTimeout(() => {
				blockToChange.firstElementChild.src = `assets/img/sizes-${i + 1}.png`;
				blockToChange.style.opacity = "1";
			}, 500);
		});
	});
};

export default changeImage;
