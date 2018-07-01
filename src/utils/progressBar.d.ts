/// <reference path="../entities.d.ts" />
export default class ProgressBar implements ProgressBarInterface {
    private ui;
    private perc;
    private label;
    private cont;
    private getText;
    private timeoutFunc;
    updateProgressBar: (perc: number, label: string, cont?: number) => void;
    startProgressBar: (label?: string, cenas?: string) => void;
}
