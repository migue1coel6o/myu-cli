import * as Inquirer from 'inquirer';

import { Options, Side, InquirerType } from '../model';

export default async (side: Side) => {
    let choices: Inquirer.ChoiceType[];
    let question: Inquirer.Question;

    if(side == Side.SERVER){
        choices = [
            {
                name: 'Controller',
                value: Options.CONTROLLER
            },
            {
                name: 'Middleware',
                value: Options.MIDDLEWARE
            }
        ]
        
        question = {
            message: "What you want to add ?",
            type: InquirerType.LIST,
            name: 'option',
            choices: choices
        }
    }
    
    return (await Inquirer.prompt(question)).option;
}

