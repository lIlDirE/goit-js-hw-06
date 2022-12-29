let counterValue = 0;

const counterPlugin = function ({
	rootSelector,
	initialValue = 0,
	step=1,
	} = {}) {
	counterValue = initialValue;
	this._step = step;
	this._refs = this._getRefs(rootSelector);
	this._bindEvents();
		
};

counterPlugin.prototype._getRefs = function (rootSelector){
	const refs = {};
	refs.container = document.querySelector(rootSelector);
	refs.incrementBtn = document.querySelector('[data-action="increment"]');
	refs.decrementBtn = document.querySelector('[data-action="decrement"]');
	refs.value = refs.container.querySelector('[id="value"]');
	return refs;
}; 

counterPlugin.prototype._bindEvents = function () {
	this._refs.incrementBtn.addEventListener('click', () => {
		this.increment();
	});

	this._refs.decrementBtn.addEventListener('click', () => {
		this.decrement();
	});
}

counterPlugin.prototype.updateValueUI = function () {
	this._refs.value.textContent = counterValue;
}

counterPlugin.prototype.increment = function() {
	counterValue += this._step;
	this.updateValueUI();
	
	console.log(counterValue);
};

counterPlugin.prototype.decrement = function() {
	counterValue -= this._step;
	this.updateValueUI();
	console.log(counterValue);	
};

const counterDiv = new counterPlugin({rootSelector: '#counterDiv'});
// console.log('counterDiv', counterDiv);


