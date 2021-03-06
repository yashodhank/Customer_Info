frappe.ui.form.on("Item Category","validate",function(frm){	
	if(cur_frm.doc.__islocal){
		return frappe.call({
			method: "customer_info.customer_info.doctype.item_category.item_category.new_item_group",
			args: {
				"category_name":cur_frm.doc.category_name
			}
		})
	}	
})	

frappe.ui.form.on("Item Category", "period", function(frm){
	if(cur_frm.doc.period){
	    frappe.call({
	        method: "frappe.client.get_value",
	        args: {
	            doctype: "Period",
	            fieldname: "period",
	            filters: { name: cur_frm.doc.period },
	        },
	       	callback: function(res){
	          	if (res && res.message){
	          		cur_frm.doc.period_value = res.message['period']
	          		refresh_field("period_value");
	           	}
	       	}  	
	    });
	}    
});


frappe.ui.form.on("Item Category", "ratio", function(frm){
    if(cur_frm.doc.ratio){
	    frappe.call({
	        method: "frappe.client.get_value",
	        args: {
	            doctype: "Ratio",
	            fieldname: "ratio",
	            filters: { name: cur_frm.doc.ratio },
	        },
	       	callback: function(res){
	          	if (res && res.message){
	          		cur_frm.doc.ratio_value = res.message['ratio']
	          		refresh_field("ratio_value");
	           	}
	       	}  	
	    });
	}    
});


frappe.ui.form.on("Item Category", "category_name", function(frm){
	if(cur_frm.doc.category_name){
	    frappe.call({
	        method: "customer_info.customer_info.doctype.item_category.item_category.get_category_name",
	        args: {
	            "name":cur_frm.doc.category_name
	        },
	       	callback: function(r){
	       		if(r.message){
	     			msgprint(r.message)
	     			cur_frm.doc.category_name = ""
	     			refresh_field("category_name")
	       		}
	       	}  	
	    });
	}
})