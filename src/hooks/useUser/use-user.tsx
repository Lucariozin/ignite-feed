import { createContext, ReactNode, useContext } from "react";

type UserContextData = {
  userData: {
    id: number
    name: string
    role: string
    avatar: string
    banner: string
  }
}

const UserContext = createContext({} as UserContextData)

interface UserProviderProps {
  children: ReactNode
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const value: UserContextData = {
    userData: {
      id: 1,
      name: 'Lucas Felix',
      role: 'Web Developer',
      avatar: 'https://github.com/Lucariozin.png',
      banner: 'https://images.unsplash.com/photo-1667895543045-a1865b489071?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
