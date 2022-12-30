const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.createElement("ul");
const arr = [];

for(const ingredient of ingredients){
	let li = document.createElement("li");
	li.classList.add("item");
	li.textContent = ingredient;
	arr.push(li);
}

document.body.append(...arr);