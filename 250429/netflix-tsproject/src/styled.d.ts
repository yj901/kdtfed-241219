import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    red: string;
    black: {
      veryDark: string;
      darker: string;
      light: string;
    };
    white: {
      darker: string;
      lighter: string;
    };
  }
}
