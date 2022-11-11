import { FormEvent, useState } from 'react'
import { formatDistance } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { useUser } from '../../hooks/useUser'
import { Comment as CommentType, ContentItem } from '../../hooks/usePosts/use-posts.types'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

import styles from './post.module.scss'

interface PostProps {
  avatar: string
  name: string
  role: string
  publicationDate: Date
  content: ContentItem[]
  hashtags: string[]
  comments?: CommentType[]
}

export const Post = ({ avatar, name, role, publicationDate, content, hashtags, comments = [] }: PostProps) => {
  const { userData } = useUser()

  const [allComments, setAllComments] = useState(comments)
  const [commentValue, setCommentValue] = useState('')

  const formattedDate = 'Públicado ' + formatDistance(publicationDate, new Date(), { addSuffix: true, locale: ptBR }).replace(' cerca de', '')

  const getLine = (item: ContentItem) => {
    switch(item.type) {
      case 'paragraph':
        return (
          <p key={item.id}>{item.text}</p>
        )
      case 'link':
        return (
          <p key={item.id}><a href={item.href ?? '#'}>{item.text}</a></p>
        )
      default:
        return null
    }
  }

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!commentValue || commentValue.trim().length === 0) return

    const newComment: CommentType = {
      id: Math.floor(Math.random() * 20),
      author: {
        name: userData.name,
        avatar: userData.avatar,
      },
      commentDate: new Date(),
      content: commentValue,
      applauseAmount: 0,  
    }

    setAllComments((state) => [newComment, ...state])

    setCommentValue('')
  }

  const deleteComment = async (id: number) => {
    await new Promise((resolve) => setTimeout(resolve, 500))

    setAllComments((state) => state.filter((comment) => comment.id !== id))
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles['profile-data']}>
          <Avatar src={avatar} border />

          <div>
            <p>{name}</p>
            <span>{role}</span>
          </div>
        </div>

        <span>{formattedDate}</span>
      </header>

      <main className={styles.main}>
        {content.map((item) => getLine(item))}

        <span>
          {hashtags.map((hashtag, index) => (
            <a href="#" key={index}>{hashtag}</a>
          ))}
        </span>
      </main>

      <span className={styles.separator}></span>

      <footer className={styles.footer}>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <p>Deixe seu feedback</p>

          <textarea
            placeholder="Escreva um comentário..."
            value={commentValue}
            onChange={(event) => setCommentValue(event.target.value)}
            required
          />

          <button>Publicar</button>
        </form>

        {allComments.length > 0 && (
          <section>
            {allComments.map((comment) => (
              <Comment
                key={comment.id}
                id={comment.id}
                avatar={comment.author.avatar}
                name={comment.author.name}
                commentDate={comment.commentDate}
                content={comment.content}
                applauseAmount={comment.applauseAmount}
                deleteComment={deleteComment}
              />
            ))}
          </section>
        )}
      </footer>
    </div>
  )
}
