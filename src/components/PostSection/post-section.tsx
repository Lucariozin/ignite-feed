import { Post } from '../Post/post'
import { Post as PostType } from '../../hooks/usePosts/use-posts.types'

import styles from './post-section.module.scss'

interface PostSection {
  posts: PostType[]
}

export const PostSection = ({ posts }: PostSection) => {
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <Post
          key={post.id}
          avatar={post.author.avatar}
          name={post.author.name}
          role={post.author.role}
          publicationDate={post.publicationDate}
          content={post.content}
          hashtags={post.hashtags}
          comments={post.comments}
        />
      ))}
    </div>
  )
}
