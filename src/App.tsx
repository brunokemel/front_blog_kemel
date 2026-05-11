import { useMemo, useState } from 'react'
import styled from 'styled-components'
import { AuthPanel } from './components/AuthPanel'
import { Confetti } from './components/Confetti'
import { PostCard } from './components/PostCard'
import { initialPosts } from './data/initialPosts'
import type { BlogPost, UserAccount } from './types'

function App() {
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(null)
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts)
  const [newPost, setNewPost] = useState('')
  const [activeTab, setActiveTab] = useState<'feed' | 'highlights'>('feed')
  const [confettiActive, setConfettiActive] = useState(false)

  const topPosts = useMemo(() => {
    return [...posts].sort((a, b) => b.likes - a.likes).slice(0, 3)
  }, [posts])

  function showConfetti() {
    setConfettiActive(true)
    window.setTimeout(() => setConfettiActive(false), 1900)
  }

  function handleLike(postId: string) {
    const isTopPost = topPosts.some((post) => post.id === postId)

    setPosts((currentPosts) =>
      currentPosts.map((post) => {
        if (post.id !== postId) return post

        const liked = !post.likedByMe

        return {
          ...post,
          likedByMe: liked,
          likes: liked ? post.likes + 1 : post.likes - 1,
        }
      }),
    )

    if (isTopPost) showConfetti()
  }

  function handleCreatePost(event: React.FormEvent) {
    event.preventDefault()

    if (!currentUser || !newPost.trim()) return

    const post: BlogPost = {
      id: crypto.randomUUID(),
      authorName: currentUser.name,
      username: currentUser.username,
      content: newPost.trim(),
      createdAt: 'Agora mesmo',
      likes: 0,
      likedByMe: false,
    }

    setPosts((currentPosts) => [post, ...currentPosts])
    setNewPost('')
    setActiveTab('feed')
  }

  if (!currentUser) {
    return <AuthPanel onLogin={setCurrentUser} />
  }

  return (
    <Page>
      <Confetti active={confettiActive} />

      <TopBar>
        <LogoBlock>
          <Logo>DevKemel</Logo>
          <Subtitle>Old Blog Texts</Subtitle>
        </LogoBlock>

        <UserArea>
          <UserText>@{currentUser.username}</UserText>
          <LogoutButton onClick={() => setCurrentUser(null)}>Sair</LogoutButton>
        </UserArea>
      </TopBar>

      <Hero>
        <HeroContent>
          <Eyebrow>Textos curtos, alma de blog antigo</Eyebrow>
          <HeroTitle>Publique ideias com estética simples</HeroTitle>
          <HeroText>
            Um front pronto para conectar na sua API depois: autenticação visual, feed,
            curtidas locais e ranking de posts em destaque.
          </HeroText>
        </HeroContent>
      </Hero>

      <Layout>
        <MainColumn>
          <Composer onSubmit={handleCreatePost}>
            <ComposerTitle>Novo texto</ComposerTitle>
            <TextArea
              maxLength={280}
              placeholder="Escreva como se fosse um post perdido em 2011..."
              value={newPost}
              onChange={(event) => setNewPost(event.target.value)}
            />
            <ComposerFooter>
              <Counter>{newPost.length}/280</Counter>
              <PublishButton>Publicar</PublishButton>
            </ComposerFooter>
          </Composer>

          <Tabs>
            <TabButton $active={activeTab === 'feed'} onClick={() => setActiveTab('feed')}>
              Feed
            </TabButton>
            <TabButton $active={activeTab === 'highlights'} onClick={() => setActiveTab('highlights')}>
              Destaques da Semana
            </TabButton>
          </Tabs>

          <PostsList>
            {(activeTab === 'feed' ? posts : topPosts).map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onLike={handleLike}
                highlight={topPosts.some((topPost) => topPost.id === post.id)}
              />
            ))}
          </PostsList>
        </MainColumn>

        <Sidebar>
          <SidebarTitle>TOP 3 da semana</SidebarTitle>
          <RankingList>
            {topPosts.map((post, index) => (
              <RankingItem key={post.id}>
                <Rank>#{index + 1}</Rank>
                <RankingText>
                  <strong>@{post.username}</strong>
                  <span>{post.likes} curtidas</span>
                </RankingText>
              </RankingItem>
            ))}
          </RankingList>
        </Sidebar>
      </Layout>
    </Page>
  )
}

export default App

const Page = styled.div`
  min-height: 100vh;
`

const TopBar = styled.header`
  max-width: 1180px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
`

const LogoBlock = styled.div`
  display: grid;
  gap: 3px;
`

const Logo = styled.strong`
  color: #f97316;
  font-family: Arial, sans-serif;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const Subtitle = styled.span`
  color: #7c4a1f;
  font-size: 0.95rem;
`

const UserArea = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: flex-end;
`

const UserText = styled.span`
  color: #7c4a1f;
  font-weight: 700;
`

const LogoutButton = styled.button`
  border: 1px solid #f97316;
  background: #ffffff;
  color: #9a3412;
  padding: 9px 14px;
  font-family: Arial, sans-serif;
  font-weight: 800;
`

const Hero = styled.section`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px 24px;
`

const HeroContent = styled.div`
  background: #ffffff;
  border: 2px solid #f97316;
  box-shadow: 9px 9px 0 #ffcf88;
  padding: clamp(28px, 5vw, 56px);
`

const Eyebrow = styled.p`
  color: #f97316;
  font-family: Arial, sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  margin-bottom: 12px;
`

const HeroTitle = styled.h1`
  max-width: 760px;
  font-size: clamp(2.2rem, 6vw, 5rem);
  line-height: 0.96;
  margin-bottom: 20px;
`

const HeroText = styled.p`
  max-width: 720px;
  color: #6b4b2f;
  font-size: 1.15rem;
  line-height: 1.7;
`

const Layout = styled.main`
  max-width: 1180px;
  margin: 0 auto;
  padding: 28px 24px 64px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 28px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

const MainColumn = styled.section`
  display: grid;
  gap: 22px;
`

const Composer = styled.form`
  background: #ffffff;
  border: 1px solid #ffd6a1;
  box-shadow: 4px 4px 0 #ffe2bb;
  padding: 22px;
`

const ComposerTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 12px;
`

const TextArea = styled.textarea`
  width: 100%;
  min-height: 130px;
  resize: vertical;
  border: 1px solid #ffb65c;
  background: #fffdf8;
  padding: 14px;
  line-height: 1.6;
  outline-color: #f97316;
`

const ComposerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-top: 12px;
`

const Counter = styled.span`
  color: #8a5a24;
`

const PublishButton = styled.button`
  border: 0;
  background: #f97316;
  color: #ffffff;
  padding: 11px 18px;
  font-family: Arial, sans-serif;
  font-weight: 800;
  box-shadow: 4px 4px 0 #ffcf88;
`

const Tabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #ffd6a1;
`

const TabButton = styled.button<{ $active: boolean }>`
  border: 0;
  padding: 14px;
  background: ${({ $active }) => ($active ? '#f97316' : '#ffffff')};
  color: ${({ $active }) => ($active ? '#ffffff' : '#9a3412')};
  font-family: Arial, sans-serif;
  font-weight: 800;
`

const PostsList = styled.div`
  display: grid;
  gap: 18px;
`

const Sidebar = styled.aside`
  position: sticky;
  top: 24px;
  align-self: start;
  background: #ffffff;
  border: 1px solid #f97316;
  box-shadow: 6px 6px 0 #ffcf88;
  padding: 20px;
`

const SidebarTitle = styled.h2`
  font-size: 1.35rem;
  margin-bottom: 16px;
`

const RankingList = styled.div`
  display: grid;
  gap: 12px;
`

const RankingItem = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  border-bottom: 1px dashed #ffc078;
  padding-bottom: 12px;
`

const Rank = styled.strong`
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  background: #fff3e0;
  color: #f97316;
  border: 1px solid #ffb65c;
  font-family: Arial, sans-serif;
`

const RankingText = styled.div`
  display: grid;
  gap: 4px;

  span {
    color: #8a5a24;
    font-size: 0.9rem;
  }
`
