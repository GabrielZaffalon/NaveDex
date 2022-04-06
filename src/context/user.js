import React, { useContext, useEffect, useState } from 'react'

import { login } from 'src/services'
import { setToken, clearToken, getToken } from 'src/utils'

const UserContext = React.createContext()

const UserProvider = props => {
  const [user, setUser] = useState(false)
  const [isFetchingUser, setIsFetchingUser] = useState(false)

  const fetchUser = async () => {
    try {
      setIsFetchingUser(true)
      const token = await getToken()

      if (token) {
        setUser(true)
      }
      console.tron.log(token)
    } catch (error) {
      console.tron.log(error)
    } finally {
      setIsFetchingUser(false)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const loginUser = async credentials => {
    const response = await login(credentials)
    await setToken(response.token)
    console.tron.log({ response })
    setUser(response)
  }

  const logout = () => {
    clearToken()
    setUser(null)
  }

  return <UserContext.Provider value={{ user, loginUser, logout, isFetchingUser }} {...props} />
}

const useUser = () => useContext(UserContext)

export { UserProvider, useUser }
