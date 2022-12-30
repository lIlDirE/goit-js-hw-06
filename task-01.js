const categories = document.querySelectorAll("li.item");
console.log("Number of categories: ", categories.length);

for(const categori of categories){
	console.log("Category: ", categori.querySelector("h2").textContent);
	console.log("Elements: ", categori.querySelectorAll("li").length);
}