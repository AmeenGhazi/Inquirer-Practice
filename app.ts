import inquirer from 'inquirer';

let user= await inquirer.prompt([
    {
        type: "input",
        name:"userName",
        message:"What is your name?",
        validate:(ans)=>{
            if(!ans){
                return "Please give your answer"
            }
            return true
        }
    },
    {
        type:"number",
        name:"userAge",
        message:"What is your age?",
        
    },
    {
        type:"list",
        name:"userAge",
        message:"What is your hobby?",
        choices:["cricket","football","vollyball"],
        default: "nothing"

    },
    {
        type:"checkbox",
        name:"userEmail",
        message:"What is your Email?",
        choices:["user@yahoo.com","user@gmail.com","user@hotmail.com"]
        
    }
])

console.log(user.userEmail)