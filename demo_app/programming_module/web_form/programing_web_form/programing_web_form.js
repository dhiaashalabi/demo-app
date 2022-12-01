frappe.ready(function() {
	frappe.web_form.after_load = () =>{
		frappe.msgprint("Hello World");
	};
	frappe.web_form.after_load = () =>{
		frappe.web_form.on('enable', (field, value)=>{
			frappe.msgprint("Hello World");
		});
		frappe.web_form.on('dob', (field, value)=>{
			if(value){
				dob = new Date(value);
				var today = new Date();
				var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
				frappe.web_form.set_value('age', age);
			}
		});
	};

	frappe.web_form.validate = () =>{
		email_id = frappe.web_form.get_value('email');
		var pattern = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
		if(!pattern.test(email_id)){
			frappe.msgprint("Invalid Email");
			return false;
		}
		return true;
	};
})