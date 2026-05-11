import * as S from './styles'

interface TopBarProps {
  username: string
  onLogout: () => void
}

export function TopBar({ username, onLogout }: TopBarProps) {
  return (
    <S.TopBar>
      <S.LogoBlock>
        <S.Logo>DevKemel</S.Logo>
        <S.Subtitle>Old Blog Texts</S.Subtitle>
      </S.LogoBlock>

      <S.UserArea>
        <S.UserText>@{username}</S.UserText>
        <S.LogoutButton onClick={onLogout}>Sair</S.LogoutButton>
      </S.UserArea>
    </S.TopBar>
  )
}
