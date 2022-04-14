import React from 'react'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'

import createEmotionCache from '../utility/createEmotionCache'
import '../styles/globals.css'
import SearchAppBar from '../components/AppBar'
import { AppWrapper } from '../src/context/state'
import theme from './theme'

const clientSideEmotionCache = createEmotionCache()

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <CssBaseline />
          <SearchAppBar />
          <Component {...pageProps} />
        </AppWrapper>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
