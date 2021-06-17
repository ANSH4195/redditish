import { createMuiTheme } from '@material-ui/core/styles'

const customTheme = (darkMode) =>
  createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#ffb28a' : '#FF5700'
      },
      secondary: {
        main: darkMode ? '#f3b9bb' : '#941a1c'
      },
      background: {
        default: darkMode ? '#000000' : '#ffffff',
        paper: darkMode ? '#121212' : '#f3f3f3'
      }
    },
    overrides: {
      MuiTypography: {
        root: {
          wordBreak: 'break-word'
        }
      }
    }
  })

export default customTheme
