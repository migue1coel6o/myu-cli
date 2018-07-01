/// <reference path="../entities.d.ts" />

import * as inquirer from "inquirer";

export default class ProgressBar implements ProgressBarInterface {
  private ui;

  private perc: number = 0;
  private label: string = "";
  private cont = 1;

  private getText = (perc: number, label: string, cont: number) =>
    `[${perc}%] ${label}${".".repeat(cont)}`;

  private timeoutFunc = () => {
    this.cont++;
    if (this.cont > 3) this.cont = 1;
    this.updateProgressBar(this.perc, this.label, this.cont);
  };

  updateProgressBar = (perc: number, label: string, cont = 1) => {
    this.perc = perc;
    this.label = label;
    this.ui.updateBottomBar(this.getText(perc, label, cont));
  };

  startProgressBar = (label?: string) => {
    this.ui = new inquirer.ui.BottomBar();
    this.cont = 1;
    this.perc = 0;
    this.label = label || "";
    setInterval(this.timeoutFunc, 1000);
    this.updateProgressBar(this.perc, this.label);
  };
}

(<any>global).ProgressBar = new ProgressBar();
