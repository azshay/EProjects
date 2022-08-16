"use strict";

const calculator = () => {
	let price = 0;

	const selectSize = document.querySelector("#size"),
		selectMaterial = document.querySelector("#material"),
		selectOptions = document.querySelector("#options"),
		promo = document.querySelector(".promocode"),
		priceText = document.querySelector(".calc-price");

	selectSize.addEventListener("change", () => {
		calc();
	});

	selectMaterial.addEventListener("change", () => {
		calc();
	});

	selectOptions.addEventListener("change", () => {
		calc();
	});

	promo.addEventListener("keyup", () => {
		calc();
	});

	const calc = () => {
		price = 0;

		switch (selectSize.value) {
			case selectSize[1].value:
				price += 500;
				break;
			case selectSize[2].value:
				price += 1000;
				break;
			case selectSize[3].value:
				price += 1500;
				break;
			case selectSize[4].value:
				price += 2000;
				break;
		}

		switch (selectMaterial.value) {
			case selectMaterial[1].value:
				price += 500;
				break;
			case selectMaterial[2].value:
				price += 1000;
				break;
			case selectMaterial[3].value:
				price += 1500;
				break;
		}

		switch (selectOptions.value) {
			case selectOptions[1].value:
				price += 500;
				break;
			case selectOptions[2].value:
				price += 1000;
				break;
			case selectOptions[3].value:
				price += 1500;
				break;
		}

		if (promo.value === "IWANTPOPART") {
			price = price * 0.7;
		}

		if (
			selectSize.value !== selectSize[0].value &&
			selectMaterial.value !== selectMaterial[0].value
		) {
			priceText.textContent = price;
		} else {
			priceText.textContent =
				"Для расчета нужно выбрать размер картины и материал картины";
		}
	};
};

export default calculator;
