import * as Inquirer from 'inquirer';

import { Options, InquirerType, MiddlewareConfig, ControllerConfig } from '../model';

export default async (option: Options): Promise<MiddlewareConfig | ControllerConfig | null> => {

    switch(option){
        case Options.CONTROLLER:
            return {
                option,
                ...await prompt('Name ?', 'name'),
                ...await prompt('Outra coisa qq ?', 'qq')
            } as ControllerConfig;
        case Options.MIDDLEWARE:
            return {
                option,
                ...await prompt('Name ?', 'name'),
                ...await prompt('Outra coisa mIDDLE ?', 'cenas')
            } as MiddlewareConfig;
        default: 
            break;
    }

    return null;
}

const prompt = (questionText: string, id: string) => {
    const question: Inquirer.Question = {
        message: questionText,
        type: InquirerType.INPUT,
        name: id
    }
    
    return Inquirer.prompt(question);
}
