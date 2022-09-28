const modal = (
	triggerSelector,
	modalTriggerSelector,
	closeTriggerSelector,
	allModalsSelector = "[data-modal]"
) => {
	const triggers = document.querySelectorAll(triggerSelector),
		modalTrigger = document.querySelector(modalTriggerSelector),
		closeTrigger = document.querySelector(closeTriggerSelector),
		modals = document.querySelectorAll(allModalsSelector);

	triggers.forEach((trigger) => {
		trigger.addEventListener("click", (e) => {
			e.preventDefault();
			modalTrigger.style.display = "block";
			document.body.style.overflow = "hidden";

			modals.forEach((modal) => {
				if (modal !== modalTrigger) {
					modal.style.display = "none";
				}
			});
		});
	});

	closeTrigger.addEventListener("click", () => {
		modalTrigger.style.display = "none";
		document.body.style.overflow = "";
	});

	modalTrigger.addEventListener("click", (e) => {
		if (e.target === modalTrigger) {
			modalTrigger.style.display = "none";
			document.body.style.overflow = "";
		}
	});
};

export default modal;
