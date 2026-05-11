import { useState } from 'react'
import styled from 'styled-components'
import type { UserAccount } from '../types'

interface AuthPanelProps {
  onLogin: (user: UserAccount) => void
}

const demoUser: UserAccount = {
  id: '1',
  name: 'Bruno Kemel',
  email: 'bruno@email.com',
  username: 'devkemel',
  password: '123456',
}

export function AuthPanel({ onLogin }: AuthPanelProps) {
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [accounts, setAccounts] = useState<UserAccount[]>([demoUser])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  function clearFields() {
    setName('')
    setEmail('')
    setUsername('')
    setPassword('')
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setMessage('')

    if (mode === 'register') {
      if (!name || !email || !username || !password) {
        setMessage('Preencha todos os campos para criar sua conta.')
        return
      }

      const alreadyExists = accounts.some((account) => account.username === username)

      if (alreadyExists) {
        setMessage('Esse usuário já existe. Tente outro @user.')
        return
      }

      const newAccount: UserAccount = {
        id: crypto.randomUUID(),
        name,
        email,
        username,
        password,
      }

      setAccounts((current) => [...current, newAccount])
      onLogin(newAccount)
      return
    }

    const foundAccount = accounts.find(
      (account) => account.username === username && account.password === password,
    )

    if (!foundAccount) {
      setMessage('Usuário ou senha inválidos. Demo: devkemel / 123456')
      return
    }

    onLogin(foundAccount)
  }

  return (
    <AuthWrapper>
      <AuthCard>
        <Brand>DevKemel Old Blog</Brand>
        <Title>{mode === 'login' ? 'Entrar no blog' : 'Criar conta'}</Title>
        <Description>
          Um espaço simples para textos curtos, ideias soltas e posts com cara de internet antiga.
        </Description>

        <Tabs>
          <TabButton $active={mode === 'login'} onClick={() => { setMode('login'); clearFields(); }}>
            Login
          </TabButton>
          <TabButton $active={mode === 'register'} onClick={() => { setMode('register'); clearFields(); }}>
            Registrar
          </TabButton>
        </Tabs>

        <Form onSubmit={handleSubmit}>
          {mode === 'register' && (
            <>
              <Input placeholder="Nome" value={name} onChange={(event) => setName(event.target.value)} />
              <Input placeholder="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </>
          )}

          <Input placeholder="User" value={username} onChange={(event) => setUsername(event.target.value)} />
          <Input placeholder="Senha" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />

          {message && <Message>{message}</Message>}

          <SubmitButton>{mode === 'login' ? 'Entrar' : 'Criar conta'}</SubmitButton>
        </Form>
      </AuthCard>
    </AuthWrapper>
  )
}

const AuthWrapper = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
`

const AuthCard = styled.section`
  width: min(100%, 460px);
  background: #ffffff;
  border: 2px solid #ff9f1c;
  box-shadow: 10px 10px 0 #ffcf88;
  padding: 34px;
`

const Brand = styled.p`
  color: #f97316;
  font-family: Arial, sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 16px;
`

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1;
  margin-bottom: 12px;
`

const Description = styled.p`
  color: #6b4b2f;
  line-height: 1.6;
  margin-bottom: 24px;
`

const Tabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #ffd6a1;
  margin-bottom: 18px;
`

const TabButton = styled.button<{ $active: boolean }>`
  border: 0;
  padding: 12px;
  background: ${({ $active }) => ($active ? '#f97316' : '#fff8ef')};
  color: ${({ $active }) => ($active ? '#ffffff' : '#3b2a1c')};
  font-family: Arial, sans-serif;
  font-weight: 700;
`

const Form = styled.form`
  display: grid;
  gap: 12px;
`

const Input = styled.input`
  width: 100%;
  border: 1px solid #ffb65c;
  background: #fffdf8;
  padding: 13px 14px;
  outline-color: #f97316;
`

const Message = styled.p`
  background: #fff2df;
  border-left: 4px solid #f97316;
  color: #6b3b10;
  padding: 10px;
  font-size: 0.95rem;
`

const SubmitButton = styled.button`
  border: 0;
  background: #f97316;
  color: #ffffff;
  padding: 14px;
  font-family: Arial, sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  box-shadow: 4px 4px 0 #ffcf88;

  &:hover {
    transform: translate(-1px, -1px);
  }
`
