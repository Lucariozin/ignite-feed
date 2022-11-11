import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { PostsProvider } from './hooks/usePosts'
import { UserProvider } from './hooks/useUser'

import './styles/global.styles.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <PostsProvider>

        <App />

      </PostsProvider>
    </UserProvider>
  </React.StrictMode>
)
