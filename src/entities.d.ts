declare interface ProgressBarInterface {
  updateProgressBar: (perc: number, label: string, cont = 1) => void;
  startProgressBar: (label?: string) => void;
}
