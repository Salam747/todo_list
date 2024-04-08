#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todos = ["Coding","Gym"];

async function createTodo(todos: string[]){
   do {
    let answer = await inquirer.prompt({
      type:"list",
      message:"slect an option",
      name:"option",
      choices:["add","update","view","delete"],
    });
    if (answer.option === "add"){
        let addMore = await inquirer.prompt({
            type:"input",
            message:"add task in the list",
            name: "addmore",
        });
        todos.push(addMore.addmore);
        todos.forEach((addmore) => console.log(addmore));
    }
    if(answer.option === "update"){
        let updateMore = await inquirer.prompt({
            type:"list",
            message:"update task in the list",
            name:"todos",
            choices:todos.map((item) => item),
        });
        let addMore = await inquirer.prompt({
            type:"input",
            message:"add items in the list",
            name:"todo",
        });
        let newtask = todos.filter((val) => val !== updateMore.todos);
        todos = [...newtask, addMore.todo];
    }
    if (answer.option === "view"){
        console.log(chalk.green("**TO DO LIST**"));
        console.log(chalk.blue(todos));
        console.log(chalk.yellow("********"));
    }
if(answer.option === "delete"){
    let deleteTask = await inquirer.prompt({
        type:"list",
        message:"delete task from the list",
        name: "deletetask",
        choices:todos.map((item) => item),
    });
    let newTask = todos.filter((val) => val !== deleteTask.deletetask);
    todos = [...newTask];
    console.log(todos);
    }
    }while (true);
}
createTodo(todos);
