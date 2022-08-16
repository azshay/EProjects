"use strict";

import modal from "./modules/modals";
import showStyles from "./modules/showStyles";
import calculator from "./modules/calculator";
import tabs from "./modules/tabs";
import changeImage from "./modules/changeImage";
import accordion from "./modules/accordion";
import sliders from "./modules/sliders";

window.addEventListener("DOMContentLoaded", () => {
	modal();
	showStyles(
		".button-styles",
		["col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1"],
		".styles-2",
		["hidden-lg", "hidden-md", "hidden-sm", "hidden-xs"]
	);
	calculator();
	tabs(".portfolio-block", ".portfolio-menu", "active", ".portfolio-no");
	changeImage(".sizes-block");
	accordion(
		"ui-accordion-header-active",
		"ui-accordion-content-active",
		".accordion-heading",
		".accordion-block"
	);
	sliders(
		".feedback-slider-item",
		"horizontal",
		".main-prev-btn",
		".main-next-btn"
	);
	sliders(".main-slider-item", "vertical");
});
