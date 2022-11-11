import { ReactNode } from "react"
import styles from './template.module.scss'

interface TemplateProps {
  children: ReactNode
}

export const Template = ({ children }: TemplateProps) => {
  return (
    <main className={styles.container}>
      {children}
    </main>
  )
}
