
import validation from validation;
import chalk from chalk;

const getuserEmail = function(name){
    if(isEmail(name)){
        console.log(chalk.green.bold('YOU can access'));
    }
    else{
        console.log(chalk.red.bold('this email invalid'))
    }
}


export{getuserEmail}