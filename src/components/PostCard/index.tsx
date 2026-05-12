import { useState } from 'react'
import type { BlogPost, UserAccount } from '../../types'
import * as S from './styles'

interface PostCardProps {
  post: BlogPost
  onLike: (postId: string) => void
  onComment: (postId: string, content: string) => void
  currentUser: UserAccount | null
  isLoggedIn: boolean
  highlight?: boolean
}

type PostTab = 'reactions' | 'comments'

export function PostCard({
  post,
  onLike,
  onComment,
  currentUser,
  isLoggedIn,
  highlight = false,
}: PostCardProps) {
  const [activeTab, setActiveTab] = useState<PostTab>('reactions')
  const [comment, setComment] = useState('')

  function handleCommentSubmit(event: React.FormEvent) {
    event.preventDefault()

    if (!comment.trim()) return

    onComment(post.id, comment)
    setComment('')
    setActiveTab('comments')
  }

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

      <S.PostTabs>
        <S.TabButton
          type="button"
          $active={activeTab === 'reactions'}
          onClick={() => setActiveTab('reactions')}
        >
          Curtidas
        </S.TabButton>
        <S.TabButton
          type="button"
          $active={activeTab === 'comments'}
          onClick={() => setActiveTab('comments')}
        >
          Comentários ({post.comments.length})
        </S.TabButton>
      </S.PostTabs>

      {activeTab === 'reactions' ? (
        <S.Footer>
          <S.LikeButton $liked={post.likedByMe} onClick={() => onLike(post.id)}>
            {post.likedByMe ? '♥ Curtido' : '♡ Curtir'}
          </S.LikeButton>
          <S.Likes>{post.likes} curtidas</S.Likes>
        </S.Footer>
      ) : (
        <S.CommentsPanel>
          <S.CommentList>
            {post.comments.length > 0 ? (
              post.comments.map((item) => (
                <S.CommentItem key={item.id}>
                  <S.CommentMeta>
                    <strong>{item.authorName}</strong>
                    <span>
                      @{item.username} • {item.createdAt}
                    </span>
                  </S.CommentMeta>
                  <p>{item.content}</p>
                </S.CommentItem>
              ))
            ) : (
              <S.EmptyComments>Nenhum comentário ainda. Comece a conversa.</S.EmptyComments>
            )}
          </S.CommentList>

          <S.CommentForm onSubmit={handleCommentSubmit}>
            <S.CommentInput
              maxLength={180}
              placeholder={
                isLoggedIn
                  ? `Comentar como @${currentUser?.username}`
                  : 'Entre para comentar nesse post.'
              }
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              disabled={!isLoggedIn}
            />
            <S.CommentFooter>
              <span>{comment.length}/180</span>
              <S.CommentButton disabled={!isLoggedIn || !comment.trim()}>Comentar</S.CommentButton>
            </S.CommentFooter>
          </S.CommentForm>
        </S.CommentsPanel>
      )}
    </S.Card>
  )
}
