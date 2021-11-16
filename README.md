# Employee Tracker

![Code badge](https://img.shields.io/github/languages/top/warrenp11/employee-tracker) 
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Credits](#credits)
* [Project Insight](#project-insight)
* [Questions](#questions)
* [License](#license)

## Description
This project was designed as a homework assignment for Rutgers Coding Boot Camp. We were challenged to build a command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.

No starter code was provided for this assignment.

        User Story
        AS A business owner
        I WANT to be able to view and manage the departments, roles, and employees in my company
        SO THAT I can organize and plan my business

        Acceptance Criteria
        GIVEN a command-line application that accepts user input
        WHEN I start the application
        THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
        WHEN I choose to view all departments
        THEN I am presented with a formatted table showing department names and department ids
        WHEN I choose to view all roles
        THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
        WHEN I choose to view all employees
        THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
        WHEN I choose to add a department
        THEN I am prompted to enter the name of the department and that department is added to the database
        WHEN I choose to add a role
        THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
        WHEN I choose to add an employee
        THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
        WHEN I choose to update an employee role
        THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

## Installation
1. Copy one of the clone links from the GitHub [repository](https://www.github.com/warrenp11/employee-tracker)
* HTTPS `https://github.com/warrenp11/employee-tracker.git`
* SSH  `git@github.com:warrenp11/employee-tracker.git` 

2. In a new Bash or Terminal Window, navigate to the directory where the repository will be added

3. Clone the repository with the following command:

           git clone <username@host:/path/to/repository>

4. Open repository in preferred code editor

5. In the terminal, navigate to the root folder, and install the dependencies with the command:

           npm install

## Usage
When you're ready to run the application, from the root directory enter either of the following commands into your command line:

           node server.js
           npm start

[Click Here]() to see a video demonstration of the application in use

## Tests

## Credits
[Inquirer](https://www.npmjs.com/package/inquirer)
[Dotenv](https://www.npmjs.com/package/dotenv)
[MySQL](https://dev.mysql.com/)
[Console.table](https://www.npmjs.com/package/console.table)


## Project Insight
I had a lot of fun with this assignment. Although challenging I feel as though I'm making strides to improving as a developer with every project. That said, this project is not operating at 100% efficiency. There are a few bugs that I would still need to fix, however, for the sake of time I've submitted what I have and intend to fix said bugs when time permits. I have some slight issues with the functionality of the Inquirer prompt; the main prompt won't close when the user selects to use the "Add" option, whether it's adding a department, role, or employee. Again, I intend to revist this project and fix the bug issue at some point in time.

## Questions
If you have any questions about this project contact me directly at warrenp11@gmail.com. 
  
Visit this project's repository at https://www.github.com/warrenp11/employee-tracker

View more of my projects at https://www.github.com/warrenp11

## License
Licensed under the [MIT](./license.txt/) license.