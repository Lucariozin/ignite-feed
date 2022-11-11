import { Post } from "./use-posts.types";

export const posts: Post[] = [
  {
    id: 1,
    author: {
      name: 'João da Silva',
      role: 'UI/UX Designer',
      avatar: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80',
    },
    content: [
      {
        id: 1,
        type: 'paragraph',
        text: 'Fala galeraa 👋',
      },
      {
        id: 2,
        type: 'paragraph',
        text: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        id: 3,
        type: 'link',
        text: '👉joao.design/doctorcare',
        href: '#',
      },
    ],
    publicationDate: new Date('2022-11-06 13:00:00'),
    hashtags: ['#novoprojeto', '#nlw', '#rocketseat'],
    comments: [
      {
        id: 1,
        applauseAmount: 7,
        author: {
          avatar: 'https://github.com/Lucariozin.png',
          name: 'Lucas Felix',
        },
        commentDate: new Date('2022-11-06 14:00:00'),
        content: 'Muito bom João, parabéns!! 👏👏',
      },
      {
        id: 2,
        applauseAmount: 4,
        author: {
          avatar: 'https://github.com/Lucariozin.png',
          name: 'Lucas Felix',
        },
        commentDate: new Date('2022-11-06 14:01:00'),
        content: 'Arrasou!',
      },
    ],
  },
  {
    id: 2,
    author: {
      name: 'João da Silva',
      role: 'UI/UX Designer',
      avatar: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80',
    },
    content: [
      {
        id: 1,
        type: 'paragraph',
        text: 'Fala galeraa 👋',
      },
      {
        id: 2,
        type: 'paragraph',
        text: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        id: 3,
        type: 'link',
        text: '👉joao.design/doctorcare',
        href: '#',
      },
    ],
    publicationDate: new Date('2022-11-06 13:00:00'),
    hashtags: ['#novoprojeto', '#nlw', '#rocketseat'],
    comments: [
      {
        id: 1,
        applauseAmount: 7,
        author: {
          avatar: 'https://github.com/Lucariozin.png',
          name: 'Lucas Felix',
        },
        commentDate: new Date('2022-11-06 14:00:00'),
        content: 'Muito bom João, parabéns!! 👏👏',
      },
      {
        id: 2,
        applauseAmount: 4,
        author: {
          avatar: 'https://github.com/Lucariozin.png',
          name: 'Lucas Felix',
        },
        commentDate: new Date('2022-11-06 14:01:00'),
        content: 'Arrasou!',
      },
    ],
  },
]
