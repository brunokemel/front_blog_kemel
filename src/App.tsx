import { useMemo, useState } from 'react'
import { AuthPanel } from './components/AuthPanel'
import { BannerCarousel } from './components/BannerCarousel'
import { BlogFeed, type FeedTab } from './components/BlogFeed'
import { Confetti } from './components/Confetti'
import { HeroSection } from './components/HeroSection'
import { TopBar } from './components/TopBar'
import { initialPosts } from './data/initialPosts'
import { Page } from './styles/AppStyles'
import type { BlogPost, UserAccount } from './types'

function App() {
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(null)
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts)
  const [newPost, setNewPost] = useState('')
  const [activeTab, setActiveTab] = useState<FeedTab>('feed')
  const [authMode, setAuthMode] = useState<'login' | 'register' | null>(null)
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

  function handleLogin(user: UserAccount) {
    setCurrentUser(user)
    setAuthMode(null)
  }

  return (
    <Page>
      <Confetti active={confettiActive} />
      <TopBar
        username={currentUser?.username}
        onLogout={() => setCurrentUser(null)}
        onOpenAuth={setAuthMode}
      />
      <HeroSection />
      <BannerCarousel />
      <BlogFeed
        posts={posts}
        topPosts={topPosts}
        newPost={newPost}
        activeTab={activeTab}
        isLoggedIn={Boolean(currentUser)}
        onNewPostChange={setNewPost}
        onTabChange={setActiveTab}
        onCreatePost={handleCreatePost}
        onLike={handleLike}
      />
      {authMode && (
        <AuthPanel
          initialMode={authMode}
          onLogin={handleLogin}
          onClose={() => setAuthMode(null)}
        />
      )}
    </Page>
  )
}

export default App
