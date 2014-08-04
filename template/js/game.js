var LoadingWindow = function() {

}
LoadingWindow.prototype = new dd.display.node();



LoadingWindow.prototype.initUI = function() {
	//alert("-- last -- ");
	var self = this;
	new dd.display.sprite({
		img: "res/CloseNormal.png"
	}).addTo(self).setPos(50, 50);


	var s = new dd.display.sprite({
		img: "res/CloseNormal.png"
	}).addTo(self).setPos(100, 100).setName("click");

	// self.addEventListener("mousedown", function(evt) {
	// 	dd.print("mousedown" + self.id);
	// });

	// self.addEventListener("pressmove", function(evt) {
	// 	dd.print("pressmove");
	// });

	dd.print(s.toString());

	s.on("mousedown", function(evt) {
		dd.print(" -- b");
	});

	// the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
	s.on("pressmove", function(evt) {
		dd.print("--- c");
	});


	stage.addChild(self);

	/*
	var image = "res/CloseNormal.png";
	var bitmap;
	var container = self;
	//stage.addChild(container);

	// create and populate the screen with random daisies:
	for (var i = 0; i < 100; i++) {
		bitmap = new createjs.Bitmap(image);
		container.addChild(bitmap);
		bitmap.x = canvas.width * Math.random() | 0;
		bitmap.y = canvas.height * Math.random() | 0;
		bitmap.rotation = 360 * Math.random() | 0;
		bitmap.regX = bitmap.image.width / 2 | 0;
		bitmap.regY = bitmap.image.height / 2 | 0;
		bitmap.scaleX = bitmap.scaleY = bitmap.scale = Math.random() * 0.4 + 0.6;
		bitmap.name = "bmp_" + i;
		bitmap.cursor = "pointer";

		// using "on" binds the listener to the scope of the currentTarget by default
		// in this case that means it executes in the scope of the button.
		bitmap.on("mousedown", function(evt) {
			this.parent.addChild(this);
			this.offset = {
				x: this.x - evt.stageX,
				y: this.y - evt.stageY
			};
		});

		// the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
		bitmap.on("pressmove", function(evt) {
			this.x = evt.stageX + this.offset.x;
			this.y = evt.stageY + this.offset.y;
			// indicate that the stage should be updated on the next tick:
			update = true;
		});

		bitmap.on("rollover", function(evt) {
			this.scaleX = this.scaleY = this.scale * 1.2;
			update = true;
		});

		bitmap.on("rollout", function(evt) {
			this.scaleX = this.scaleY = this.scale;
			update = true;
		});


	}
	*/
};