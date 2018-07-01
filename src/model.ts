enum Options {
    CONTROLLER, MIDDLEWARE
}

enum Side {
    CLIENT, SERVER
}

enum InquirerType {
    INPUT = 'input',
    CONFIRM = 'confirm',
    LIST = 'list',
    RAWLIST = 'rawlist',
    PASSWORD = 'password'
}

interface ControllerConfig {
    option: Options.CONTROLLER;
    name: string;
}

interface MiddlewareConfig { 
    option: Options.MIDDLEWARE;
    name: string;
    cenas: string;
}

export {
    Options,
    Side,
    InquirerType,
    ControllerConfig,
    MiddlewareConfig
};