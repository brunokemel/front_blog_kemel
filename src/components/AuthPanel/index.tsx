import { useState } from 'react'
import type { UserAccount } from '../../types'
import * as S from './styles'

interface AuthPanelProps {
  initialMode: 'login' | 'register'
  onLogin: (user: UserAccount) => void
  onClose: () => void
}

const demoUser: UserAccount = {
  id: '1',
  name: 'Bruno Kemel',
  email: 'bruno@email.com',
  username: 'devkemel',
  password: '123456',
}

export function AuthPanel({ initialMode, onLogin, onClose }: AuthPanelProps) {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode)
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

  function changeMode(nextMode: 'login' | 'register') {
    setMode(nextMode)
    clearFields()
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
    <S.AuthWrapper role="dialog" aria-modal="true" aria-label={mode === 'login' ? 'Entrar no blog' : 'Criar conta'}>
      <S.AuthCard>
        <S.CloseButton type="button" onClick={onClose} aria-label="Fechar login">
          ×
        </S.CloseButton>
        <S.Brand>DevKemel Old Blog</S.Brand>
        <S.Title>{mode === 'login' ? 'Entrar no blog' : 'Criar conta'}</S.Title>
        <S.Description>
          Um espaço simples para textos curtos, ideias soltas e posts com cara de internet antiga.
        </S.Description>

        <S.Tabs>
          <S.TabButton $active={mode === 'login'} onClick={() => changeMode('login')}>
            Login
          </S.TabButton>
          <S.TabButton $active={mode === 'register'} onClick={() => changeMode('register')}>
            Registrar
          </S.TabButton>
        </S.Tabs>

        <S.Form onSubmit={handleSubmit}>
          {mode === 'register' && (
            <>
              <S.Input placeholder="Nome" value={name} onChange={(event) => setName(event.target.value)} />
              <S.Input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </>
          )}

          <S.Input placeholder="User" value={username} onChange={(event) => setUsername(event.target.value)} />
          <S.Input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          {message && <S.Message>{message}</S.Message>}

          <S.SubmitButton>{mode === 'login' ? 'Entrar' : 'Criar conta'}</S.SubmitButton>
        </S.Form>
      </S.AuthCard>
    </S.AuthWrapper>
  )
}
