'use strict';
var isInit = true,
	helpers = require('../../utils/widgets/helper'),
    	Animation = require('ui/animation').Animation,
	// additional requires
	viewModel = require('./homeView-view-model');

// additional functions
function pageLoaded(args) {
	var page = args.object;

	helpers.platformInit(page);
	page.bindingContext = viewModel;
	// additional pageLoaded

	if (isInit) {
		isInit = false;

		// additional pageInit
		showAllBtn = args.object.getViewById("show-all");
		buttonsContainer = args.object.getViewById("buttons");

	}
}

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
// require the plugin module
var explosion = require("nativescript-explosionfield");

function bigBang(args) {
	// call the *explode* method on the plugin passing in a view
	// on tap events in Nativescript this will be args.object.
	explosion.explode(args.object);
	console.log("bamm!");
}
exports.bigBang = bigBang;

// Animations
var showAllBtn;
var buttonsContainer;

exports.navigatedTo = function (args) {
	showAllBtn = args.object.getViewById("show-all");
	buttonsContainer = args.object.getViewById("buttons");
}

exports.fade = function (args) {
	var v = args.object;
	v.animate({
			opacity: 0,
			scale: {
				x: 2,
				y: 2
			},
			rotate: 270,
			curve: "easeIn",
			duration: 300
		})
		.then(buttonHidden);
}

exports.dash = function (args) {
	var v = args.object;
	v.animate({
			translate: {
				x: -50,
				y: 0
			},
			scale: {
				x: 0.5,
				y: 1.4
			},
			duration: 600,
			curve: "easeOut"
		}).then(() => {
			v.animate({
				translate: {
					x: 500,
					y: 0
				},
				scale: {
					x: 2,
					y: 0.3
				},
				curve: "easeIn",
				duration: 200
			})
		})
		.then(buttonHidden);
}

exports.roll = function (args) {
	var v = args.object;

	v.animate({
			translate: {
				x: 400,
				y: 0
			},
			rotate: 360,
			duration: 1500
		})
		.then(buttonHidden);

}

exports.worm = function (args) {
	var v = args.object;
	var dur = 300;
	v.animate({
			translate: {
				x: 50,
				y: 50
			},
			scale: {
				x: 2,
				y: 0.3
			},
			curve: "easeInOut",
			duration: dur
		})
		.then(() => {
			return v.animate({
				translate: {
					x: 100,
					y: 0
				},
				scale: {
					x: 1,
					y: 1
				},
				curve: "easeInOut",
				duration: dur
			})
		})
		.then(() => {
			return v.animate({
				translate: {
					x: 150,
					y: 50
				},
				scale: {
					x: 2,
					y: 0.3
				},
				curve: "easeInOut",
				duration: dur
			})
		})
		.then(() => {
			return v.animate({
				translate: {
					x: 200,
					y: 0
				},
				scale: {
					x: 1,
					y: 1
				},
				curve: "easeInOut",
				duration: dur
			})
		})
		.then(() => {
			return v.animate({
				translate: {
					x: 250,
					y: 50
				},
				scale: {
					x: 2,
					y: 0.3
				},
				curve: "easeInOut",
				duration: dur
			})
		})
		.then(() => {
			return v.animate({
				translate: {
					x: 300,
					y: 0
				},
				scale: {
					x: 1,
					y: 1
				},
				curve: "easeInOut",
				duration: dur
			})
		})
		.then(() => {
			return v.animate({
				translate: {
					x: 350,
					y: 50
				},
				scale: {
					x: 2,
					y: 0.3
				},
				curve: "easeInOut",
				duration: dur
			})
		})
		.then(() => {
			return v.animate({
				translate: {
					x: 400,
					y: 0
				},
				scale: {
					x: 1,
					y: 1
				},
				curve: "easeInOut",
				duration: dur
			})
		})
		.then(buttonHidden);
}

var hidden = 0;

function buttonHidden() {
	hidden++;
	if (hidden === 4) {
		showAllBtn.animate({
			translate: {
				x: 0,
				y: 0
			},
			curve: "easeOut"
		})

	}
}

exports.showAll = function (args) {
	console.log("show All");
	hidden = 0;
	var anims = new Array();
	for (var index = 0; index < buttonsContainer.getChildrenCount(); index++) {
		var view = buttonsContainer.getChildAt(index);
		view.opacity = 0;
		view.rotate = 0;
		view.translateX = 0;
		view.translateY = 0;
		view.scaleX = 1;
		view.scaleY = 1;

		anims.push({
			target: view,
			opacity: 1,
			scale: {
				x: 1,
				y: 1
			}
		});
	}

	new Animation(anims).play();
}

// END_CUSTOM_CODE_homeView
exports.pageLoaded = pageLoaded;