import { ColorMode } from '@myra-ui/colors';
import { ConfigThemes } from '@myra-ui/system';

export type MyraUIPluginConfig = {
  prefix?: string;
  themes?: ConfigThemes;
  defaultTheme?: ColorMode;
  defaultColorMode?: ColorMode;
};