import './App.css'
import '@fontsource/roboto/900.css'
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar'
import { ThemeProvider } from '@emotion/react'
import { createTheme, Grid } from '@mui/material';
import Carousel from './components/Carousel/Carousel'
import { useMediaQuery } from '@mui/material';
import Content from './components/Content/Content'
import Sidebar from './components/Sidebar/Sidebar'

import Footer from './components/Footer/Footer';
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
      <div style={{ paddingTop: '100px', marginBottom: '20px' }}>
        {!isXs && <Carousel />}
        <Grid container spacing={2}>
          <Grid size={9}>
            <Content />
          </Grid>
          <Grid size={3}>
            <Sidebar />
          </Grid>
          <Grid size={12} style={{ marginTop: '20px' }}>
            <Footer />
          </Grid>
        </Grid>
      </div>
  </ThemeProvider>
  )
}

export default App
