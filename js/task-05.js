const textInput = document.querySelector("#name-input");
const output = document.querySelector('#name-output');

// console.log(output.textContent);

textInput.addEventListener(`input`, (event) => {
if (event.currentTarget.value === ``) {
	return output.textContent = `Anonymous`;
}
if (event)
{return output.textContent = event.currentTarget.value}
});