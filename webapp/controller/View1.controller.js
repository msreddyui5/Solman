sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/m/MessageToast'
], function(Controller,MessageToast) {
	"use strict";

	var PageController = Controller.extend("com.sapSolman.controller.View1", {
		pressOnTileOne : function(evt) {
			MessageToast.show("The generic tile one pressed.");
		},
		pressOnTileTwo : function(evt) {
			MessageToast.show("The generic tile two pressed.");
		}
		
	

	});
		return PageController;
});