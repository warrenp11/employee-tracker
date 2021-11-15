const db = require("./db/connection");

const inquirer = require("inquirer");

const cTable = require("console.table");

const mainPrompt = {
  // view all departments
  viewAllDepartments: "View All Departments",
  // view all roles,
  viewAllRoles: "View All Roles",
  // view all employees,
  viewAllEmployees: "View All Employees",
  // add a department,
  addDepartment: "Add A Deprtment",
  // add a role,
  addRole: "Add A Role",
  // add an employee,
  addEmployee: "Add An Employee",
  // update an employee role,
  updateEmployeeRole: "Update Employee Role",
  // remove an employee,
  removeEmployee: "Remove An Employee",
  //exit
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
        mainPrompt.updateEmployeeRole,
        mainPrompt.removeEmployee,
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
          // run function
          addDepartment();
          break;
        case mainPrompt.addRole:
          // run function
          break;
        case mainPrompt.addEmployee:
          // run function
          break;
        case mainPrompt.updateEmployeeRole:
          // run function
          break;
        case mainPrompt.removeEmployee:
          // run function
          break;
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
                    VALUES (?,?,?);
                    ;`;
      const params = [answers.department, answers.managerFirstName, answers.managerLastName];
      db.query(sql, params, (err, rows) => {
        // console.log(`
        //   VIEWING ALL DEPARTMENTS:
        // `);
        // console.table(rows);
      });
    })
    .then(start);
}

function viewAllDepartments() {
  const sql = `SELECT id, department_name FROM department`;
  db.query(sql, (err, rows) => {
    console.log(`
      VIEWING ALL DEPARTMENTS:
    `);
    console.table(rows);
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
  });
}

// // // GET all employees
// db.query(`SELECT * FROM employee`, (err, rows) => {
//   console.log(rows);
// });

// // // GET a single employee
// db.query(`SELECT * FROM employee WHERE id = 3`, (err, row) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(row);
// });

// // Create an employee
// const sql = `INSERT INTO employee (id, first_name, last_name)
//               VALUES (?,?,?)`;
// const params = [10, "Mr.", "Yellow"];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// // DELETE an employee
// db.query(`DELETE FROM employee WHERE id = ?`, 1, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected");
});
