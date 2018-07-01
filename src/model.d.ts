declare enum Options {
    CONTROLLER = 0,
    MIDDLEWARE = 1,
}
declare enum Side {
    CLIENT = 0,
    SERVER = 1,
}
declare enum InquirerType {
    INPUT = "input",
    CONFIRM = "confirm",
    LIST = "list",
    RAWLIST = "rawlist",
    PASSWORD = "password",
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
export { Options, Side, InquirerType, ControllerConfig, MiddlewareConfig };
