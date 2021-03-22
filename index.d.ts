declare interface tricolors {
  red(msg: string): string;
  green(msg: string): string;
  blue(msg: string): string;
  redLog(msg: string): void;
  greenLog(msg: string): void;
  blueLog(msg: string): void;
}