
import './App.css'
import '@fontsource/roboto/900.css'
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar'
import { ThemeProvider } from '@emotion/react'
import { createTheme, Grid } from '@mui/material'
import Carousel from './components/Carousel/Carousel'
import { useMediaQuery } from '@mui/material';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})
function App() {
  const isXs = useMediaQuery('(max-width:600px)');


  return (
<ThemeProvider theme={darkTheme}>
      <ResponsiveAppBar  />
      {!isXs && <Carousel />}
      <Grid container spacing={2} >

        
      </Grid>
      

  </ThemeProvider>
  )
}

export default App
