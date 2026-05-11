import styled from 'styled-components'

export const TopBar = styled.header`
  max-width: 1180px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
`

export const LogoBlock = styled.div`
  display: grid;
  gap: 3px;
`

export const Logo = styled.strong`
  color: #f97316;
  font-family: Arial, sans-serif;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`

export const Subtitle = styled.span`
  color: #7c4a1f;
  font-size: 0.95rem;
`

export const UserArea = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: flex-end;
`

export const UserText = styled.span`
  color: #7c4a1f;
  font-weight: 700;
`

export const UserButton = styled.button`
  border: 0;
  background: transparent;
  color: #7c4a1f;
  font-weight: 700;
  padding: 4px;

  &:hover {
    color: #f97316;
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`

export const AuthButton = styled.button`
  border: 1px solid #f97316;
  background: #ffffff;
  color: #9a3412;
  padding: 9px 14px;
  font-family: Arial, sans-serif;
  font-weight: 800;
`

export const PrimaryAuthButton = styled(AuthButton)`
  background: #f97316;
  color: #ffffff;
  box-shadow: 4px 4px 0 #ffcf88;
`
