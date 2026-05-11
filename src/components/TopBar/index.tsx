import * as S from './styles'

interface TopBarProps {
  username?: string
  onLogout: () => void
  onOpenProfile: () => void
  onOpenAuth: (mode: 'login' | 'register') => void
}

export function TopBar({ username, onLogout, onOpenProfile, onOpenAuth }: TopBarProps) {
  return (
    <S.TopBar>
      <S.LogoBlock>
        <S.Logo>DevKemel</S.Logo>
        <S.Subtitle>Old Blog Texts</S.Subtitle>
      </S.LogoBlock>

      <S.UserArea>
        {username ? (
          <>
            <S.UserButton type="button" onClick={onOpenProfile}>
              @{username}
            </S.UserButton>
            <S.AuthButton onClick={onLogout}>Sair</S.AuthButton>
          </>
        ) : (
          <>
            <S.AuthButton onClick={() => onOpenAuth('login')}>Login</S.AuthButton>
            <S.PrimaryAuthButton onClick={() => onOpenAuth('register')}>Registrar</S.PrimaryAuthButton>
          </>
        )}
      </S.UserArea>
    </S.TopBar>
  )
}
