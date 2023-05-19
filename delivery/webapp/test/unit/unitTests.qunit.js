/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapmonfiori/delivery/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
