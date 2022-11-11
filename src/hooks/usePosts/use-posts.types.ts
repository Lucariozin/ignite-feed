export type ContentItem = {
  id: number
  type: 'paragraph' | 'link'
  text: string
  href?: string
}

export type Comment = {
  id: number
  author: {
    avatar: string
    name: string
  }
  commentDate: Date
  content: string
  applauseAmount: number
}

export type Post = {
  id: number
  author: {
    avatar: string
    name: string
    role: string
  }
  publicationDate: Date
  content: ContentItem[]
  hashtags: string[]
  comments?: Comment[]
}

export type PostsContextData = {
  posts: Post[]
}
