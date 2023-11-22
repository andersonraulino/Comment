import { Header } from './components/Header';
import { Post }  from './components/Post';
import { Sidebar } from './components/sidebar';

import styles from './App.module.css'

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/andersonraulino.png',
      name: 'Anderson Raulino Da Silva',
      role: 'Front-end'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt:new Date('2023-07-08 20:40:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Phraulino.png',
      name: 'Paulo Henrique Raulino Da Silva',
      role: 'FullStack'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt:new Date('2023-07-12 02:40:00')
  },
];

// Iteração

export function App() {
  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {posts.map(post => {
          return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}vs
            />
          )
        })}
        </main>
      </div>

    </>
  )
}
