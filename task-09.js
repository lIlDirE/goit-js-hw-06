function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
	.toString(16)
    .padStart(6, 0)}`;
}

const buttonRef = document.querySelector("button.change-color");
const textRef = document.querySelector("span.color");
const bodyRef = document.querySelector("body");

const handleClick = () => {
	const randomColor = getRandomHexColor();
	textRef.textContent = randomColor;
	bodyRef.style.backgroundColor = randomColor;
  };

buttonRef.addEventListener("click", handleClick)