export interface UserAccount {
  id: string
  name: string
  email: string
  username: string
  password: string
}

export interface BlogPost {
  id: string
  authorName: string
  username: string
  content: string
  createdAt: string
  likes: number
  likedByMe: boolean
}
