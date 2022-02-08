import React, { useContext, useState } from 'react'

import { useQuery, useQueryClient, useMutation } from 'react-query'

import { getMe, login as loginService } from 'src/services/user'
import { setToken, clearToken } from 'src/utils/auth'

const UserContext = React.createContext()

const UserProvider = props => {
  const queryClient = useQueryClient()

  const [user, setUser] = useState(false)

  const login = credentials => {
    setUser(true)
  }

  const logout = () => {
    clearToken()
    // queryClient.setQueryData('user', null)
  }

  return <UserContext.Provider value={{ user, login, logout }} {...props} />
}

const useUser = () => useContext(UserContext)

export { UserProvider, useUser }
