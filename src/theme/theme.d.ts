import 'styled-components';
import { ThemeEnum, ThemeType } from './themes';

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {
        type: ThemeEnum;
    }
}
