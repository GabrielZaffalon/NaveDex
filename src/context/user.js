import React, { useContext, useState } from 'react'

import { useQuery, useQueryClient, useMutation } from 'react-query'

import { getMe, login as loginService } from 'src/services/user'
import { setToken, clearToken } from 'src/utils/auth'
import { login } from 'src/services'

const UserContext = React.createContext()

const UserProvider = props => {
  const queryClient = useQueryClient()

  const [user, setUser] = useState(false)

  const loginUser = async credentials => {
    const response = await login(credentials)
    setUser(response)
  }

  const logout = () => {
    clearToken()
    setUser(null)
    // queryClient.setQueryData('user', null)
  }

  return <UserContext.Provider value={{ user, loginUser, logout }} {...props} />
}

const useUser = () => useContext(UserContext)

export { UserProvider, useUser }
