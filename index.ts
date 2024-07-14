#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"

let MyBalance : number = 10000 ;

console.log(chalk.white.bold (`Your Current Balance is : ${MyBalance}`));

let MYPin : number = 1234 ;

const Enterpin = await inquirer.prompt([{
    name : "pin",
    type : "number" , 
    message : "Please Enter Your Pin"
}])

if(Enterpin.pin === MYPin){
    console.log(chalk.green.bold("Correct Pin Code"))

const  Enteramount = await inquirer.prompt([{
    name : "amount",
    type : "number",
    message : "Please Enter Your Amount"
}])
if(Enteramount.amount > MyBalance){
    console.log(chalk.red.italic("Insufficient Balance"))
}else{
    let remaining = MyBalance - Enteramount.amount;
    console.log(chalk.green(`Your Remaining Balance is ${remaining}`))
}
{
    const EnterAns = await inquirer.prompt([{
        name : "Ans",
        type : "list",
        choices : ["withdraw" , "Deposite check and cash","check balance"]
    }])

if(EnterAns.Ans === "withdraw"){
    console.log("You are in withdraw section")
}
if(EnterAns.Ans === "Deposite check and cash"){
    console.log(chalk.green.bold("You are in deposite section"))
}
if(EnterAns.Ans === "check balance"){
    console.log(chalk.green.bold("You are in check balance section"))
}

}
console.log(chalk.blue.bold("Thank you for using our services! ")) 

}

else {
    console.log("Incorrect Pin Code")
}