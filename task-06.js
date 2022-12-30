const inputEl = document.querySelector("input#validation-input");

inputEl.addEventListener('blur', onInputBlur);

function setStatus(event) {
	let temp = inputEl.classList;
	inputEl.classList.remove(...temp);
	inputEl.classList.add(event);
  }

function onInputBlur(event){
	if (event.currentTarget.value.length === Number(inputEl.dataset.length)){
		setStatus('valid');
	} else {
		setStatus('invalid');
	}
}
