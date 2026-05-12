import type { BlogPost, UserAccount } from '../../types'
import { PostCard } from '../PostCard'
import * as S from './styles'

interface ProfilePageProps {
  user: UserAccount
  posts: BlogPost[]
  topPosts: BlogPost[]
  onBack: () => void
  onLike: (postId: string) => void
  onComment: (postId: string, content: string) => void
  onPhotoChange: (photo: string) => void
}

export function ProfilePage({ user, posts, topPosts, onBack, onLike, onComment, onPhotoChange }: ProfilePageProps) {
  const userPosts = posts.filter((post) => post.username === user.username)
  const totalLikes = userPosts.reduce((sum, post) => sum + post.likes, 0)

  function handleProfilePhotoChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]

    if (!file) return

    const reader = new FileReader()
    reader.onload = () => onPhotoChange(String(reader.result))
    reader.readAsDataURL(file)
  }

  return (
    <S.ProfileLayout>
      <S.BackButton type="button" onClick={onBack}>
        Voltar para o feed
      </S.BackButton>

      <S.ProfileHeader>
        <S.Avatar>
          {user.profileImage ? <img src={user.profileImage} alt={`Foto de perfil de ${user.name}`} /> : user.name.charAt(0)}
        </S.Avatar>

        <S.ProfileDetails>
          <S.Name>{user.name}</S.Name>
          <S.Username>@{user.username}</S.Username>
          <S.Email>{user.email}</S.Email>
          <S.PhotoButton>
            Alterar foto de perfil
            <input type="file" accept="image/*" onChange={handleProfilePhotoChange} />
          </S.PhotoButton>
        </S.ProfileDetails>

        <S.Stats>
          <S.Stat>
            <strong>{userPosts.length}</strong>
            <span>{userPosts.length === 1 ? 'post antigo' : 'posts antigos'}</span>
          </S.Stat>
          <S.Stat>
            <strong>{totalLikes}</strong>
            <span>{totalLikes === 1 ? 'curtida' : 'curtidas'}</span>
          </S.Stat>
        </S.Stats>
      </S.ProfileHeader>

      <S.SectionTitle>Posts antigos</S.SectionTitle>
      <S.PostsList>
        {userPosts.length > 0 ? (
          userPosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onLike={onLike}
              onComment={onComment}
              currentUser={user}
              isLoggedIn
              highlight={topPosts.some((topPost) => topPost.id === post.id)}
            />
          ))
        ) : (
          <S.EmptyState>Esse perfil ainda não publicou nenhum post.</S.EmptyState>
        )}
      </S.PostsList>
    </S.ProfileLayout>
  )
}
