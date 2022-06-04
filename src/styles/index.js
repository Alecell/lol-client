import { createGlobalStyle } from "styled-components";

import { FontStyles } from './font'
import { ResetStyles } from './reset'

export const GlobalStyles = createGlobalStyle`
  ${ResetStyles}
  ${FontStyles}
`