import type { BlogPost } from '../../types'
import { PostCard } from '../PostCard'
import * as S from './styles'

export type FeedTab = 'feed' | 'highlights'

interface BlogFeedProps {
  posts: BlogPost[]
  topPosts: BlogPost[]
  newPost: string
  activeTab: FeedTab
  onNewPostChange: (value: string) => void
  onTabChange: (tab: FeedTab) => void
  onCreatePost: (event: React.FormEvent) => void
  onLike: (postId: string) => void
}

export function BlogFeed({
  posts,
  topPosts,
  newPost,
  activeTab,
  onNewPostChange,
  onTabChange,
  onCreatePost,
  onLike,
}: BlogFeedProps) {
  const visiblePosts = activeTab === 'feed' ? posts : topPosts

  return (
    <S.Layout>
      <S.MainColumn>
        <S.Composer onSubmit={onCreatePost}>
          <S.ComposerTitle>Novo texto</S.ComposerTitle>
          <S.TextArea
            maxLength={280}
            placeholder="Escreva como se fosse um post perdido em 2011..."
            value={newPost}
            onChange={(event) => onNewPostChange(event.target.value)}
          />
          <S.ComposerFooter>
            <S.Counter>{newPost.length}/280</S.Counter>
            <S.PublishButton>Publicar</S.PublishButton>
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
