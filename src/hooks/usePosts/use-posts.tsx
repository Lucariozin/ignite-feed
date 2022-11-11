import { createContext, ReactNode, useContext } from "react";

import { posts } from './use-posts.mock'
import { PostsContextData } from "./use-posts.types";

const PostsContext = createContext({} as PostsContextData)

interface PostsProviderProps {
  children: ReactNode
}

export const PostsProvider = ({ children }: PostsProviderProps) => {
  const value: PostsContextData = { posts }

  return (
    <PostsContext.Provider value={value}>
      {children}
    </PostsContext.Provider>
  )
}

export const usePosts = () => useContext(PostsContext)
