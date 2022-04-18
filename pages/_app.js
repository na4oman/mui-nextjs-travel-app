import React from 'react'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'

import createEmotionCache from '../utility/createEmotionCache'
import '../styles/globals.css'
import SearchAppBar from '../components/AppBar'
import { AppWrapper } from '../src/context/state'
import theme from '../styles/theme/theme'
import MaterialUIDrawer from '../components/Drawer'

const clientSideEmotionCache = createEmotionCache()

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const [showDrawer, setShowDrawer] = React.useState(false)

  function toggleDrawerHandler(event) {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setShowDrawer(prevState => !prevState)
  }

  function closeDrawerHandler() {
    // console.log('APPjs closeDrawerHandler')
    setShowDrawer(false)
  }

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <CssBaseline />
          {showDrawer && (
            <MaterialUIDrawer
              state={showDrawer}
              onCloseDrawer={closeDrawerHandler}
            />
          )}
          <SearchAppBar onToggleDrawer={toggleDrawerHandler} />
          <Component {...pageProps} />
        </AppWrapper>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
