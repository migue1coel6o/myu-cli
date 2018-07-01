import * as inquirer from "inquirer";

import { Options, ControllerConfig, MiddlewareConfig } from "./src/model";
import "./src/utils/progressBar";
import options from "./src/inquirer/options";
import config from "./src/inquirer/config";
import side from "./src/inquirer/side";

const main = async () => {
  (<any>global).ProgressBar.startProgressBar("Init");
  var result = await config(await options(await side()));
  (<any>global).ProgressBar.updateProgressBar(100, "Finished");
};

//main();
let cenas = 0;
(<any>global).ProgressBar.startProgressBar("Init");
setInterval(() => {
  cenas += 20;
  (<any>global).ProgressBar.updateProgressBar(cenas, "Outras Cenas");
}, 5000);
