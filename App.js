import React from 'react'
import { StatusBar, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'

import { AuthenticatedApp, UnauthenticatedApp } from 'src/navigators'
import { AppProviders, useUser } from 'src/context'
import { Loader, Column } from 'src/components'
import theme from 'src/theme'

const queryClient = new QueryClient()

const App = () => {
  const { user } = useUser()
  console.log({ user })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='dark-content' />
      <NavigationContainer>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default () => (
  <QueryClientProvider client={queryClient}>
    <AppProviders>
      <App />
    </AppProviders>
  </QueryClientProvider>
)
