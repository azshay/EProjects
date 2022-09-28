"use strict";

import modals from "./modules/modals";
import forms from "./modules/forms";
import checkPhone from "./modules/checkPhone";
import tabs from "./modules/tabs";
import checkInputText from "./modules/checkInputText";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";

window.addEventListener("DOMContentLoaded", () => {
	let modalState = {};

	modals(
		".popup_engineer_btn",
		".popup_engineer",
		".popup_engineer .popup_close"
	);
	modals(".phone_link", ".popup", ".popup .popup_close");
	modals(".glazing_price_btn", ".popup_calc", ".popup_calc_close");
	modals(
		".popup_calc .popup_calc_button",
		".popup_calc_profile",
		".popup_calc_profile_close"
	);

	modals(
		".popup_calc_profile_button",
		".popup_calc_end",
		".popup_calc_end_close"
	);
	forms(modalState);
	checkPhone('[name="user_phone"]');
	tabs(".glazing_block", ".glazing_content");
	tabs(".balcon_icons_img", ".big_img img", "do_image_more");
	tabs(".decoration_item", ".decoration_content > div > div", "after_click");
	checkInputText(".popup_calc input", "numbers");
	changeModalState(modalState);
	timer("2022-09-23 11:0");
});
