#! /usr/bin/env node
import inquirer from "inquirer";
let totalMoney = 10000;
let pinNo = 4444;
let input = await inquirer.prompt([{
        name: "num1",
        message: "Enter your pin",
        type: "number"
    }]);
if (input.num1 == pinNo) {
    console.log("wellcome to ATM menu");
    let input1 = await inquirer.prompt({
        name: "num2",
        message: "select which you want to do",
        type: "list",
        choices: ["withDrawn", "balance transfer", "balance inqurey"]
    });
    if (input1.num2 == "withDrawn") {
        let input2 = await inquirer.prompt([
            {
                name: "num3",
                message: "Enter Amount",
                type: "number",
            }
        ]);
        if (totalMoney > input2.num3)
            (totalMoney -= input2.num3),
                console.log("successed!  your remaining balance", +totalMoney);
        else {
            (totalMoney < input2.num3),
                console.log("insuficiant balance");
        }
    }
    else if (input1.num2 == "balance inqurey") {
        console.log("your balance is", +totalMoney);
    }
    else if (input1.num2 == "balance transfer") {
        let ans1 = await inquirer.prompt([{
                name: "num",
                type: "list",
                choices: ["easypaisa", "banktransfer", "jazzchase", "u paisa"],
                message: "enter number to transfer"
            },
            { name: "num1",
                type: "number",
                message: "enter number to transfer" },
            { name: "num2",
                type: "number",
                message: "enter amount"
            }]);
        if (totalMoney > ans1.num2)
            totalMoney -= ans1.num2,
                console.log("trasfer compeleted !your remaining balance is", +totalMoney);
        else if (totalMoney < ans1.num2) {
            console.log("insufficiant balance");
        }
    }
}
else
    (console.log("wrong pin"));
