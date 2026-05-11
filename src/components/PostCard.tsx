import styled from 'styled-components'
import type { BlogPost } from '../types'

interface PostCardProps {
  post: BlogPost
  onLike: (postId: string) => void
  highlight?: boolean
}

export function PostCard({ post, onLike, highlight = false }: PostCardProps) {
  return (
    <Card $highlight={highlight}>
      <Header>
        <AuthorBlock>
          <Author>{post.authorName}</Author>
          <Username>@{post.username} • {post.createdAt}</Username>
        </AuthorBlock>
        {highlight && <Badge>Destaque</Badge>}
      </Header>

      <Content>{post.content}</Content>

      <Footer>
        <LikeButton $liked={post.likedByMe} onClick={() => onLike(post.id)}>
          {post.likedByMe ? '♥ Curtido' : '♡ Curtir'}
        </LikeButton>
        <Likes>{post.likes} curtidas</Likes>
      </Footer>
    </Card>
  )
}

const Card = styled.article<{ $highlight: boolean }>`
  background: #ffffff;
  border: 1px solid ${({ $highlight }) => ($highlight ? '#f97316' : '#ffd6a1')};
  box-shadow: ${({ $highlight }) => ($highlight ? '7px 7px 0 #ffcf88' : '4px 4px 0 #ffe2bb')};
  padding: 22px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
`

const AuthorBlock = styled.div`
  display: grid;
  gap: 4px;
`

const Author = styled.strong`
  font-family: Arial, sans-serif;
  font-size: 1rem;
`

const Username = styled.span`
  color: #8a5a24;
  font-size: 0.92rem;
`

const Badge = styled.span`
  align-self: flex-start;
  background: #f97316;
  color: #ffffff;
  font-family: Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 5px 9px;
  text-transform: uppercase;
`

const Content = styled.p`
  font-size: 1.22rem;
  line-height: 1.65;
  white-space: pre-wrap;
`

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 20px;
  padding-top: 14px;
  border-top: 1px dashed #ffc078;
`

const LikeButton = styled.button<{ $liked: boolean }>`
  border: 1px solid #f97316;
  background: ${({ $liked }) => ($liked ? '#f97316' : '#fff8ef')};
  color: ${({ $liked }) => ($liked ? '#ffffff' : '#9a3412')};
  padding: 9px 12px;
  font-family: Arial, sans-serif;
  font-weight: 800;
`

const Likes = styled.span`
  color: #8a5a24;
  font-size: 0.95rem;
`
