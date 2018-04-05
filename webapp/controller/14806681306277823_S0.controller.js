var Last10 = [];
var ContactPerson = [];
var OrderTracking = [];
var Deliveries = [];
var openQuotations = [];
var BillingDocument = [];
var OpenBillingDocuments = [];
var salesDocumentSearch = [];
var SalesDocBlockedforBilling = [];
var Address = [];
var SalesDocSearch;
var name;
var custnr;
sap.ui.define(["sap/ui/core/mvc/Controller",
		"sap/ui/core/routing/History",
		"sap/ui/model/json/JSONModel",
		"sap/m/Popover",
		"sap/m/Button",
		"sap/m/Dialog",
		'sap/ui/layout/VerticalLayout'
	], function(BaseController, History, JSONModel, Popover, Button, Dialog, VerticalLayout) {
		"use strict";

		return BaseController.extend("generated.app.controller.14806681306277823_S0", {
			// ******* CREATE JSON MODEL INSTANCE *******************
			oEmployeeModel: new JSONModel(),
			//############### STANDARD FUNCTION FOR INITIAL PROCESSING OF DASHBOARD VIEW **************	//standard function for initial processing of Dashboard view
			onInit: function(evt) {
				//###########STANDARD CODE#################################################################################		//standard code
				this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				this.oRouter.getTarget("14806681306277823_S0").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
				//#########################################################################################################
				//******* CODE TO HIDE SIDE NAVIGATION *********************
				var viewId = this.getView().getId();
				var toolPage = sap.ui.getCore().byId(viewId + "--toolPage");
				toolPage.setSideExpanded(false);
				var oView = this.getView();
				this.getView().addEventDelegate({
					onBeforeShow: function() {
						//*************************************************************************************
						//********* SABARI - 02/02/2017  - CODE BEGIN *****************************************
						//*************************************************************************************
						//==============================================
						//OData call to get the data from the EDV System
						//===============================================

						var oModel = new sap.ui.model.odata.ODataModel("/p1942219772trial//cfsprovider/");
						oModel.read("/LAST10SD_InfoSet?$filter=Kunnr eq '" + CustomerId + "'", {
							success: function(oData, response) {
								var oResult = [];
								oResult = oData.results;
								Last10 = oResult;
								Last10 = {
									last10set: Last10
								};
								var oVizFrame3Model = new sap.ui.model.json.JSONModel(Last10);
								var oTable = oView.byId("Last10List");
								oTable.setModel(oVizFrame3Model);
							}
						});

						oModel.read("/Contact_Person_InfoSet?$filter=Kunnr eq '" + CustomerId + "'", {
							success: function(oData, response) {
								var oResult = [];
								oResult = oData.results;
								ContactPerson = oResult;
								ContactPerson = {
									cpset: ContactPerson
								};
								var oVizFrame3Model = new sap.ui.model.json.JSONModel(ContactPerson);
								var oTable = oView.byId("ContactPerson");
								oTable.setModel(oVizFrame3Model);
							}
						});
						
						oModel.read("/Quotation_Percentage_InfoSet('" + CustomerId + "')", {
							success: function(oData, response) {
								var QuotPer = Number( oData.QuotationPercentage ) ;
								oView.byId("openQuotations").setPercentage(QuotPer);
							}
						});

						oModel.read("/Address_InfoSet?$filter=Kunnr eq '" + CustomerId + "'", {
							success: function(oData, response) {
								var oResult = [];
								oResult = oData.results;
								Address = oResult;
								Address = {
									AddressSet: Address
								};
							}
						});

						oModel.read("/Delivery_InfoSet?$filter=Kunnr eq '" + CustomerId + "'", {
							success: function(oData, response) {
								var oResult = [];
								oResult = oData.results;
								Deliveries = oResult;
								Deliveries = {
									delvyset: Deliveries
								};
								var oVizFrame3Model = new sap.ui.model.json.JSONModel(Deliveries);
								var oTable = oView.byId("Deliveries");
								oTable.setModel(oVizFrame3Model);
							}
						});

						oModel.read("/SD_BLOCKED_FOR_BILLINGSet?$filter=Kunnr eq '" + CustomerId + "'", {
							success: function(oData, response) {
								var oResult = [];
								oResult = oData.results;
								SalesDocBlockedforBilling = oResult;
								SalesDocBlockedforBilling = {
									SalesDocBillingSet: SalesDocBlockedforBilling
								};
							}
						});

						oModel.read("/Open_Quotation_InfoSet?$filter=Kunnr eq '" + CustomerId + "'", {
							success: function(oData, response) {
								var oResult = [];
								oResult = oData.results;
								openQuotations = oResult;
								openQuotations = {
									OpenQuotationSet: openQuotations
								};
							}
						});

						oModel.read("/Billing_Doc_InfoSet?$filter=Kunag eq '" + CustomerId + "'", {
							success: function(oData, response) {
								var oResult = [];
								oResult = oData.results;
								BillingDocument = oResult;
								BillingDocument = {
									BillingDocSet: BillingDocument
								};
							}
						});

						oModel.read("/SD_SEARCH_InfoSet?$filter=Kunnr eq '" + CustomerId + "'", {
							success: function(oData, response) {
								var oResult = [];
								oResult = oData.results;
								salesDocumentSearch = oResult;
								salesDocumentSearch = {
									salesDocumentSearchSet: salesDocumentSearch
								};
							}
						});

						oModel.read("/Open_Billing_InfoSet?$filter=Kunag eq '" + CustomerId + "'", {
							success: function(oData, response) {
								var oResult = [];
								oResult = oData.results;
								OpenBillingDocuments = oResult;
								OpenBillingDocuments = {
									OpenBillSet: OpenBillingDocuments
								};
								var oVizFrame3Model = new sap.ui.model.json.JSONModel(OpenBillingDocuments);
								var oTable = oView.byId("idVizFrame");
								oTable.setModel(oVizFrame3Model);

								//=================================
								//Bar chart code begins - Srinivas
								//=================================
								//==================================
								//To get the id of the vizType used
								//==================================
								var oVizFrame = oView.byId("idVizFrame");
								//========================================
								//Code to build the array for chart input
								//========================================
								var oModelPC3 = new sap.ui.model.json.JSONModel();
								var data2 = {
									'CSales': [{
										"OrderName": "Not Yet",
										"Revenue": "3"
									}, {
										"OrderName": "Partially",
										"Revenue": "2"
									}, {
										"OrderName": "Completely",
										"Revenue": "3"
									}]
								};
								oModelPC3.setData(OpenBillingDocuments);
								//=========================================================
								//Setting the model to the variable of the VizType control
								//=========================================================
								oVizFrame.setModel(oModelPC3);

								oVizFrame.setVizProperties({
									interaction: {
										behaviorType: null
									},
									plotArea: {
										dataLabel: {
											// formatString:CustomerFormat.FIORI_LABEL_SHORTFORMAT_2,
											visible: true
										}
									},
									valueAxis: {
										label: {
											// formatString: CustomerFormat.FIORI_LABEL_SHORTFORMAT_10
										},
										title: {
											visible: false
										}
									},
									categoryAxis: {
										title: {
											visible: false
										}
									},
									title: {
										visible: true,
										text: 'Analytics for Open Billing Document'
									},
									tooltip: {
										visible: true,
										bodyDimensionLabel: "Order Name",
										bodyDimensionValue: "Order Name"
									}
								});
								//===============================
								//Bar chart code ends - Srinivas
								//===============================
							}
						});

						oModel.read("/Order_Tracking_InfoSet?$filter=Kunnr eq '" + CustomerId + "'", {
							success: function(oData, response) {
								var oResult = [];
								oResult = oData.results;
								OrderTracking = oResult;
								OrderTracking = {
									OTSet: OrderTracking
								};
								var oVizFrame3Model = new sap.ui.model.json.JSONModel(OrderTracking);
								var oTable = oView.byId("idpiechart2");
								oTable.setModel(oVizFrame3Model);
								//======================================================================================
								//for Current order tracking graph tab
								//======================================================================================
								//======================================================================================
								//  1.Get the id of the VizFrame
								//======================================================================================
								//======================================================================================
								//To get the id of the vizType used
								//======================================================================================
								var oVizFrame2 = oView.byId("idpiechart2");
								//======================================================================================
								//  2.Create a JSON Model and set the data
								//======================================================================================
								var oModelPC2 = new sap.ui.model.json.JSONModel();
								var data2 = {
									'CSales': [{
										"OrderName": "Not Yet",
										"Revenue": "3"
									}, {
										"OrderName": "Partially",
										"Revenue": "2"
									}, {
										"OrderName": "Completely",
										"Revenue": "3"
									}]
								};
								oModelPC2.setData(OrderTracking);
								//======================================================================================
								//  3. Create Viz dataset to feed to the data to the graph
								//======================================================================================
								oVizFrame2.setModel(oModelPC2);
								//======================================================================================
								//  4.Set Viz properties
								//======================================================================================
								oVizFrame2.setVizProperties({
									title: {
										text: "Analytics for Order Tracking"
									},
									plotArea: {
										colorPalette: d3.scale.category20().range(),
										drawingEffect: "glossy"
									}
								});
							}
						});
					}
				});

				//*************************************************************************************
				//********* SABARI - 30/01/2017  - CODE BEGIN********************************************
				//*************************************************************************************
				//===============================================================
				//For Customer Details Pop Over
				//===============================================================
				var mEmployeeData = {
					pages: [{
						pageId: "employeePageId",
						header: "Customer Info",
						icon: "/webapp/cust.png",
						title: "Jessica D. Prince - Customer",
						description: "Account Manager",
						groups: [{
							heading: "Contact Details",
							elements: [{
								label: "Mobile",
								value: "+001 6101 34869-0",
								elementType: sap.m.QuickViewGroupElementType.mobile
							}, {
								label: "Phone",
								value: "+001 6101 34869-1",
								elementType: sap.m.QuickViewGroupElementType.phone
							}, {
								label: "Email",
								value: "main.contact@company.com",
								emailSubject: 'Subject',
								elementType: sap.m.QuickViewGroupElementType.email
							}]
						}, {
							heading: "Company",
							elements: [{
								label: "Name",
								value: "Adventure Company",
								url: "http://sap.com",
								type: sap.m.QuickViewGroupElementType.link
							}, {
								label: "Address",
								value: "Main Street 4572, Los Angeles USA"
							}]
						}]
					}]
				};
				this.oEmployeeModel.setData(mEmployeeData);
			},
			//===============================================================
			//Search Option for Sales Document Search
			//===============================================================
			filterGlobally: function(oEvent) {
				SalesDocSearch = oEvent ? oEvent.getParameter("query") : null;
				//===============================================================
				//to Navigate to Sale Document Search page
				//===============================================================
				this._onStandardTilePress2();
			},
			//===============================================================
			//To Popover the customer Details 
			//===============================================================
			press: function(oEvent) {
				this.openQuickView(oEvent, this.oEmployeeModel);
			},
			openQuickView: function(oEvent, oModel) {
				this.createPopover();

				this._oQuickView.setModel(oModel);
				//===============================================================
				// delay because addDependent will do a async rerendering and the actionSheet will immediately close without it.
				//===============================================================
				var oButton = oEvent.getSource();
				jQuery.sap.delayedCall(0, this, function() {
					this._oQuickView.openBy(oButton);
				});
			},
			onExit: function() {
				if (this._oQuickView) {
					this._oQuickView.destroy();
				}
			},
			createPopover: function() {
				if (!this._oQuickView) {
					this._oQuickView = sap.ui.xmlfragment("navCust", "generated.app.Customer", this);
					this.getView().addDependent(this._oQuickView);
				}
			},
			//===============================================================
			//To get popup on the press of the User Name. 
			//===============================================================
			handleUserNamePress: function(event) {
				var popover = new Popover({
					showHeader: false,
					placement: sap.m.PlacementType.Bottom,
					content: [
						new Button({
							text: 'Feedback',
							type: sap.m.ButtonType.Transparent
						}),
						new Button({
							text: 'Help',
							type: sap.m.ButtonType.Transparent
						}),
						new Button({
							text: 'Logout',
							type: sap.m.ButtonType.Transparent
						})
					]
				}).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');

				popover.openBy(event.getSource());
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
			//===============================================================
			//To Expand the Side Navigation option .
			//===============================================================
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
				var oBindingContext = this.getView().getBindingContext();
				this.doNavigate("Customer", oBindingContext);
			},
			//===============================================================
			//Tile Press functionality to navigating to specific screen
			//===============================================================
			_onStandardTilePress2: function() {
				var oBindingContext = this.getView().getBindingContext();
				this.doNavigate("14819016979836433_S3", oBindingContext);
			},
			//===============================================================
			//For Naviagtion
			//===============================================================
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

			salesOrder: function() {
				var oBindingContext = this.getView().getBindingContext();
				this.doNavigate("salesorder", oBindingContext);
			},

			_onStandardTilePress: function() {
				var oBindingContext = this.getView().getBindingContext();

				this.doNavigate("14819014925569885_S1", oBindingContext);

			},
			_onStandardTilePress1: function() {
				var oBindingContext = this.getView().getBindingContext();

				this.doNavigate("14819016772901124_S2", oBindingContext);

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
				name = arrData["0"]["Namev"]+arrData["0"]["Name1"];
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
	},
	/* bExport= */
	true);