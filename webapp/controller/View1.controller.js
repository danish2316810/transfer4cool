sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("navigate2sales.controller.View1", {
        onInit: function () {

        },
        onSelect:function(oEvent){
            var that=this
            var oItem=oEvent.getParameter("selectedItem").mProperties.key
            var oModel=that.getOwnerComponent().getModel()
            
            var entity="/BusinessPartnerSet('" + oItem + "')/ToSalesOrders"

          oModel.read(entity,{
                 success:function(odata, response){ 
                    console.log(odata)
                    var oModel1=new sap.ui.model.json.JSONModel(odata)
                      that.getView().setModel(oModel1,"SOModel")
                 },
                 error:function(err){
                    console.log(err)

                 }

                

          })



        }

        





    });
});
