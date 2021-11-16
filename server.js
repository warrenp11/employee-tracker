const db = require("./db/connection");

const inquirer = require("inquirer");

const cTable = require("console.table");

const mainPrompt = {
  viewAllDepartments: "View All Departments",
  viewAllRoles: "View All Roles",
  viewAllEmployees: "View All Employees",
  addDepartment: "Add A Deprtment",
  addRole: "Add A Role",
  addEmployee: "Add An Employee",
  // updateEmployeeRole: "Update Employee Role",
  // removeEmployee: "Remove An Employee",
  exit: "Exit",
};

function start() {
  inquirer
    .prompt({
      name: "response",
      type: "list",
      message: "What would you like to do?",
      choices: [
        mainPrompt.viewAllDepartments,
        mainPrompt.viewAllRoles,
        mainPrompt.viewAllEmployees,
        mainPrompt.addDepartment,
        mainPrompt.addRole,
        mainPrompt.addEmployee,
        // mainPrompt.updateEmployeeRole,
        // mainPrompt.removeEmployee,
        mainPrompt.exit,
      ],
    })
    .then((answer) => {
      console.log("answer: ", answer);
      // Add swtich case
      switch (answer.response) {
        case mainPrompt.viewAllDepartments:
          viewAllDepartments();
          break;
        case mainPrompt.viewAllRoles:
          viewAllRoles();
          break;
        case mainPrompt.viewAllEmployees:
          viewAllEmployees();
          break;
        case mainPrompt.addDepartment:
          addDepartment();
          break;
        case mainPrompt.addRole:
          addRole();
          break;
        case mainPrompt.addEmployee:
          addEmployee();
          break;
        // case mainPrompt.updateEmployeeRole:
        //   break;
        // case mainPrompt.removeEmployee:
        //   break;
        case mainPrompt.exit:
          db.end();
          break;
      }
    });
}

start();

function addDepartment() {
  inquirer
    .prompt([
      {
        name: "department",
        type: "input",
        message: "Enter the name of the department (required)",
      },
      {
        name: "managerFirstName",
        type: "input",
        message: "What is the manager's first name? (required)",
      },
      {
        name: "managerLastName",
        type: "input",
        message: "What is the manager's last name? (required)",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const sql = `INSERT INTO department (department_name, manager_f_name, manager_l_name)
                    VALUES (?,?,?)`;
      const params = [
        answers.department,
        answers.managerFirstName,
        answers.managerLastName,
      ];
      db.query(sql, params, (err, rows) => {});
    })
    .then(start());
}

function addRole() {
  inquirer
    .prompt([
      {
        name: "roleTitle",
        type: "input",
        message: "What is the title of the role? (required)",
      },
      {
        name: "roleSalary",
        type: "input",
        message: "What is the role's salary? (required)",
      },
      {
        name: "departmentId",
        type: "input",
        message: "What is the department id for the role? (required)",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const sql = `INSERT INTO role (title, salary, department_id)
                    VALUES (?,?,?)`;
      const params = [
        answers.roleTitle,
        answers.roleSalary,
        answers.departmentId,
      ];
      db.query(sql, params, (err, rows) => {});
    })
    .then(start());
}

function addEmployee() {
  console.log(`
      ADDING AN EMPLOYEE:
    `);
  inquirer
    .prompt([
      {
        name: "employeeFirstName",
        type: "input",
        message: "What is the employee's first name? (required)",
      },
      {
        name: "employeeLastName",
        type: "input",
        message: "What is the employee's last name? (required)",
      },
      {
        name: "roleId",
        type: "input",
        message: "What is the role id for this employee? (required)",
      },
      {
        name: "departmentId",
        type: "input",
        message: "What is department id for this employee? (required)",
      },
    ])
    .then((answers) => {
      const sql = `INSERT INTO employee (first_name, last_name, role_id, department_id)
                    VALUES (?,?,?,?)`;
      const params = [
        answers.employeeFirstName,
        answers.employeeLastName,
        answers.roleId,
        answers.departmentId,
      ];
      db.query(sql, params, (err, row) => {});
    })
    .then(start());
}

function viewAllDepartments() {
  const sql = `SELECT id, department_name FROM department`;
  db.query(sql, (err, rows) => {
    console.log(`
      VIEWING ALL DEPARTMENTS:
    `);
    console.table(rows);
    start();
  });
}

function viewAllRoles() {
  const sql = `SELECT role.*, department.department_name
                FROM role
                LEFT JOIN department 
                ON role.department_id = department.id`;
  db.query(sql, (err, rows) => {
    console.log(`
      VIEWING ALL ROLES:
    `);
    console.table(rows);
    start();
  });
}

function viewAllEmployees() {
  const sql = `SELECT employee.*, role.title, role.salary, department.department_name, department.manager_f_name, manager_l_name
                FROM employee
                LEFT JOIN role
                ON employee.role_id = role.id
                LEFT JOIN department
                ON employee.department_id = department.id               
                `;
  db.query(sql, (err, rows) => {
    console.log(`
      VIEWING ALL EMPLOYEES:
    `);
    console.table(rows);
    start();
  });
}

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected");
});
