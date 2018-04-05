sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("generated.app.controller.Login", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf generated.app.view.Login
		 */
		//	onInit: function() {
		//
		//	},
		//=================================================================
		//Srini code for login validation
		//=================================================================
		_onButtonPress: function() {
			//=================================================================
			//to fetch value of input field bsed on it's ID
			//=================================================================
			var uname = this.byId("sap_Responsive_Page_0-content-sap_m_Input-1479722991732").valueOf()._lastValue;
			var upwd = this.byId("sap_Responsive_Page_0-content-sap_m_Input-1479723128903").valueOf()._lastValue;
			//=================================================================
			//validation of fields 
			//=================================================================
			if (uname == 1000 && upwd == "gss") {
				//=================================================================
				//navigation on successful validation
				//=================================================================
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("Customer",{
					"ID": "122"
				});
			} else {
				//=================================================================
				//Alert message incase of unsuccessful validation
				//=================================================================
				var dyn_msg = "Invalid UserID or Password!";
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.error(dyn_msg, {
					title: "Error", // default
					onClose: null, // default
					styleClass: " ", // default
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
			}
		},
		
		appinfo: function(oEvent){
				if (!this._oPopover2) {
				this._oPopover2 = sap.ui.xmlfragment("navCust", "generated.app.AppDetails", this);
				this.getView().addDependent(this._oPopover2);
			}
			//=================================================================
			// delay because addDependent will do a async rerendering and the popover will immediately close without it
			//=================================================================
			var oButton1 = oEvent.getSource();
			jQuery.sap.delayedCall(0, this, function() {
				this._oPopover2.openBy(oButton1);
			});
		}
		//=================================================================
		//Srini code ends
		//=================================================================
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf generated.app.view.Login
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf generated.app.view.Login
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf generated.app.view.Login
		 */
		//	onExit: function() {
		//
		//	}

	});

});