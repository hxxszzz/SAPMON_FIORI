sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("sapmon.fiori.delivery.controller.View1", {
            onInit: function () {
                var oIconTabBar = this.byId("idIconTabBar");
                oIconTabBar.attachSelect(this.onFilterSelect, this);
            },

            onFilterSelect: function(oEvent) {
                var oTable = this.byId("table");
                var sKey = oEvent.getParameter("key"); // Get the selected key
    
                var oBinding = oTable.getBinding("items");
    
                switch (sKey) {
                    case "all":
                        oBinding.filter([]); // Remove any existing filters
                        break;
                    case "before":
                        oBinding.filter(new Filter("Dstatus", FilterOperator.EQ, "배송전"));
                        break;
                    case "ing":
                        oBinding.filter(new Filter("Dstatus", FilterOperator.EQ, "배송중"));
                        break;
                    case "complete":
                        oBinding.filter(new Filter("Dstatus", FilterOperator.EQ, "배송완료"));
                        break;
                    case "cancel":
                        oBinding.filter(new Filter("Dstatus", FilterOperator.EQ, "결제취소완료"));
                        break;
                    default:
                        break;
                }
            }   

        });
    });
