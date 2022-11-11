import { useState } from 'react'
import { HandsClapping, Trash } from 'phosphor-react'

import { formatDistance } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar'
import { DeleteCommentModal } from '../DeleteCommentModal'

import styles from './comment.module.scss'

interface CommentProps {
  id: number
  avatar: string
  name: string
  commentDate: Date
  content: string
  applauseAmount: number
  deleteComment: (id: number) => Promise<void>
}

export const Comment = ({ id, avatar, name, commentDate, content, applauseAmount, deleteComment }: CommentProps) => {
  const [applauseSum, setApplauseSum] = useState(applauseAmount)
  const [applauseButtonWasClicked, setApplauseButtonWasClicked] = useState(false)
  const [deleteCommentModalIsOpen, setDeleteCommentModalIsOpen] = useState(false)

  const formattedCommentDate = formatDistance(commentDate, new Date(), { addSuffix: true, locale: ptBR })

  const handleApplauseComment = () => {
    if (!applauseButtonWasClicked) setApplauseButtonWasClicked(true)

    setApplauseSum((state) => state + 1)
  }

  const handleDeleteComment = () => setDeleteCommentModalIsOpen(true)

  return (
    <>
      <div className={styles.container}>
        <Avatar src={avatar} />

        <div className={styles.wrapper}>
          <main className={styles.main}>
            <div className={styles.header}>
              <div>
                <p>{name}</p>
                <span>{formattedCommentDate}</span>
              </div>

              <button
                className={styles['delete-button']}
                onClick={handleDeleteComment}
              >
                <Trash size={24} color="#8d8d99" />
              </button>
            </div>

            <p>{content}</p>
          </main>

          <footer className={styles.footer}>
            <button
              className={`${styles['applause-button-base']} ${applauseButtonWasClicked ? styles['applause-button-clicked'] : styles['applause-button']}`}
              onClick={handleApplauseComment}
            >
              <HandsClapping size={20} color="#8d8d99" style={{ marginRight: '8px' }} />

              Aplaudir <span>{applauseSum}</span>
            </button>
          </footer>
        </div>
      </div>

      <DeleteCommentModal
        open={deleteCommentModalIsOpen}
        onClose={() => setDeleteCommentModalIsOpen(false)}
        onDeleteComment={() => deleteComment(id)}
      />
    </>
  )
}
