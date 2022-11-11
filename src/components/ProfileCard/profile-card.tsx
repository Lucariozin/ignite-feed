import { PencilSimpleLine } from 'phosphor-react'

import { Avatar } from '../Avatar'

import styles from './profile-card.module.scss'

interface ProfileCardProps {
  banner: string
  avatar: string
  name: string
  role: string
}

export const ProfileCard = ({ banner, avatar, name, role }: ProfileCardProps) => {
  return (
    <div className={styles.container}>
      <img
        src={banner}
        className={styles.banner}
      />

      <div className={styles['profile-data']}>
        <Avatar src={avatar} border />

        <p>{name}</p>
        <span>{role}</span>
      </div>

      <span className={styles.separator}></span>

      <button>
        <PencilSimpleLine size={20} color="#00B37E" />

        Editar seu perfil
      </button>
    </div>
  )
}
