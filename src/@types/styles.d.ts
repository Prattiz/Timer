import "styled-components";
import { defautTheme } from "../styles/default";

type themeType = typeof defautTheme

declare module "styled-components"{
    export interface defautTheme extends themeType{}
}
