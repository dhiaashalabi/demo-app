// Copyright (c) 2022, D-code and contributors
// For license information, please see license.txt

frappe.ui.form.on('Client Side Scripting', {
	enable: function (frm) {
		frm.set_df_property("first_name", "reqd", frm.doc.enable ? 1 : 0);
	},
	refresh: function (frm) {
		frm.add_custom_button(__("Show"), function () {
			frappe.msgprint(frm.doc.first_name);
		});
		frm.add_custom_button(__("Click One"), function () { }, "Click");
		frm.add_custom_button(__("Click Two"), function () { }, "Click");
	}
});
