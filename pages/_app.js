import React from 'react'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'

import createEmotionCache from '../utility/createEmotionCache'
import '../styles/globals.css'
import SearchAppBar from '../components/AppBar'
import { AppWrapper } from '../src/context/state'
import theme from '../styles/theme/theme'
import MaterialUIDrawer from '../components/Drawer'
import Head from 'next/head'

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
          <Head>
            <meta charSet='utf-8' />
            <title>Travel App</title>
            <meta
              name='description'
              content='Most Visited Destinations in the world.'
            />
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1'
            />
          </Head>
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
