sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function(Controller, Filter, History, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("generated.app.controller.SalesOrder", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf generated.app.view.SalesOrder
		 */
		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// this.oRouter.getTarget("SalesOrder").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));

			// //******* CODE TO HIDE SIDE NAVIGATION *********************
			// var viewId = this.getView().getId();
			// var toolPage = sap.ui.getCore().byId(viewId + "--toolPage");
			// toolPage.setSideExpanded(false);
			// //************************************************************
			var oData = {
				"d": {
					"results": [{
						"Stext": "Sales Order"
					}, {
						"Stext": "Sold To Party ID"
					}, {
						"Stext": "Material"
					}, {
						"Stext": "Rejection Status"
					}, {
						"Stext": "Reason For Rejection"
					}, {
						"Stext": "Billing Block"
					}, {
						"Stext": "Delivery Block For Item"
					}, {
						"Stext": "Base Unit Of Measure"
					}, {
						"Stext": "Net Value"
					}, {
						"Stext": "Created On"
					}, {
						"Stext": "Sales Organization"
					}, {
						"Stext": "Sales Office"
					}, {
						"Stext": "Employee Responsible"
					}]
				}
			};

			var oJSONModel = new JSONModel(oData);
			this.getView().setModel(oJSONModel);
			var viewId = this.getView().getId();
			var toolPage = sap.ui.getCore().byId(viewId + "--toolPage");
			toolPage.setSideExpanded(false);

			//================================================
			//Array Data For the Table Last 10 Sales Document
			//================================================
			var oJSONModel = new JSONModel(OpenSalesOrder);
			// console.log("Json", oJSONModel);
			this.getView().byId(
					"table")
				.setModel(
					oJSONModel);
			//=====================================
			//Array Data for the Address in header 
			//=====================================
			var oJSONModelAdr = new JSONModel(Address);
			this.getView().byId("Address").setModel(oJSONModelAdr);
			this.getView().byId("Address1").setModel(oJSONModelAdr);
			this.rowCount();
		},
		//=================================================
		//To handle close functionality in fragment begins
		//=================================================
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
				if (column_selected[i] === "Sales Order") {
					this.byId("table").getColumns()[1].setVisible(true);
					break;
				} else {
					this.byId("table").getColumns()[1].setVisible(false);
				}
			}
			for (var i = 0; i < column_selected.length; i++) {
				if (column_selected[i] === "Sales To Party ID") {
					this.byId("table").getColumns()[2].setVisible(true);
					break;
				} else {
					this.byId("table").getColumns()[2].setVisible(false);
				}
			}
			for (var i = 0; i < column_selected.length; i++) {
				if (column_selected[i] === "Material") {
					this.byId("table").getColumns()[3].setVisible(true);
					break;
				} else {
					this.byId("table").getColumns()[3].setVisible(false);
				}
			}
			for (var i = 0; i < column_selected.length; i++) {
				if (column_selected[i] === "Rejection Status") {
					this.byId("table").getColumns()[4].setVisible(true);
					break;
				} else {
					this.byId("table").getColumns()[4].setVisible(false);
				}
			}
			for (var i = 0; i < column_selected.length; i++) {
				if (column_selected[i] === "Reason For Rejection") {
					this.byId("table").getColumns()[5].setVisible(true);
					break;
				} else {
					this.byId("table").getColumns()[5].setVisible(false);
				}
			}
			for (var i = 0; i < column_selected.length; i++) {
				if (column_selected[i] === "Billing Block") {
					this.byId("table").getColumns()[6].setVisible(true);
					break;
				} else {
					this.byId("table").getColumns()[6].setVisible(false);
				}
			}
			for (var i = 0; i < column_selected.length; i++) {
				if (column_selected[i] === "Delivery Block For Item") {
					this.byId("table").getColumns()[7].setVisible(true);
					break;
				} else {
					this.byId("table").getColumns()[7].setVisible(false);
				}
			}
			for (var i = 0; i < column_selected.length; i++) {
				if (column_selected[i] === "Base Unit Of Measure") {
					this.byId("table").getColumns()[8].setVisible(true);
					break;
				} else {
					this.byId("table").getColumns()[8].setVisible(false);
				}
			}
			for (var i = 0; i < column_selected.length; i++) {
				if (column_selected[i] === "Net Value") {
					this.byId("table").getColumns()[9].setVisible(true);
					break;
				} else {
					this.byId("table").getColumns()[9].setVisible(false);
				}
			}
			for (var i = 0; i < column_selected.length; i++) {
				if (column_selected[i] === "Created On") {
					this.byId("table").getColumns()[0].setVisible(true);
					break;
				} else {
					this.byId("table").getColumns()[0].setVisible(false);
				}
			}
			for (var i = 0; i < column_selected.length; i++) {
				if (column_selected[i] === "Sales Organization") {
					this.byId("table").getColumns()[10].setVisible(true);
					break;
				} else {
					this.byId("table").getColumns()[10].setVisible(false);
				}
			}
			for (var i = 0; i < column_selected.length; i++) {
				if (column_selected[i] === "Sales Office") {
					this.byId("table").getColumns()[11].setVisible(true);
					break;
				} else {
					this.byId("table").getColumns()[11].setVisible(false);
				}
			}
			for (var i = 0; i < column_selected.length; i++) {
				if (column_selected[i] === "Employee Responsible") {
					this.byId("table").getColumns()[12].setVisible(true);
					break;
				} else {
					this.byId("table").getColumns()[12].setVisible(false);
				}
			}
		},
		//===============================================
		//To handle close functionality in fragment ends 
		//===============================================

		//=================================================
		//Code to get selected columns from fragment begins
		//=================================================
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
		//===============================================
		//Code to get selected columns from fragment ends
		//===============================================
		//************* SRINI 20/02/2017 - CODE ENDS ************************************

		//************* SRINI 01/02/2017 - CODE BEGINS **********************************
		//===================================
		//To set visible row count for table
		//===================================
		rowCount: function() {
			if (OpenSalesOrder.OpenSalesOrder.length <= 7) {
				this.getView().byId("table").setVisibleRowCount(OpenSalesOrder.OpenSalesOrder.length);
			} else {
				this.getView().byId("table").setVisibleRowCount(7);
			}
		},

		//To covert table data to PDF
		handlePdf: function() {
			// var tabledata = oTable.getModel().getData();
			var oTable = new JSONModel(OpenSalesOrder)
			console.log("pdfdata", oTable);
			this.JSONToPDFConvertor(OpenSalesOrder.OpenSalesOrder);
		},

		JSONToPDFConvertor: function(JSONData) {

			var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
			var columns = new Array;
			for (var index in arrData[0]) {
				//Now convert each value to string and comma-seprated
				columns.push(index);
			}
			var rows = new Array;
			console.log(arrData);
			for (var i = 0; i < arrData.length; i++) {
				rows[i] = new Array;

				for (var j = 0; j < arrData.length;) {

					for (var index in arrData[0]) {

						rows[i][j] = arrData[i][index];
						j++;
					}
				}
			}
			if (columns.length < 4) {
				var doc = new jsPDF('p', 'pt');
			} else {
				var doc = new jsPDF('l', 'pt');
			}
			doc.autoTable(columns, rows);

			doc.save('table.pdf');

		},
		// onSelectionChange: function(oEvent){
		// 	debugger;
		// 	var iIndex = this.getView().byId("list").getSelectedItem();
		// 	var sMsg;
		// 	if (iIndex < 0) {
		// 		sMsg = "no item selected";
		// 	} else {
		// 		sMsg = iIndex.mProperties.title;
		// 		for (var i=0;i<OpenSalesOrder.OpenSalesOrder.length;i++){
		// 			if (OpenSalesOrder.OpenSalesOrder[i].VBELN === sMsg){

		// 				// this.getView().byId("DetailPage").setModel(new JSONModel(OpenSalesOrder.OpenSalesOrder[i]));
		// 				var vbeln = OpenSalesOrder.OpenSalesOrder[i].VBELN;
		// 				this.getView().byId("sonumber1").setText(vbeln);
		// 				this.getView().byId("SalesOrg").setText(OpenSalesOrder.OpenSalesOrder[i].VKORG);
		// 				this.getView().byId("reqdate").setText(OpenSalesOrder.OpenSalesOrder[i].VDATU);
		// 				this.getView().byId("shiptoparty").setText(OpenSalesOrder.OpenSalesOrder[i].NAME1);
		// 				this.getView().byId("netvalue").setText(OpenSalesOrder.OpenSalesOrder[i].NETWR);
		// 				this.getView().byId("currentstatus").setText(OpenSalesOrder.OpenSalesOrder[i].GBSTK);
		// 				this.getView().byId("ordertotal").setText(OpenSalesOrder.OpenSalesOrder[i].VKBUR);
		// 			}	
		// 		}	
		// 	}
		// 	MessageToast.show(sMsg);	
		// },

		//=====================================
		//To Expand the Side Navigation option 
		//=====================================  		
		onSideNavButtonPress: function() {
			var viewId = this.getView().getId();
			var toolPage = sap.ui.getCore().byId(viewId + "--toolPage");
			toolPage.setSideExpanded(!toolPage.getSideExpanded());
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
		//==========================================================
		//Tile Press functionality to navigating to specific screen
		//==========================================================
		_onStandardTilePress: function() {
			var oBindingContext = this.getView().getBindingContext();

			this.doNavigate("14819014925569885_S1", oBindingContext);

		},
		_onStandardTilePress1: function() {
			var oBindingContext = this.getView().getBindingContext();

			this.doNavigate("14819016772901124_S2", oBindingContext);

		},
		salesOrder: function() {
			var oBindingContext = this.getView().getBindingContext();
			this.doNavigate("salesorder", oBindingContext);
		},
		_onStandardTilePress5: function() {
			var oBindingContext = this.getView().getBindingContext();

			this.doNavigate("14819017226063143_S6", oBindingContext);

		},
		_onStandardTilePress4: function() {
			var oBindingContext = this.getView().getBindingContext();

			this.doNavigate("14819017148924392_S5", oBindingContext);

		},
		_onStandardTilePress3: function() {
			var oBindingContext = this.getView().getBindingContext();

			this.doNavigate("14806681306277823_S0", oBindingContext);

		},
		_onStandardTilePress6: function() {
			var oBindingContext = this.getView().getBindingContext();

			this.doNavigate("14819017307934167_S7", oBindingContext);

		},
		_onStandardTilePress8: function() {
			var oBindingContext = this.getView().getBindingContext();

			this.doNavigate("14819017477321011_S9", oBindingContext);

		},
		_onStandardTilePress7: function() {
			var oBindingContext = this.getView().getBindingContext();

			this.doNavigate("14819017384062359_S8", oBindingContext);

		},
		_onStandardTilePress9: function() {
			var oBindingContext = this.getView().getBindingContext();

			this.doNavigate("14819018329937730_S10", oBindingContext);

		},
		_onStandardTilePress10: function() {
			var oBindingContext = this.getView().getBindingContext();
			this.doNavigate("14819017062921644_S4", oBindingContext);
		},
		_onStandardTilePress2: function() {
			var oBindingContext = this.getView().getBindingContext();

			this.doNavigate("14819016979836433_S3", oBindingContext);

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

		//=================================================================
		//Srini - 15-02-2017 - code for navigating to previous page begins 
		//=================================================================
		onNavBack: function() {
			history.go(-1);
		},
		//==============================================================
		//Srini - 15-02-2017 - code for navigating to previous page ends
		//==============================================================
		//====================================
		//To get the Seleted Row in the Table
		//====================================
		getSelectedIndices: function() {
			var aIndices = this.getView().byId("table").getSelectedIndices();
			var sMsg;
			if (aIndices.length < 1) {
				sMsg = "no item selected";
			} else {
				sMsg = aIndices;
			}
			MessageToast.show(sMsg);
		},

		//==========================
		//Filter by Delivery Status
		//==========================
		getTAonly: function() {
			var oFilter = new Filter("ABSTK", sap.ui.model.FilterOperator.EQ, 'Not Yet Processed');
			var oBinding = this.getView().byId("table").getBinding("rows");
			oBinding.filter([oFilter]);
		},

		//==========================
		//Clear sort/Filter Options
		//==========================
		clearSelection: function() {
			this.getView().byId("table").clearSelection();
			var oTable = this.getView().byId("table");
			oTable.getBinding("rows").sort(null);
			oTable.getBinding("rows").filter(null);
			this._resetSortingState();
		},

		//==============================
		//ReSet the Sort/Filter options
		//==============================
		_resetSortingState: function() {
			var oTable = this.getView().byId("table");
			var aColumns = oTable.getColumns();
			for (var i = 0; i < aColumns.length; i++) {
				aColumns[i].setSorted(false);
				aColumns[i].setFiltered(false);
			}
		},

		//========================
		//Search Option for Table
		//========================
		filterGlobally: function(oEvent) {
			var sQuery = oEvent ? oEvent.getParameter("query") : null;

			// add filter for search
			var filters = [];
			if (sQuery) {
				filters = [new sap.ui.model.Filter([new sap.ui.model.Filter("VBELN", sap.ui.model.FilterOperator.Contains, sQuery)])];
			}

			// update list binding
			var list = this.getView().byId("table");
			var binding = list.getBinding("rows");
			binding.filter(filters);
		},

		//######################################### STANDARD CODE ###############################
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
		}

	});

});