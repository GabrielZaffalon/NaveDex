import React, { useState } from 'react'

import { Column, Input, Button, Row, Icons } from 'src/components'
import { useUser } from 'src/context'

const Login = () => {
  const { loginUser } = useUser()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const login = async credentials => {
    try {
      setIsLoading(true)
      await loginUser(credentials)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Column flex={1} justifyContent='center' justifyContent='space-evenly' p={40}>
      <Row width='100%' justifyContent='center'>
        <Icons icon='logo' height='40px' width='156px' />
      </Row>
      <Column py={32}>
        <Input value={username} onChange={setUsername} label='E-mail' placeholder='E-mail' />
        <Input
          value={password}
          onChange={setPassword}
          secureTextEntry
          label='Senha'
          placeholder='Senha'
        />
        <Button
          text='Entrar'
          onPress={() => login({ email: username, password })}
          variant='primary'
          height={42}
          my='8px'
          isLoading={isLoading}
        />
      </Column>
    </Column>
  )
}
export default Login
