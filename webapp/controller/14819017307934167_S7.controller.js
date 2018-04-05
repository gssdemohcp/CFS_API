sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	'sap/m/Popover',
	'sap/m/Button',
	'sap/ui/model/Filter',
	"sap/m/MessageToast",
	'sap/ui/model/json/JSONModel'
], function(BaseController, History, Popover, Button, Filter, MessageToast, JSONModel) {
	"use strict";

	return BaseController.extend("generated.app.controller.14819017307934167_S7", {
		onInit: function() {
			//###################################### STANDARD CODE ####################################################
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("14819017307934167_S7").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
			//#########################################################################################################

			//===========================================
			//Code to display fields in frgaments begins
			//===========================================
			var oData = {
				"d": {
					"results": [{
						"Stext": "Sales Order"
					}, {
						"Stext": "Sold To Party ID"
					}, {
						"Stext": "Ship To Party ID"
					}, {
						"Stext": "Ship To Party"
					}, {
						"Stext": "Delivery Date"
					}, {
						"Stext": "Overall Status"
					}, {
						"Stext": "Created On"
					}, {
						"Stext": "Shipping Point"
					}, {
						"Stext": "Warehouse Number"
					}, {
						"Stext": "Sales Organization ID"
					}]
				}
			};

			var oJSONModel = new JSONModel(oData);
			this.getView().setModel(oJSONModel);
			//===========================================
			//Code to display fields in frgaments ends
			//===========================================

			//======================================
			//Code to hide the SideNavigation option
			//======================================
			var viewId = this.getView().getId();
			var toolPage = sap.ui.getCore().byId(viewId + "--toolPage");
			toolPage.setSideExpanded(false);
			//================================================
			//Array Data For the Table Deliveries
			//================================================
			var oJSONModel = new JSONModel(Deliveries);

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

		//************* SRINI 20/02/2017 - CODE BEGINS **********************************
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
				if (column_selected[i] === "Sold To party ID") {
					this.byId("table").getColumns()[2].setVisible(true);
					break;
				} else {
					this.byId("table").getColumns()[2].setVisible(false);
				}
			}
			for (var i = 0; i < column_selected.length; i++) {
				if (column_selected[i] === "Ship To Party ID") {
					this.byId("table").getColumns()[3].setVisible(true);
					break;
				} else {
					this.byId("table").getColumns()[3].setVisible(false);
				}
			}
			for (var i = 0; i < column_selected.length; i++) {
				if (column_selected[i] === "Ship To Party") {
					this.byId("table").getColumns()[4].setVisible(true);
					break;
				} else {
					this.byId("table").getColumns()[4].setVisible(false);
				}
			}
			for (var i = 0; i < column_selected.length; i++) {
				if (column_selected[i] === "Delivery Date") {
					this.byId("table").getColumns()[5].setVisible(true);
					break;
				} else {
					this.byId("table").getColumns()[5].setVisible(false);
				}
			}
			for (var i = 0; i < column_selected.length; i++) {
				if (column_selected[i] === "Overall Status") {
					this.byId("table").getColumns()[6].setVisible(true);
					break;
				} else {
					this.byId("table").getColumns()[6].setVisible(false);
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
				if (column_selected[i] === "Shipping Point") {
					this.byId("table").getColumns()[7].setVisible(true);
					break;
				} else {
					this.byId("table").getColumns()[7].setVisible(false);
				}
			}
			for (var i = 0; i < column_selected.length; i++) {
				if (column_selected[i] === "Warehouse Number") {
					this.byId("table").getColumns()[8].setVisible(true);
					break;
				} else {
					this.byId("table").getColumns()[8].setVisible(false);
				}
			}
			for (var i = 0; i < column_selected.length; i++) {
				if (column_selected[i] === "Sales Organization ID") {
					this.byId("table").getColumns()[9].setVisible(true);
					break;
				} else {
					this.byId("table").getColumns()[9].setVisible(false);
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

		//***** SRINI 23/01/2017 - CODE TO CHECK ROW COUNT BEGINS ********************
		rowCount: function() {
			if (Deliveries.delvyset.length <= 7) {
				this.getView().byId("table").setVisibleRowCount(Deliveries.delvyset.length);
			} else {
				this.getView().byId("table").setVisibleRowCount(7);
			}
		},
		//***** SRINI 23/01/2017 - CODE ENDS *****************************************

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

		//========================
		//Filter by Delivery Type
		//========================
		getTAonly: function() {
			var oFilter = new Filter("Gbstk", sap.ui.model.FilterOperator.EQ, 'Not yet processed');
			var oBinding = this.getView().byId("table").getBinding("rows");
			oBinding.filter([oFilter]);
		},

		//========================
		//To get the Selected row 
		//======================== 
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

		//==============================
		//Clear the sort/filter options
		//==============================
		clearSelection: function() {
			this.getView().byId("table").clearSelection();
			var oTable = this.getView().byId("table");
			oTable.getBinding("rows").sort(null);
			oTable.getBinding("rows").filter(null);
			this._resetSortingState();
		},

		//==============================
		//ReSet the sort/filter options
		//==============================
		_resetSortingState: function() {
			var oTable = this.getView().byId("table");
			var aColumns = oTable.getColumns();
			for (var i = 0; i < aColumns.length; i++) {
				aColumns[i].setSorted(false);
				aColumns[i].setFiltered(false);
			}
		},

		//=========================
		//Filter by Sales Document
		//=========================
		filterGlobally: function(oEvent) {
			var sQuery = oEvent ? oEvent.getParameter("query") : null;

			// add filter for search
			var filters = [];
			if (sQuery) {
				filters = [new sap.ui.model.Filter([new sap.ui.model.Filter("Vbeln", sap.ui.model.FilterOperator.Contains, sQuery)])];
			}

			// update list binding
			var list = this.getView().byId("table");
			var binding = list.getBinding("rows");
			binding.filter(filters);
		},

		//#################################### STANDARD CODE #################################
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
		//#####################################################################################
		//To covert table data to PDF
		handlePdf: function() {
			var oTable = new JSONModel(Last10)
			this.JSONToPDFConvertor(Last10.last10set);
		},

		JSONToPDFConvertor: function(JSONData) {
			// To get the last 10 Sales Document.
			var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
			var columns = new Array;
			for (var index in arrData[0]) {
				//Now convert each value to string and comma-seprated
				if (index === "Vbeln") {
					index = "ID";
				} else if (index === "Erdat") {
					index = "Date";
				} else if (index === "Auart") {
					index = "Doc Type";
				} else if (index === "Kunnr") {
					index = "Customer";
				} else if (index === "Name1") {
					index = "Customer Name";
				} else if (index === "Netwr") {
					index = "Net Value";
				} else if (index === "Gbstk") {
					index = "Status";
				} else if (index === "EMP_RES") {
					index = "Emp Res";
				} else if (index === "CONTACT_PER") {
					index = "Cont Person";
				}

				if (index === "__metadata") {
					index = "";
				}
				columns.push(index);
			}
			var rows = new Array;
			for (var i = 0; i < arrData.length; i++) {
				rows[i] = new Array;

				for (var j = 0; j < arrData.length;) {

					for (var index in arrData[0]) {
						if (index !== "__metadata") {
							rows[i][j] = arrData[i][index];
						}
						j++;
					}
				}
			}

			if (columns.length < 4) {
				var doc = new jsPDF('p', 'pt');
			} else {
				var doc = new jsPDF('l', 'pt');
			}
			doc.text(7, 20, "Last 10");
			doc.autoTable(columns, rows, {
				startY: 30,
				margin: {
					horizontal: 10
				},
				styles: {
					columnWidth: 'wrap'
				},
				columnStyles: {
					text: {
						columnWidth: 'auto'
					}
				}
			});
			//To get the sales Order
			JSONData = OrderTracking.OTSet;
			arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
			var columns1 = new Array;
			for (var index in arrData[0]) {
				//Now convert each value to string and comma-seprated
				if (index === "Vbeln") {
					index = "ID";
				} else if (index === "Erdat") {
					index = "Date";
				} else if (index === "Ktext") {
					index = "Description";
				} else if (index === "Faksk") {
					index = "Billing block";
				} else if (index === "Lifsk") {
					index = "Delivery block";
				} else if (index === "Vkbur") {
					index = "Sales Office";
				} else if (index === "Vkorg") {
					index = "Sales Org.";
				} else if (index === "Kunnr") {
					index = "Customer";
				} else if (index === "Name1") {
					index = "Customer Name";
				} else if (index === "Netwr") {
					index = "Net Value";
				} else if (index === "Smenr") {
					index = "Sales Unit";
				} else if (index === "Waerk") {
					index = "Currency";
				} else if (index === "Gbstk") {
					index = "Status";
				} else if (index === "Abstk") {
					index = "Rejection Status";
				} else if (index === "Matnr") {
					index = "Material";
				} else if (index === "Kwmeng") {
					index = "Order quantity";
				} else if (index === "Meins") {
					index = "Base Unit";
				} else if (index === "Abgru") {
					index = "Rejection Reason";
				} else if (index === "Name1") {
					index = "Name";
				} else if (index === "EmpRes") {
					index = "Emp Res";
				} else if (index === "CONTACT_PER") {
					index = "Cont Person";
				} else if (index === "__metadata") {
					index = "";
				}
				columns1.push(index);
			}
			var rows1 = new Array;
			for (var i = 0; i < arrData.length; i++) {
				rows1[i] = new Array;

				for (var j = 0; j < arrData.length;) {

					for (var index in arrData[0]) {
						if (index !== "__metadata") {
							rows1[i][j] = arrData[i][index];
						}
						j++;
					}
				}
			}
			doc.text("Order Tracking", 7, doc.autoTableEndPosY() + 20);
			doc.autoTable(columns1, rows1, {
				startY: doc.autoTableEndPosY() + 30,
				margin: {
					horizontal: 7
				},
				styles: {
					columnWidth: 'wrap'
				},
				columnStyles: {
					text: {
						columnWidth: 'auto'
					}
				}
			});
			//To get the Deliveries 
			JSONData = Deliveries.delvyset;
			arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
			var columns2 = new Array;
			for (var index in arrData[0]) {
				//Now convert each value to string and comma-seprated
				if (index === "Vbeln") {
					index = "ID";
				} else if (index === "Erdat") {
					index = "Date";
				} else if (index === "Lfart") {
					index = "Delivery Type";
				} else if (index === "Lprio") {
					index = "Delivery Prior.";
				} else if (index === "Anzpk") {
					index = "No.of packages";
				} else if (index === "Ntgew") {
					index = "Net weight";
				} else if (index === "Gewei") {
					index = "Weight unit";
				} else if (index === "Volum") {
					index = "Volume";
				} else if (index === "Voleh") {
					index = "Volume unit";
				} else if (index === "Kunnr") {
					index = "Ship-to party";
				} else if (index === "Kunag") {
					index = "Sold-to party";
				} else if (index === "Vstel") {
					index = "Shipping Point";
				} else if (index === "Lgnum") {
					index = "Warehouse No.";
				} else if (index === "Vkoiv") {
					index = "Sales org.";
				} else if (index === "Tddat") {
					index = "Transp Plng Date";
				} else if (index === "Lfdat") {
					index = "Delivery Date";
				} else if (index === "Name1") {
					index = "Name";
				} else if (index === "Gbstk") {
					index = "Overall Status";
				} else if (index === "__metadata") {
					index = "";
				}
				columns2.push(index);
			}
			var rows2 = new Array;
			for (var i = 0; i < arrData.length; i++) {
				rows2[i] = new Array;

				for (var j = 0; j < arrData.length;) {

					for (var index in arrData[0]) {
						if (index !== "__metadata") {
							rows2[i][j] = arrData[i][index];
						}
						j++;
					}
				}
			}
			doc.text("Deliveries", 7, doc.autoTableEndPosY() + 20);
			doc.autoTable(columns2, rows2, {
				startY: doc.autoTableEndPosY() + 30,
				margin: {
					horizontal: 7
				},
				styles: {
					columnWidth: 'wrap'
				},
				columnStyles: {
					text: {
						columnWidth: 'auto'
					}
				}
			});
			//To get the BillingDocument 
			JSONData = BillingDocument.BillingDocSet;
			arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
			var columns3 = new Array;
			for (var index in arrData[0]) {
				//Now convert each value to string and comma-seprated
				if (index === "Vbeln") {
					index = "ID";
				} else if (index === "Kunag") {
					index = "Sold-to party";
				} else if (index === "Kunrg") {
					index = "Payer";
				} else if (index === "Belnr") {
					index = "Document Number";
				} else if (index === "Gjahr") {
					index = "Fiscal Year";
				} else if (index === "Poper") {
					index = "Posting period";
				} else if (index === "Netwr") {
					index = "Net value";
				} else if (index === "Waerk") {
					index = "Doc. Currency";
				} else if (index === "Fkdat") {
					index = "Billing Date";
				} else if (index === "Zterm") {
					index = "Payt Terms";
				} else if (index === "Landtx") {
					index = "Tax depart. cty";
				} else if (index === "__metadata") {
					index = "";
				}
				columns3.push(index);
			}
			var rows3 = new Array;
			for (var i = 0; i < arrData.length; i++) {
				rows3[i] = new Array;

				for (var j = 0; j < arrData.length;) {

					for (var index in arrData[0]) {
						if (index !== "__metadata") {
							rows3[i][j] = arrData[i][index];
						}
						j++;
					}
				}
			}
			doc.text("Billing Document", 7, doc.autoTableEndPosY() + 20);
			doc.autoTable(columns3, rows3, {
				startY: doc.autoTableEndPosY() + 30,
				margin: {
					horizontal: 7
				},
				styles: {
					columnWidth: 'wrap'
				},
				columnStyles: {
					text: {
						columnWidth: 'auto'
					}
				}
			});
			//To get the OpenBillingDocuments 
			JSONData = OpenBillingDocuments.OpenBillSet;
			arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
			var columns4 = new Array;
			for (var index in arrData[0]) {
				//Now convert each value to string and comma-seprated
				if (index === "Vbeln") {
					index = "ID";
				} else if (index === "Kunag") {
					index = "Sold-to party";
				} else if (index === "Kunrg") {
					index = "Payer";
				} else if (index === "Belnr") {
					index = "Document Number";
				} else if (index === "Gjahr") {
					index = "Fiscal Year";
				} else if (index === "Poper") {
					index = "Posting period";
				} else if (index === "Netwr") {
					index = "Net value";
				} else if (index === "Waerk") {
					index = "Doc. Currency";
				} else if (index === "Fkdat") {
					index = "Billing Date";
				} else if (index === "Zterm") {
					index = "Payt Terms";
				} else if (index === "Landtx") {
					index = "Tax depart. cty";
				} else if (index === "Gbstk") {
					index = "Overall Status";
				} else if (index === "__metadata") {
					index = "";
				}
				columns4.push(index);
			}
			var rows4 = new Array;
			for (var i = 0; i < arrData.length; i++) {
				rows4[i] = new Array;

				for (var j = 0; j < arrData.length;) {

					for (var index in arrData[0]) {
						if (index !== "__metadata") {
							rows4[i][j] = arrData[i][index];
						}
						j++;
					}
				}
			}
			doc.text("Open Billing Documents", 7, doc.autoTableEndPosY() + 20);
			doc.autoTable(columns4, rows4, {
				startY: doc.autoTableEndPosY() + 30,
				margin: {
					horizontal: 7
				},
				styles: {
					columnWidth: 'wrap'
				},
				columnStyles: {
					text: {
						columnWidth: 'auto'
					}
				}
			});
			//To get the openQuotations 
			JSONData = openQuotations.OpenQuotationSet;
			arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
			var columns6 = new Array;
			for (var index in arrData[0]) {
				//Now convert each value to string and comma-seprated
				if (index === "Vbeln") {
					index = "ID";
				} else if (index === "Guebg") {
					index = "Valid from";
				} else if (index === "Gueen") {
					index = "Valid to";
				} else if (index === "Ktext") {
					index = "Description";
				} else if (index === "Kunnr") {
					index = "Customer";
				} else if (index === "Spart") {
					index = "Division";
				} else if (index === "Vdatu") {
					index = "Request.dlv.dt";
				} else if (index === "Vkbur") {
					index = "Sales Office";
				} else if (index === "Vkorg") {
					index = "Sales Org.";
				} else if (index === "Waerk") {
					index = "Currency";
				} else if (index === "Cmgst") {
					index = "Case Status";
				} else if (index === "Name1") {
					index = "Customer Name";
				} else if (index === "Netwr") {
					index = "Net Value";
				} else if (index === "Smenr") {
					index = "Sales Unit";
				} else if (index === "Waerk") {
					index = "Currency";
				} else if (index === "Gbstk") {
					index = "Status";
				} else if (index === "Abstk") {
					index = "Rejection Status";
				} else if (index === "Matnr") {
					index = "Material";
				} else if (index === "Kwmeng") {
					index = "Order quantity";
				} else if (index === "Meins") {
					index = "Base Unit";
				} else if (index === "Name1") {
					index = "Name";
				} else if (index === "EmpRes") {
					index = "Emp Res";
				} else if (index === "__metadata") {
					index = "";
				}
				columns6.push(index);
			}
			var rows6 = new Array;
			for (var i = 0; i < arrData.length; i++) {
				rows6[i] = new Array;

				for (var j = 0; j < arrData.length;) {

					for (var index in arrData[0]) {
						if (index !== "__metadata") {
							rows6[i][j] = arrData[i][index];
						}
						j++;
					}
				}
			}
			doc.text("Open Quotations", 7, doc.autoTableEndPosY() + 20);
			doc.autoTable(columns6, rows6, {
				startY: doc.autoTableEndPosY() + 30,
				margin: {
					horizontal: 7
				},
				styles: {
					columnWidth: 'wrap'
				},
				columnStyles: {
					text: {
						columnWidth: 'auto'
					}
				}
			});
			//To get the ContactPerson 
			JSONData = ContactPerson.cpset;
			arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
			name = arrData["0"]["Namev"] + arrData["0"]["Name1"];
			custnr = arrData["0"]["Kunnr"];
			custnr = parseInt(custnr, [10]);
			var columns7 = new Array;
			for (var index in arrData[0]) {
				//Now convert each value to string and comma-seprated
				if (index === "Parnr") {
					index = "Contact Person";
				} else if (index === "Kunnr") {
					index = "Customer";
				} else if (index === "Namev") {
					index = "First name";
				} else if (index === "Name1") {
					index = "Name";
				} else if (index === "Ort01") {
					index = "City";
				} else if (index === "Telf1") {
					index = "Telephone 1";
				} else if (index === "Adrnp2") {
					index = "Address number";
				} else if (index === "Prsnr") {
					index = "Person number";
				} else if (index === "FaxnrLong") {
					index = "Fax number";
				} else if (index === "SmtpAddr") {
					index = "E-Mail Address";
				} else if (index !== "__metadata") {
					index = "";
				}
				columns7.push(index);
			}
			var rows7 = new Array;
			for (var i = 0; i < arrData.length; i++) {
				rows7[i] = new Array;

				for (var j = 0; j < arrData.length;) {

					for (var index in arrData[0]) {
						if (index !== "__metadata") {
							rows7[i][j] = arrData[i][index];
						}
						j++;
					}
				}
			}
			doc.text("Contact Person", 7, doc.autoTableEndPosY() + 20);
			doc.autoTable(columns7, rows7, {
				startY: doc.autoTableEndPosY() + 30,
				margin: {
					horizontal: 7
				},
				styles: {
					columnWidth: 'wrap'
				},
				columnStyles: {
					text: {
						columnWidth: 'auto'
					}
				}
			});
			//To get the SalesDocBlockedforBilling
			JSONData = SalesDocBlockedforBilling.SalesDocBillingSet;
			arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
			var columns8 = new Array;
			for (var index in arrData[0]) {
				//Now convert each value to string and comma-seprated
				if (index === "Vbeln") {
					index = "ID";
				} else if (index === "Erdat") {
					index = "Date";
				} else if (index === "Ernam") {
					index = "Created by";
				} else if (index === "Auart") {
					index = "Doc Type";
				} else if (index === "Kunnr") {
					index = "Customer";
				} else if (index === "Netwr") {
					index = "Net value";
				} else if (index === "Vkbur") {
					index = "Sales Office.";
				} else if (index === "Vkorg") {
					index = "Sales Org.";
				} else if (index === "Waerk") {
					index = "Currency";
				} else if (index === "BukrsVf") {
					index = "CCodeToBeBilled";
				} else if (index === "Bstzd") {
					index = "Supplement";
				} else if (index === "Ktext") {
					index = "Description";
				} else if (index === "Name1") {
					index = "Name";
				} else if (index === "EmpRes") {
					index = "Employee Responsible";
				} else if (index === "EmpResNo") {
					index = "Employee Responsible No";
				} else if (index === "Cmgst") {
					index = "Status";
				} else if (index === "Gbstk") {
					index = "Over all Status";
				} else if (index === "__metadata") {
					index = "";
				}
				columns8.push(index);
			}
			var rows8 = new Array;
			for (var i = 0; i < arrData.length; i++) {
				rows8[i] = new Array;

				for (var j = 0; j < arrData.length;) {

					for (var index in arrData[0]) {
						if (index !== "__metadata") {
							rows8[i][j] = arrData[i][index];
						}
						j++;
					}
				}
			}
			doc.text("Sales Doc Blocked for Billing", 7, doc.autoTableEndPosY() + 20);
			doc.autoTable(columns8, rows8, {
				startY: doc.autoTableEndPosY() + 30,
				margin: {
					horizontal: 7
				},
				styles: {
					columnWidth: 'wrap'
				},
				columnStyles: {
					text: {
						columnWidth: 'auto'
					}
				}
			});
			var filename = 'Customer Fact Sheet ' + custnr + '.pdf';
			doc.save(filename);

		},
		formatDate: function(v) {
			jQuery.sap.require("sap.ui.core.format.DateFormat");
			var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
				pattern: "dd-MM-YYYY"
			});
			return oDateFormat.format(new Date(v));
		}
	});
}, /* bExport= */ true);