import { ImgHTMLAttributes } from "react";
import styles from './avatar.module.scss'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  border?: boolean
}

export const Avatar = ({ src, border = false, ...props }: AvatarProps) => {
  if (!src) return (
    <div className={styles.container}></div>
  )

  return (
    <img
      src={src}
      className={border ? styles['container-with-border'] : styles.container}
      {...props}
    />
  )
}
