var dd = dd || {};
dd.game = {};
dd.load = {};
dd.event = {};
dd.display = {};
dd.net = {};
dd.util = {};
dd.log = {};
dd.version = "1.0.0a"
dd.url = {};

var canvas = null;
var ctx = null;
var stage = null;

dd.game.main = function(canvasName, fps) {
	dd.print("----ddgame html5 game framework --- version :" + dd.version);

	document.addEventListener('click', function(e) {
		e.preventDefault()
	});

	dd.game._initGame(canvasName, fps);
	dd.game._preload();

}

dd.game._initGame = function(canvasName, fps) {
	canvas = document.getElementById(canvasName);
	ctx = canvas.getContext('2d');
	stage = new createjs.Stage(canvas);

	stage.enableMouseOver(10);
	createjs.Touch.enable(stage);

	createjs.Ticker.setFPS(fps);
	createjs.Ticker.addEventListener('tick', function() {
		stage.update();
	});
}

dd.game._preload = function() {

	dd.load.loadJS({
		jslist: ["js/dd.js",
			"js/game.js"
		],
		progress: function(f, p) {
			dd.print(f + " load success " + p);
		},
		success: function() {

			var l = new LoadingWindow().setPos(50, 50);
			l.initUI();
			// 
			//var c = new dd.display.node();

			dd.print("-- all js file load success --- ");
		}
	})
}


function startGame() {

}



dd.log.console = true;
dd.log.msg = function(msg) {
	if (dd.log.console) {
		console.log(msg);
	} else {
		// debug to page
	}
}
dd.print = dd.log.msg;


dd.url.fullpath = function(file) {
	return "" + file + "?v=1.0"
};

dd.load._cache = {};
/**
 * [loadJS description]
 * @param  {[type]} args [description]
 *  args.jslist array
 *  args.progress function
 *  args.success function
 *
 *
 *  {jslist:["a.js","b.js"],
 *  progress: function(p){},
 *  success : function(){}}
 */
dd.load.loadJS = function(args) {
	args = args || {};
	args.jslist = args.jslist || [];
	args.progress = args.progress || function(f, p) {};
	args.success = args.success || function() {};
	var loaded = 0;
	args.jslist.forEach(function(f, i) {
		var s = document.createElement('script');
		s.async = false;
		s.src = dd.url.fullpath(f);
		s.addEventListener('load', function() {
			loaded++;
			args.progress(s.src, loaded);
			if (loaded >= args.jslist.length)
				args.success();
			this.removeEventListener('load', arguments.callee, false);
		}, false);
		document.body.appendChild(s);
	});
}


/**
 * [loadJSAyns description]
 * @param  {[type]} url [description]
 * @return {[type]}     [description]
 */
dd.load.loadJSAyns = function(url) {
	var s = d.createElement('script');
	s.async = true;
	s.src = f;
	s.addEventListener('load', function() {
		loaded++;
		args.progress(loaded);
		if (loaded >= args.jslist.length)
			args.success();
		this.removeEventListener('load', arguments.callee, false);
	}, false);
	d.body.appendChild(s);
}


/**
 * [loadIMG description]
 * @param  {[type]} args [description]
 * args.imglist
 *
 * @return {[type]}      [description]
 */
dd.load.loadIMG = function(args) {

}


/**
 * [getImage description]
 * @param  {[type]} file [description]
 * @return {[type]}      [description]
 */
dd.load.getImage = function(file) {}