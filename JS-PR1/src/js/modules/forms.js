const forms = (state) => {
	const form = document.querySelectorAll("form"),
		inputs = document.querySelectorAll("input");

	const message = {
		loading: "Загрузка...",
		success: "Мы скоро с вами свяжемся!",
		failure: "Что-то пошло не так, попробуйте немного позже",
	};

	const postData = async (url, data) => {
		let res = await fetch(url, {
			method: "POST",
			body: data,
		});

		return await res.text();
	};

	const clearInputs = () => {
		inputs.forEach((item) => {
			item.value = "";
		});
	};

	form.forEach((item) => {
		item.addEventListener("submit", (e) => {
			e.preventDefault();

			let statusMessage = document.createElement("div");
			statusMessage.classList.add("form-status");
			statusMessage.textContent = message.loading;
			item.parentNode.appendChild(statusMessage);
			item.style.display = "none";

			const formData = new FormData(item);

			if (item.getAttribute("data-calc") === "end") {
				for (let key in state) {
					formData.append(key, state[key]);
				}
			}

			postData("assets/server.php", formData)
				.then((res) => {
					console.log(res);
					statusMessage.textContent = message.success;
				})
				.catch(() => {
					statusMessage.textContent = message.failure;
				})
				.finally(() => {
					clearInputs();
					setTimeout(() => {
						statusMessage.remove();
						item.style.display = "block";
					}, 5000);
				});
		});
	});
};

export default forms;
