const checkTextInputs = (selector) => {
	const txtInputs = document.querySelectorAll(selector);

	txtInputs.forEach((item) => {
		item.addEventListener("keypress", (event) => {
			if (event.key.match(/[^а-яё 0-9]/gi)) {
				event.preventDefault();
			}
		});
	});
};

export default checkTextInputs;
