frappe.pages['programing-page'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Demo Page',
		single_column: true
	});
	page.set_title('My Page');
	page.set_indicator('My Page', 'green');
	let $btn = page.set_primary_action('My Button', ()=> frappe.msgprint('Hello World'), 'octicon octicon-check');
	let $btnOne = page.set_secondary_action('Refresh', ()=> frappe.msgprint('Hello World'), 'octicon octicon-check');
	page.add_menu_item('My Menu', ()=> frappe.msgprint('Hello World'), true);
	page.add_action_item('My Action', ()=> frappe.msgprint('Hello World'), true);
	let field = page.add_field({
		label: 'My Field',
		fieldtype: 'Select',
		fieldname: 'my_field',
		options: ['Option 1', 'Option 2', 'Option 3'],
		onchange() {
			frappe.msgprint(field.get_value());
		}
	}); // add field

	// $(frappe.render_template('programing_page', {})).appendTo(page.main);

	$(frappe.render_template('programing_page', {
		data:"Hello World"
	})).appendTo(page.main);
}