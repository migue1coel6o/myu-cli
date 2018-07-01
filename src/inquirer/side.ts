import * as Inquirer from 'inquirer';

import { Options, Side, InquirerType } from '../model';

export default async () => {
    const choices: Inquirer.ChoiceType[] = [
        {
            name: 'Server',
            value: Side.SERVER
        },
        {
            name: 'Client',
            value: Side.CLIENT
        }
    ]
    
    const question: Inquirer.Question = {
        message: "Client/Server Side ?",
        type: InquirerType.LIST,
        name: 'option',
        choices: choices
    }
    
    return (await Inquirer.prompt(question)).option;
}

