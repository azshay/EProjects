const checkInputText = (selector, needText) => {
	const inputs = document.querySelectorAll(selector);

	switch (needText) {
		case "numbers":
			inputs.forEach((input) => {
				input.addEventListener("input", () => {
					input.value = input.value.replace(/\D/g, "");
				});
			});

			break;
	}
};

export default checkInputText;
