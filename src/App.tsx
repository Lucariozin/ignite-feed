import { Header } from "./components/Header"
import { PostSection } from "./components/PostSection"
import { ProfileCard } from "./components/ProfileCard"
import { Template } from "./components/Template"

import { usePosts } from "./hooks/usePosts"
import { useUser } from "./hooks/useUser"

const App = () => {
  const { userData } = useUser()
  const { posts } = usePosts()

  return (
    <>
      <Header />

      <Template>
        <ProfileCard
          name={userData.name}
          role={userData.role}
          avatar={userData.avatar}
          banner={userData.banner}
        />

        <PostSection posts={posts} />
      </Template>
    </>
  )
}

export default App
