export interface UserAccount {
  id: string
  name: string
  email: string
  username: string
  password: string
  profileImage?: string
}

export interface BlogComment {
  id: string
  authorName: string
  username: string
  content: string
  createdAt: string
}

export interface BlogPost {
  id: string
  authorName: string
  username: string
  content: string
  images: string[]
  createdAt: string
  likes: number
  likedByMe: boolean
  comments: BlogComment[]
}
