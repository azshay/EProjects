const tabs = (triggersSelector, contentSelector, activeClass = "active") => {
	const triggers = document.querySelectorAll(triggersSelector),
		content = document.querySelectorAll(contentSelector);

	triggers.forEach((trigger, i) => {
		trigger.addEventListener("click", () => {
			let newTriggers = triggers;
			if (trigger.firstElementChild.getAttribute("data-dec-tab")) {
				newTriggers = document.querySelectorAll("[data-dec-tab]");
			}

			newTriggers.forEach((activeTrigger) => {
				if (activeTrigger === trigger || activeTrigger === trigger.firstElementChild) {
					activeTrigger.classList.add(activeClass);
				} else {
					activeTrigger.classList.remove(activeClass);
				}
			});

			content.forEach((item, j) => {
				if (i != j) {
					item.style.display = "none";
				} else {
					item.style.display = "block";
				}
			});
		});
	});
};

export default tabs;
