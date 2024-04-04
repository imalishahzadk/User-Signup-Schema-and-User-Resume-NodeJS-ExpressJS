Web Application Framework (WAF) – Fall 2022
Lab Task (29 December 2022)
Part-A
1. Create and implement database schema for user signup.
2. Create and implement database schema for the user profile part of a web application.
The following shall be the minimum profile data criteria:
a. Name of the user
b. Gender
c. City
d. Date of birth
e. Occupation
f. Any other information you find suitable.
Make sure that your database schemas are normalized. For example, you shall not add
city data directly in the user collection (table) but make a separate collection for city
names and city codes and use those city codes as references in the user table.
3. Create the Model part (MVC) of the application for parts 1 and 2 named as
‘yourNameModel.js’. The model part shall include data structures corresponding to
your designed/implemented database schema and methods providing data
manipulations in the database. (No business logic in the model part)
4. Create a controller part (MVC) for parts 1 and 2 named as ‘yourNameController.py’.
The controller part shall include data validations and business logic (if applicable).
Interaction with the database shall be through the model part, not directly.
5. Create necessary views in a separate folder named views using the pug template
engine. Make views reasonably interactive and attractive using CSS.
Part-B
Use PUG template engine, MVC architectural design pattern, MongoDB, ExpressJS for this
part. Store a Dynamic CV from the view to the database first. Your view should then give
different filters to search for relevant CVs. The CV content should include the following
sections:
Academic Qualifications
Professional Experience
Skills
Software Projects Undertaken
Spoken Languages
Hobbies
References
All of these sections should have forms. The forms can be filled by the user to store in a
database. Give search facilities to search CVs for relevant posts using different queries.
