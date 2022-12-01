# Copyright (c) 2022, D-code and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class ClientSideScripting(Document):
    pass

@frappe.whitelist()
def frappe_call():
	return "Hello World"
