import styles from './Home.module.css'

import posts from '../../json/posts.json'
import PostCard from '../PostCard'

function Home() {
    return (
        <ul className={styles.posts}>
            {posts.map(post =>{
                return(
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                )
            })}
        </ul>
    )
}

export default Home