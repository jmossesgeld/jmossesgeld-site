---
title: "Rewriting My Payroll App - Day 4"
date: "2022-04-26"
summary: "After writing the useEmployees hook, it is about time that I finish constructing the EmployeeForm. What I plan is to use the same form for both the Add New Employee and Edit Employee. But how will I do that? It will be based on the "id" property which will be passed on the EmployeeForm which it will use to repopulate the employee data to be ready for editing. If there is no "id" property, the form will assume that a new employee is being registered and the form will be empty."
category: "Project Walkthrough"
---

# Day 4

### April 26, 2022

**12:32 PM**

After writing the useEmployees hook, it is about time that I finish constructing the EmployeeForm. What I plan is to use the same form for both the Add New Employee and Edit Employee. But how will I do that? It will be based on the "id" property which will be passed on the EmployeeForm which it will use to repopulate the employee data to be ready for editing. If there is no "id" property, the form will assume that a new employee is being registered and the form will be empty.

**4:30 PM**

This time, I will write another resuable hook called useInput, which will be primarily responsible for input validation.