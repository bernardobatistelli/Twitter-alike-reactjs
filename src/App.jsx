import { Post } from './components/Post'
import { Header } from './components/header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://i.im.ge/2023/09/21/NoPAyJ.joaozinho.jpg",
      name: 'Joaozinho Wittcinski',
      role: 'Ala Esquerdo'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de comprar mais um pacotão de bala fini. Meu irmão é o Carlinhos e meus pais são demais' },
      { type: 'link', content: '#UéeeeeeeeUéeeeeeee' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

export function App() { 
  return (
    <div>

    <Header/>

    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
      {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
      </main>
    </div>
      
    </div>
  )
}


 