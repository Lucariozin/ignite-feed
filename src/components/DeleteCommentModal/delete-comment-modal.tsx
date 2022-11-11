import styles from './delete-comment-modal.module.scss'

interface DeleteCommentModalProps {
  open: boolean
  onClose: () => void
  onDeleteComment: () => Promise<void>
}

export const DeleteCommentModal = ({ open, onClose, onDeleteComment }: DeleteCommentModalProps) => {
  const handleDeleteComment = () => {
    onClose()
    onDeleteComment()
  }

  return (
    <div
      className={styles.container}
      style={{
        visibility: open ? 'visible' : 'hidden',
        opacity: open ? '1': '0',
      }}
    >
      <div className={styles.overlay} onClick={onClose}></div>

      <main className={styles.content}>
        <h3>Excluir comentário</h3>

        <p>Você tem certeza que gostaria de excluir este comentário?</p>

        <footer>
          <button
            className={styles['cancel-button']}
            onClick={onClose}
          >
            Cancelar
          </button>

          <button
            className={styles['confirm-button']}
            onClick={handleDeleteComment}
          >
            Sim, excluir
          </button>
        </footer>
      </main>
    </div>
  )
}
