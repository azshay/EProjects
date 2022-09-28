const changeModalState = (state) => {
	const windowForm = document.querySelectorAll(".balcon_icons_img"),
		windowWidth = document.querySelectorAll("#width"),
		windowHeight = document.querySelectorAll("#height"),
		windowType = document.querySelectorAll("#view_type"),
		windowProfile = document.querySelectorAll(".checkbox");

	state.form = 0;
	state.width = 0;
	state.height = 0;
	state.type = "tree";
	state.profile = "";

	const createData = (event, element, property) => {
		element.forEach((item, i) => {
			item.addEventListener(event, (e) => {
				switch (event) {
					case "click":
						state[property] = i;
						break;
					case "input":
						state[property] = item.value;
						break;
					case "change":
						if (item.classList.contains("checkbox")) {
							i === 0 ? (state[property] = "Холодное") : (state[property] = "Теплое");
							element.forEach((elem, j) => {
								if (i !== j) {
									elem.checked = false;
								}
							});
						} else {
							state[property] = item.value;
						}
						break;
				}
			});
		});
	};

	createData("click", windowForm, "form");
	createData("input", windowWidth, "width");
	createData("input", windowHeight, "height");
	createData("change", windowType, "type");
	createData("change", windowProfile, "profile");
};

export default changeModalState;
