---
title: "Rewriting My Payroll App - Day 3"
date: "2022-04-22"
summary: "I have done preparing the Employees table but I still yet to finish the implementation of the add and edit employees. This time I will setup Redux and Redux.js toolkit for the app-wide state management just like in the previous version of the app. My targets for today are to finish the implementation of add/edit employees and integrating the data to store."
category: "Project Walkthrough"
---

# Day 3

### April 22, 2022

**2:26 PM**

I have done preparing the Employees table but I still have to finish the implementation of the add and edit employees. This time I will setup Redux and Redux.js toolkit for app-wide state management just like in the previous version of the app. My targets for today are to finish the implementation of add/edit employees and integrating the data to store.

**5:50 PM**

After testing, I realized that Redux is too much and is not necessary for a Next.js app. I have decided to create custom hooks instead for handling local data.

**6:40 PM**

I have finished implementing the useEmployees hook. On the next day, I will try finish constructing the employee form.