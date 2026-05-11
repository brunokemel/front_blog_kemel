import styled from 'styled-components'

export const Card = styled.article<{ $highlight: boolean }>`
  background: #ffffff;
  border: 1px solid ${({ $highlight }) => ($highlight ? '#f97316' : '#ffd6a1')};
  box-shadow: ${({ $highlight }) => ($highlight ? '7px 7px 0 #ffcf88' : '4px 4px 0 #ffe2bb')};
  padding: 22px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
`

export const AuthorBlock = styled.div`
  display: grid;
  gap: 4px;
`

export const Author = styled.strong`
  font-family: Arial, sans-serif;
  font-size: 1rem;
`

export const Username = styled.span`
  color: #8a5a24;
  font-size: 0.92rem;
`

export const Badge = styled.span`
  align-self: flex-start;
  background: #f97316;
  color: #ffffff;
  font-family: Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 5px 9px;
  text-transform: uppercase;
`

export const Content = styled.p`
  font-size: 1.22rem;
  line-height: 1.65;
  white-space: pre-wrap;
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 20px;
  padding-top: 14px;
  border-top: 1px dashed #ffc078;
`

export const LikeButton = styled.button<{ $liked: boolean }>`
  border: 1px solid #f97316;
  background: ${({ $liked }) => ($liked ? '#f97316' : '#fff8ef')};
  color: ${({ $liked }) => ($liked ? '#ffffff' : '#9a3412')};
  padding: 9px 12px;
  font-family: Arial, sans-serif;
  font-weight: 800;
`

export const Likes = styled.span`
  color: #8a5a24;
  font-size: 0.95rem;
`
