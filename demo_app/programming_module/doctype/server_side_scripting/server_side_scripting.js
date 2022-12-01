// Copyright (c) 2022, D-code and contributors
// For license information, please see license.txt

frappe.ui.form.on('Server Side Scripting', {
	// enable: function(frm) {
	// 	frm.call({
	// 		doc: frm.doc,
	// 		method: "frm_call",
	// 		args:{
	// 			msg: "Hello World"
	// 		},
	// 		freeze: true,
	// 		freeze_message: __("Please wait..."),
	// 		callback: function(r) {
	// 			frappe.msgprint(r.message)
	// 		}
	// 	});
	// },
	enable: function(frm) {
		frappe.call({
			method: "demo_app.programming_module.doctype.client_side_scripting.client_side_scripting.frappe_call",
			args:{
				msg: "Hello World"
			},
			freeze: true,
			freeze_message: __("Please wait..."),
			callback: function(r) {
				frappe.msgprint(r.message)
			}
		});
	}
});
