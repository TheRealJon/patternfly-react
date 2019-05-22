import { VictoryThemeInterface } from "victory";

interface ChartBaseThemeInterface extends VictoryThemeInterface {};
interface ChartDonutThemeInterface extends VictoryThemeInterface {};

interface ChartThemeColorInterface {
  blue: string;
  default: string;
  green: string;
  multi: string;
}

interface ChartThemeVariantInterface {
  dark: string;
  default: string;
  light: string;
}

export declare const ChartThemeColor: ChartThemeColorInterface;
export declare const ChartThemeVariant: ChartThemeVariantInterface;
export declare const ChartBaseTheme: ChartBaseThemeInterface;
export declare const ChartDonutTheme: ChartDonutThemeInterface;
