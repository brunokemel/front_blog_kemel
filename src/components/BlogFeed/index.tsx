import type { BlogPost, UserAccount } from '../../types'
import { PostCard } from '../PostCard'
import * as S from './styles'

export type FeedTab = 'feed' | 'highlights'

interface BlogFeedProps {
  posts: BlogPost[]
  topPosts: BlogPost[]
  newPost: string
  newPostImages: string[]
  activeTab: FeedTab
  currentUser: UserAccount | null
  isLoggedIn: boolean
  onNewPostChange: (value: string) => void
  onNewPostImagesChange: (images: string[]) => void
  onTabChange: (tab: FeedTab) => void
  onCreatePost: (event: React.FormEvent) => void
  onLike: (postId: string) => void
}

export function BlogFeed({
  posts,
  topPosts,
  newPost,
  newPostImages,
  activeTab,
  currentUser,
  isLoggedIn,
  onNewPostChange,
  onNewPostImagesChange,
  onTabChange,
  onCreatePost,
  onLike,
}: BlogFeedProps) {
  const visiblePosts = activeTab === 'feed' ? posts : topPosts
  const userPosts = currentUser
    ? posts.filter((post) => post.username === currentUser.username).length
    : 0

  function handlePhotoChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []).slice(0, 2)

    if (!files.length) {
      onNewPostImagesChange([])
      return
    }

    Promise.all(
      files.map(
        (file) =>
          new Promise<string>((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () => resolve(String(reader.result))
            reader.onerror = () => reject(reader.error)
            reader.readAsDataURL(file)
          }),
      ),
    )
      .then(onNewPostImagesChange)
      .catch(() => onNewPostImagesChange([]))
  }

  function removePhoto(index: number) {
    onNewPostImagesChange(newPostImages.filter((_, currentIndex) => currentIndex !== index))
  }

  return (
    <S.Layout>
      <S.MainColumn>
        <S.Composer onSubmit={onCreatePost}>
          <S.ComposerTitle>Novo texto</S.ComposerTitle>
          {!isLoggedIn && <S.LoginHint>Entre ou registre uma conta para publicar seu proprio texto.</S.LoginHint>}
          <S.TextArea
            maxLength={280}
            placeholder={
              isLoggedIn
                ? 'Escreva como se fosse um post perdido em 2011...'
                : 'Faça login para liberar a publicação.'
            }
            value={newPost}
            onChange={(event) => onNewPostChange(event.target.value)}
            disabled={!isLoggedIn}
          />
          <S.PhotoTools>
            <S.PhotoLabel $disabled={!isLoggedIn}>
              Adicionar fotos
              <input
                type="file"
                accept="image/*"
                multiple
                disabled={!isLoggedIn}
                onChange={handlePhotoChange}
              />
            </S.PhotoLabel>
            <S.PhotoLimit>{newPostImages.length}/2 fotos</S.PhotoLimit>
          </S.PhotoTools>
          {newPostImages.length > 0 && (
            <S.PhotoPreviewGrid $count={newPostImages.length}>
              {newPostImages.map((image, index) => (
                <S.PhotoPreview key={`${image}-${index}`}>
                  <img src={image} alt="Preview da foto selecionada" />
                  <button type="button" onClick={() => removePhoto(index)} aria-label="Remover foto">
                    ×
                  </button>
                </S.PhotoPreview>
              ))}
            </S.PhotoPreviewGrid>
          )}
          <S.ComposerFooter>
            <S.Counter>{newPost.length}/280</S.Counter>
            <S.PublishButton disabled={!isLoggedIn || (!newPost.trim() && newPostImages.length === 0)}>
              Publicar
            </S.PublishButton>
          </S.ComposerFooter>
        </S.Composer>

        <S.Tabs>
          <S.TabButton $active={activeTab === 'feed'} onClick={() => onTabChange('feed')}>
            Feed
          </S.TabButton>
          <S.TabButton $active={activeTab === 'highlights'} onClick={() => onTabChange('highlights')}>
            Destaques da Semana
          </S.TabButton>
        </S.Tabs>

        <S.PostsList>
          {visiblePosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onLike={onLike}
              highlight={topPosts.some((topPost) => topPost.id === post.id)}
            />
          ))}
        </S.PostsList>
      </S.MainColumn>

      <S.Sidebar>
        <S.ProfileBox>
          <S.ProfileAvatar>{currentUser ? currentUser.name.charAt(0) : '?'}</S.ProfileAvatar>
          <S.ProfileInfo>
            <S.ProfileName>{currentUser ? currentUser.name : 'Perfil'}</S.ProfileName>
            <S.ProfileUser>{currentUser ? `@${currentUser.username}` : 'Entre para publicar textos e fotos.'}</S.ProfileUser>
          </S.ProfileInfo>
          {currentUser && (
            <S.ProfileStats>
              <span>{userPosts}</span>
              <small>{userPosts === 1 ? 'post publicado' : 'posts publicados'}</small>
            </S.ProfileStats>
          )}
        </S.ProfileBox>

        <S.SidebarTitle>TOP 3 da semana</S.SidebarTitle>
        <S.RankingList>
          {topPosts.map((post, index) => (
            <S.RankingItem key={post.id}>
              <S.Rank>#{index + 1}</S.Rank>
              <S.RankingText>
                <strong>@{post.username}</strong>
                <span>{post.likes} curtidas</span>
              </S.RankingText>
            </S.RankingItem>
          ))}
        </S.RankingList>
      </S.Sidebar>
    </S.Layout>
  )
}
