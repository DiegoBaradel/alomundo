import { Route, Routes, useParams } from 'react-router-dom'
import './Post.css'
import styles from './Post.module.css'
import posts from '../../json/posts.json'
import PostModelo from '../PostModelo'
import ReactMarkdown from 'react-markdown'
import Erro404 from '../Erro404'
import PaginaPadrao from '../PaginaPadrao'
import PostCard from '../PostCard'

const Post = ()=>{
    const parametros = useParams()
    const post = posts.find((post)=>{
        return  post.id === Number(parametros.id)
    })

        if (!post) {
            return <Erro404/>
        }

        const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a,b)=> a.id - b.id)
        .slice(0, 4)

    return(
        <Routes>
            <Route path='*' element={<PaginaPadrao/>}>
                <Route index element={
                    <PostModelo
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className='post-markdown-container'>
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                        <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>

                        <ul className={styles.postsRecomendados}>
                            {postsRecomendados.map((post)=>(
                                <li key={post.is}>
                                    <PostCard post={post}/>
                                </li>
                            ))}
                        </ul>
                    </PostModelo>
                }/>

            </Route>
        </Routes>
    )
}

export default Post