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

**2:41 PM**

There is one thing I missed - and that is to add listeners for the custom hook. In order for the other components to always have an updated state of the custom hook, there should some sort of event listener that will fire whenever other components update the state. To do that, I have to create a global variable named "listeners" which is an array of Dispatch<SetStateAction<{}>> and whenever I initialize the hook from a component, it will add a setState function into the listener; then whenever a component use a dispatch action, it will call all the setState functions from listeners. In this way, all the active components using the custom hook will have their state updated. For cleanup, the setState function will be removed from the listeners once the component is dismounted by using the return function of useEffect.

**4:30 PM**

This time, I will write another resuable hook called useInput, which will be primarily responsible for input validation.
