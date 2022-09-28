const timer = (lastDate) => {
	const days = document.querySelector("#days"),
		hours = document.querySelector("#hours"),
		minutes = document.querySelector("#minutes"),
		seconds = document.querySelector("#seconds");

	let currentDate = new Date();
	let deadline = new Date(lastDate);
	let dateDiff = deadline.getTime() - currentDate.getTime();

	const changeTime = () => {
		dateDiff -= 1000;
		if (dateDiff > 0) {
			days.textContent = parseInt(dateDiff / (1000 * 3600 * 24));
			hours.textContent = parseInt(dateDiff / (1000 * 3600)) % 24;
			minutes.textContent = parseInt(dateDiff / (1000 * 60)) % 60;
			seconds.textContent = parseInt(dateDiff / 1000) % 60;
			checkNull(days);
			checkNull(hours);
			checkNull(minutes);
			checkNull(seconds);
		} else {
			days.textContent = "00";
			hours.textContent = "00";
			minutes.textContent = "00";
			seconds.textContent = "00";
			clearInterval(interval);
		}
	};

	const checkNull = (string) => {
		if (parseInt(string.textContent) < 10) {
			string.textContent = "0" + string.textContent;
		}
	};

	changeTime();

	console.log(dateDiff);
	const interval = setInterval(changeTime, 1000);
};

export default timer;
