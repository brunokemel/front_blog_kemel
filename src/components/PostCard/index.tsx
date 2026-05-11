import type { BlogPost } from '../../types'
import * as S from './styles'

interface PostCardProps {
  post: BlogPost
  onLike: (postId: string) => void
  highlight?: boolean
}

export function PostCard({ post, onLike, highlight = false }: PostCardProps) {
  return (
    <S.Card $highlight={highlight}>
      <S.Header>
        <S.AuthorBlock>
          <S.Author>{post.authorName}</S.Author>
          <S.Username>
            @{post.username} • {post.createdAt}
          </S.Username>
        </S.AuthorBlock>
        {highlight && <S.Badge>Destaque</S.Badge>}
      </S.Header>

      {post.content && <S.Content>{post.content}</S.Content>}
      {post.images.length > 0 && (
        <S.ImageGrid $count={post.images.length}>
          {post.images.map((image, index) => (
            <img key={`${image}-${index}`} src={image} alt={`Foto ${index + 1} do post de ${post.authorName}`} />
          ))}
        </S.ImageGrid>
      )}

      <S.Footer>
        <S.LikeButton $liked={post.likedByMe} onClick={() => onLike(post.id)}>
          {post.likedByMe ? '♥ Curtido' : '♡ Curtir'}
        </S.LikeButton>
        <S.Likes>{post.likes} curtidas</S.Likes>
      </S.Footer>
    </S.Card>
  )
}
