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
      { type: 'paragraph', content: 'Bom jogo time, peço desculpa por não ter ido, mas foi pq minha mãe não deixou' },
      { type: 'link', content: '#VamoTomba' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://i.im.ge/2023/10/02/N86ujT.edu.jpg',
      name: 'Eduardo Centenaro',
      role: 'Goleiro'
    },
    content: [
      { type: 'paragraph', content: 'Oi gente' },
      { type: 'paragraph', content: 'Gostaria de parabenizar o time pelo jogo de ontem. Jogamos muito bem e perdemos por puro azar. Espero ter contribuído tomando apenas 15 gols' },
      { type: 'link', content: '#ValeuGalera #JogamosDemais' },
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


 