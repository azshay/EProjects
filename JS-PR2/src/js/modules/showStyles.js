"use strict";

const showStyles = (
	triggerSelector,
	newClassListArray,
	hiddenElementsTrigger,
	hiddenElementsClassesArray
) => {
	const trigger = document.querySelector(triggerSelector),
		hiddenElements = document.querySelectorAll(hiddenElementsTrigger);

	trigger.addEventListener("click", () => {
		hiddenElements.forEach((element) => {
			for (let i = 0; i < hiddenElementsClassesArray.length; i++) {
				element.classList.remove(hiddenElementsClassesArray[i]);
			}

			for (let i = 0; i < newClassListArray.length; i++) {
				element.classList.add(newClassListArray[i]);
			}
		});

		trigger.remove();
	});
};

export default showStyles;
