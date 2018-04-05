var oView;
var array = [];
var Last10 = [];
var ContactPerson = [];
var OrderTracking = [];
var SalesDocumentSearch = [];
var Deliveries = [];
var openQuotations = [];
var BillingDocument = [];
var OpenBillingDocuments = [];
var SalesDocBlockedforBilling = [];
var Address = [];
var CustomerId;
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History"
], function(Controller, JSONModel, History) {
	"use strict";

	return Controller.extend("generated.app.controller.Customer", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf generated.app.view.Login
		 */
		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("Customer").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
			//==============================
			//Data for Customer Details functionality
			//==============================
			//*************************************************************************************
			//********* SABARI - 02/02/2017  - CODE BEGIN *****************************************
			//*************************************************************************************
			oView = this.getView();
			// this.getView().addEventDelegate({
				// onBeforeShow: function() {
					var oModel = new sap.ui.model.odata.ODataModel("/p1942219772trial/demoeih/");
					oView.setModel(oModel);
				// }
			// });
		},

		getcolumn: function(oEvent) {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("navCust", "generated.app.Dialog", this);
				this._oDialog.setModel(this.getView().getModel());
			}

			// Multi-select if required
			var bMultiSelect = !!oEvent.getSource().data("multi");
			this._oDialog.setMultiSelect(bMultiSelect);

			// Remember selections if required
			var bRemember = !!oEvent.getSource().data("remember");
			this._oDialog.setRememberSelections(bRemember);

			// clear the old search filter
			this._oDialog.getBinding("items").filter([]);

			// toggle compact style
			jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this._oDialog);
			this._oDialog.open();
		},

		navigate: function(oEvent) {
			var event = oEvent.oSource.oBindingContexts.undefined.sPath;
			var array1 = event.split("'");
			CustomerId = array1[1];
			var oBindingContext = this.getView().getBindingContext();
			this.doNavigate("14806681306277823_S0", oBindingContext);
		},

		//========================
		//Search Option for Table
		//========================
		filterGlobally: function(oEvent) {
			var sQuery = oEvent ? oEvent.getParameter("query") : null;

			// add filter for search
			var filters = [];
			if (sQuery) {
				filters = [new sap.ui.model.Filter([new sap.ui.model.Filter("Kunnr", sap.ui.model.FilterOperator.Contains, sQuery)])];
			}

			// update list binding
			var list = this.getView().byId("CustomerTable");
			var binding = list.getBinding("rows");
			binding.filter(filters);
		},

		handleClose: function(oEvent) {
			var aContexts = oEvent.getParameter("selectedContexts");
			if (aContexts.length) {
				//MessageToast.show("You have chosen " + aContexts.map(function(oContext) { return oContext.getObject().Stext; }).join(", "));
			}
			oEvent.getSource().getBinding("items").filter([]);
			var column_selected = [];
			column_selected = aContexts.map(function(oContext) {
				return oContext.getObject().Stext;
			});

			for (var i = 0; i < column_selected.length; i++) {
				if (column_selected[i] === "Customer") {
					this.byId("CustomerTable").getColumns()[0].setVisible(true);
					break;
				} else {
					this.byId("CustomerTable").getColumns()[0].setVisible(false);
				}
			}
			for (var i = 0; i < column_selected.length; i++) {
				if (column_selected[i] === "Name") {
					this.byId("CustomerTable").getColumns()[1].setVisible(true);
					break;
				} else {
					this.byId("CustomerTable").getColumns()[1].setVisible(false);
				}
			}
			for (var i = 0; i < column_selected.length; i++) {
				if (column_selected[i] === "City") {
					this.byId("CustomerTable").getColumns()[2].setVisible(true);
					break;
				} else {
					this.byId("CustomerTable").getColumns()[2].setVisible(false);
				}
			}
			for (var i = 0; i < column_selected.length; i++) {
				if (column_selected[i] === "Open Quotation Count") {
					this.byId("CustomerTable").getColumns()[3].setVisible(true);
					break;
				} else {
					this.byId("CustomerTable").getColumns()[3].setVisible(false);
				}
			}
			for (var i = 0; i < column_selected.length; i++) {
				if (column_selected[i] === "Open Deliveries Count") {
					this.byId("CustomerTable").getColumns()[4].setVisible(true);
					break;
				} else {
					this.byId("CustomerTable").getColumns()[4].setVisible(false);
				}
			}
		},
		clearSelection: function() {
			this.getView().byId("CustomerTable").clearSelection();
			var oTable = this.getView().byId("CustomerTable");
			oTable.getBinding("rows").sort(null);
			oTable.getBinding("rows").filter(null);
			this._resetSortingState();
		},

		//================================
		//To Undo the Sort/Filter details
		//================================
		_resetSortingState: function() {
			var oTable = this.getView().byId("CustomerTable");
			var aColumns = oTable.getColumns();
			for (var i = 0; i < aColumns.length; i++) {
				aColumns[i].setSorted(false);
				aColumns[i].setFiltered(false);
			}
		},

		onCustomerInput: function(oEvent) {
			//===================================================================
			//navigation on successful validation
			//===================================================================
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("14806681306277823_S0", {
				"ID": "122"
			});
		},
		//===================================================================
		//Sabari 02-02-2017  code ends
		//===================================================================

		//===================================================================	
		//Srini 14-02-2017 code begins
		//===================================================================
		//*********** Code for navigating to Open Quotations Page************
		// _onStandardTilePress5: function() {
		// 	var oBindingContext = this.getView().getBindingContext();
		// 	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		// 	oRouter.navTo("14819017226063143_S6", oBindingContext);
		// },

		//*********** Code for navigating to Open Deliveries Page************
		tileNavigation: function() {
			var oBindingContext = this.getView().getBindingContext();
			this.doNavigate("14806681306277823_S0", oBindingContext);
		},

		//===============
		//For Navigation
		//===============
		doNavigate: function(sRouteName, oBindingContext) {
			var that = this;
			var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
			var oModel = (oBindingContext) ? oBindingContext.getModel() : null;

			var entityNameSet;
			if (sPath !== null && sPath !== "") {

				if (sPath.substring(0, 1) === "/") {
					sPath = sPath.substring(1);
				}
				entityNameSet = sPath.split("(")[0];
			}
			var navigationPropertyName;
			var sMasterContext = this.sMasterContext ? this.sMasterContext : sPath;

			if (entityNameSet !== null) {
				navigationPropertyName = that.getOwnerComponent().getNavigationPropertyForNavigationWithContext(entityNameSet, sRouteName);
			}
			if (navigationPropertyName !== null && navigationPropertyName !== undefined) {
				if (navigationPropertyName === "") {
					this.oRouter.navTo(sRouteName, {
						context: sPath,
						masterContext: sMasterContext
					}, false);
				} else {
					oModel.createBindingContext(navigationPropertyName, oBindingContext, null, function(bindingContext) {
						sPath = bindingContext.getPath();
						if (sPath.substring(0, 1) === "/") {
							sPath = sPath.substring(1);
						}

						// If the navigation is a 1-n, sPath would be "undefined" as this is not supported in Build
						if (sPath === "undefined") {
							that.oRouter.navTo(sRouteName);
						} else {
							that.oRouter.navTo(sRouteName, {
								context: sPath,
								masterContext: sMasterContext
							}, false);
						}
					});
				}
			} else {
				this.oRouter.navTo(sRouteName);
			}
		},
		//===============================================================
		//code for logoff functionality
		//===============================================================
		handleLogoffPress: function() {
			var oBindingContext = this.getView().getBindingContext();
			this.doNavigate("login", oBindingContext);
		},
		//===============================================================
		//code for Back To Customer functionality
		//===============================================================
		handleBackPress: function() {
			history.go(-1);
		},

		//===============================================================
		//Standard Code
		//===============================================================
		handleRouteMatched: function(oEvent) {
			var params = {};
			if (oEvent.mParameters.data.context || oEvent.mParameters.data.masterContext) {
				this.sContext = oEvent.mParameters.data.context;
				this.sMasterContext = oEvent.mParameters.data.masterContext;

				if (!this.sContext) {
					this.getView().bindElement("/" + this.sMasterContext, params);
				} else {
					this.getView().bindElement("/" + this.sContext, params);
				}
			}
		},

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