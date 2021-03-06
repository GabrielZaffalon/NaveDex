import React from 'react'
import { ActivityIndicator, StatusBar, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'

import { AuthenticatedApp, UnauthenticatedApp } from 'src/navigators'
import { AppProviders, useUser } from 'src/context'
import { Loader, Column } from 'src/components'
import theme from 'src/theme'

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

const queryClient = new QueryClient()

const App = () => {
  const { user, isFetchingUser } = useUser()

  if (isFetchingUser) {
    return (
      <Column flex={1} alignItems='center' justifyContent='center'>
        <ActivityIndicator color='black' />
      </Column>
    )
  }
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
