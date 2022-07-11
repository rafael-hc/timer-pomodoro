import { ThemeProvider } from 'styled-components'

import { GlobalStyled } from './style/global'
import { defaultTheme } from './style/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>oi</div>

      <GlobalStyled />
    </ThemeProvider>
  )
}
