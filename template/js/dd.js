var dd = dd || {};



dd.util.extend = function(destination, source) {

	destination.createjsTarget = source;
	for (var property in source) {
		destination[property] = source[property];
	}

	destination.setName = function(name) {
		destination.name = name;
		return destination;
	}

	destination.setPos = function(x, y) {
		destination.x = x;
		destination.y = y;
		return destination;
	}

	destination.addTo = function(node) {
		node.addChild(destination);
		return destination;
	}

	destination.remove = function() {
		destination.parent.removeChild(destination);
		return destination;
	}

	return destination;
}

dd.display.node = Base.extend({
	constructor: function() {
		this.base();
		dd.util.extend(this, new createjs.Container());
	}
});


dd.display.shape = {};

dd.display.sprite = Base.extend({
	constructor: function(args) {
		this.base();
		dd.util.extend(this, new createjs.Bitmap(args.img));
	}
});


dd.display.text = {};