function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
	.toString(16)
    .padStart(6, 0)}`;
}

const buttonRef = document.querySelector("button.change-color");
const textRef = document.querySelector("span.color");

const handleClick = () => {
	textRef.textContent = getRandomHexColor();
	document.querySelector("body").style.backgroundColor = getRandomHexColor();
  };

buttonRef.addEventListener("click", handleClick)