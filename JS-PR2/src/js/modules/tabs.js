"use strict";

const tabs = (
	tabsContentSelector,
	tabsTriggersSelector,
	activeClass,
	blockNoPortfolioSelector
) => {
	const tabsContent = document.querySelectorAll(tabsContentSelector),
		tabsTriggerMenu = document.querySelector(tabsTriggersSelector),
		tabsTriggers = document.querySelectorAll(tabsTriggersSelector + " li"),
		blockNoPortfolio = document.querySelector(blockNoPortfolioSelector);

	tabsTriggerMenu.addEventListener("click", (event) => {
		let counter = 0;
		blockNoPortfolio.style.display = "none";

		if (!event.target.classList.contains(tabsTriggersSelector)) {
			tabsTriggers.forEach((tabTrigger) => {
				tabTrigger.classList.remove(activeClass);
				if (event.target === tabTrigger) {
					tabTrigger.classList.add(activeClass);
				}
			});
		}

		tabsContent.forEach((tabContent) => {
			tabContent.style.display = "none";

			if (tabContent.classList.contains(event.target.classList[0])) {
				counter++;
				tabContent.style.display = "block";
			}
		});

		if (counter === 0) {
			blockNoPortfolio.style.display = "block";
		}
	});
};

export default tabs;
