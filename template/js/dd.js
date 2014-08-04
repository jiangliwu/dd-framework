var dd = dd || {};



dd.util.extend = function(destination) {
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

(function() {
	dd.display.node = function() {
		dd.util.extend(this);
		createjs.Container.call(this);
	}
	dd.display.node.prototype = new createjs.Container();

	dd.display.sprite = function(args) {
		dd.util.extend(this);
		createjs.Bitmap.call(this, args.img);
	}
	dd.display.sprite.prototype = new createjs.Bitmap()
})();



(function() {
	/**
	 *
	 * @param  {[type]} args [description]
	 *
	 * args.img
	 * args.callback function
	 * @return {[type]}      [description]
	 */
	var p = dd.display.button;

	p = function(args) {
		dd.util.extend(this);
		createjs.Bitmap.call(this, args.img)
		this.initArgs(args);
	}
	p.prototype = new createjs.Bitmap();
	p.prototype.initArgs = function(args) {
		this.args = args || {};
		this.args.callback = args.callback || function() {};
		args.txt && this.initTxt(args.txt);
	};

	p.prototype.init = function() {
		var self = this;
		this.on("mousedown", function(evt) {
			this.parent.addChild(this);
			this.offset = {
				x: this.x - evt.stageX,
				y: this.y - evt.stageY
			};
		});

	},

	p.prototype.initTxt = function() {

	}



})();



dd.display.text = {};