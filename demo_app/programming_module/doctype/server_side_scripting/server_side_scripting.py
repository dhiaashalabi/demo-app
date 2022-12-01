# Copyright (c) 2022, D-code and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class ServerSideScripting(Document):
	# def validate(self):
	# 	frappe.msgprint("First Name: " + self.first_name)

	def validate(self):
		# self.get_document()
		# self.new_document()
		# frappe.delete_doc("Client Side Scripting", "PR-0003")
		# for row in self.get('family_members'):
		# 	frappe.msgprint("First Name: " + row.name1)
		# self.get_value()
		# self.set_value()
		# if frappe.db.exists("Client Side Scripting", "PR-0001"):
		# 	frappe.msgprint("Document Exists")
		# else:
		# 	frappe.throw("Document Does Not Exists")
		# doc_count = frappe.db.count("Client Side Scripting")
		# frappe.msgprint("Document Count: " + str(doc_count))
		self.sql()

	def get_document(self):
		doc = frappe.get_doc("Client Side Scripting", self.client_side_doc)
		frappe.msgprint("First Name: " + doc.first_name + str(doc.age))

	def save_ducument(self):
		doc = frappe.get_doc("Client Side Scripting", self.client_side_doc)
		doc.first_name = 'John'
		doc.save()

	def new_document(self):
		doc = frappe.new_doc('Client Side Scripting')
		doc.first_name = 'Jake'
		doc.last_name = 'Smith'
		doc.age = 25
		doc.append("family_members", {
			"name1": "John",
			"relation": "Father",
			"age": 50
		})
		doc.insert()

	def delete_document(self):
		frappe.delete_doc("Client Side Scripting", "PR-0003")

	def db_set_document(self):
		doc = frappe.get_doc("Client Side Scripting", "PR-0001")
		doc.db_set("first_name", "John")

	def get_list(self):
		doc = frappe.get_list(
					"Client Side Scripting", 
                    filters={"first_name": "John"},
                    fields=["first_name", "last_name", "age"]
                )
		for row in doc:
			frappe.msgprint("First Name: " + row.first_name)

	def get_value(self):
		first_name, age = frappe.db.get_value(
					"Client Side Scripting", 
					"PR-0001",
					["first_name", "age"]
				)
		frappe.msgprint("First Name: " + first_name+ " Age: " + str(age))

	def set_value(self):
		frappe.db.set_value(
					"Client Side Scripting", 
					"PR-0001",
					"first_name",
					"John"
				)

	def sql(self):
		doc = frappe.db.sql(
					"SELECT * FROM `tabClient Side Scripting` WHERE first_name = 'John'",
					as_dict=True
				)
		for row in doc:
			frappe.msgprint("First Name: " + row.first_name)

	@frappe.whitelist()
	def frm_call(self):
		self.mobile = 1234567890
		return "Hello From Server Side Scripting"