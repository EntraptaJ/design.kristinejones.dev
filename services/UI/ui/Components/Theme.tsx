// UI/ui/Components/Theme.tsx
// KristianFJones <me@kristianjones.xyz>
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#18ffff',
      light: '#76ffff',
      dark: '#00cbcc'
    },
    secondary: {
      main: '#1de9b6',
      light: '#6effe8',
      dark: '#00b686'
    },
    background: {
      default: '#111111'
    }
  }
});
