const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.createElement("ul");

for(const ingredient of ingredients){
	let li = document.createElement("li");
	li.classList.add("item");
	li.textContent = ingredient;
	document.querySelector('#ingredients').append(li);
}

document.body.append(list);