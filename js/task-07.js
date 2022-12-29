const fontEl = document.getElementById("text");

document.getElementById("font-size-control").addEventListener("change", function() {
	fontEl.style.fontSize = this.value+'px';
  });