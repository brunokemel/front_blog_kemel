import type { BlogPost, UserAccount } from '../../types'
import { PostCard } from '../PostCard'
import * as S from './styles'

export type FeedTab = 'feed' | 'highlights'

interface BlogFeedProps {
  posts: BlogPost[]
  topPosts: BlogPost[]
  newPost: string
  activeTab: FeedTab
  currentUser: UserAccount | null
  isLoggedIn: boolean
  onNewPostChange: (value: string) => void
  onTabChange: (tab: FeedTab) => void
  onCreatePost: (event: React.FormEvent) => void
  onLike: (postId: string) => void
  onComment: (postId: string, content: string) => void
  onOpenProfile: () => void
}

export function BlogFeed({
  posts,
  topPosts,
  newPost,
  activeTab,
  currentUser,
  isLoggedIn,
  onNewPostChange,
  onTabChange,
  onCreatePost,
  onLike,
  onComment,
  onOpenProfile,
}: BlogFeedProps) {
  const visiblePosts = activeTab === 'feed' ? posts : topPosts
  const userPosts = currentUser
    ? posts.filter((post) => post.username === currentUser.username).length
    : 0

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
          <S.ComposerFooter>
            <S.Counter>{newPost.length}/280</S.Counter>
            <S.PublishButton disabled={!isLoggedIn || !newPost.trim()}>
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
              onComment={onComment}
              currentUser={currentUser}
              isLoggedIn={isLoggedIn}
              highlight={topPosts.some((topPost) => topPost.id === post.id)}
            />
          ))}
        </S.PostsList>
      </S.MainColumn>

      <S.Sidebar>
        <S.ProfileBox
          as={currentUser ? 'button' : 'section'}
          type={currentUser ? 'button' : undefined}
          onClick={currentUser ? onOpenProfile : undefined}
        >
          <S.ProfileAvatar>
            {currentUser?.profileImage ? (
              <img src={currentUser.profileImage} alt={`Foto de perfil de ${currentUser.name}`} />
            ) : (
              currentUser ? currentUser.name.charAt(0) : '?'
            )}
          </S.ProfileAvatar>
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
