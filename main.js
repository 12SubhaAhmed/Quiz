#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright("\n\t*****Welcome to my Quiz System*****\t\n"));
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "\nWhat is typescript?\n",
        choices: ["A superset of javascript", "A database management system", "A programing language based on c#", "A framework"]
    },
    {
        name: "question_2",
        type: "list",
        message: "\nWhat is the file extention for Typescript files?\n",
        choices: [".html", ".css", ".ts", ".js"]
    },
    {
        name: "question_3",
        type: "list",
        message: "\nWhich of these are supported in typescript?\n",
        choices: ["string", "boolean", "void", "all of above"]
    },
    {
        name: "question_4",
        type: "list",
        message: "\nTypescript code is compiled into:\n",
        choices: ["Machine code", "Assembly code", "Javascript", "Typescript bytecode"]
    },
    {
        name: "question_5",
        type: "list",
        message: "\n_____ is required to install typescript:\n",
        choices: ["npm", "nmp", "npn", "nxp"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "A superset of javascript":
        console.log("1.Correct");
        ++score;
        break;
    default:
        console.log("1.Incorrect");
}
switch (quiz.question_2) {
    case ".ts":
        console.log("2.Correct");
        ++score;
        break;
    default:
        console.log("2.Incorrect");
}
switch (quiz.question_3) {
    case "all of above":
        console.log("3.Correct");
        ++score;
        break;
    default:
        console.log("3.Incorrect");
}
switch (quiz.question_4) {
    case "Javascript":
        console.log("4.Correct");
        ++score;
        break;
    default:
        console.log("4.Incorrect");
}
switch (quiz.question_5) {
    case "npm":
        console.log("5.Correct");
        ++score;
        break;
    default:
        console.log("5.Incorrect");
}
;
console.log(chalk.green(`\nYour score: ${score}\n`));
