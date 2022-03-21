import React, { useState } from 'react'

import { Column, Input, Button, Row, Icons } from 'src/components'
import { useUser } from 'src/context'

const Login = () => {
  const { login } = useUser()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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
          onPress={() => login({ username, password })}
          variant='primary'
          height={42}
          my='8px'
        />
      </Column>
    </Column>
  )
}
export default Login
