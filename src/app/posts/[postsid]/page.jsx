import BackButton from "@/Components/BackButton/BackButton";
import styles from "./Posts.module.css"
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";

export default async function PostsDetailsPage({params}) {
const {postsid} = await params
 const url = `https://dummyjson.com/posts/${postsid}`
    const response = await fetch(url)
    const data = await response.json()
  return (
    <div className={styles.card}>
        <h1 className={styles.h1}>{data.title}</h1>
        <p className={styles.p}>{data.body}</p>
        <div className={styles.tags}>
        {data.tags.map((tag)=>(<h5 key={tag}>#{tag}</h5>))}
        </div>
        <div className={styles.react}>
        <h4><FcLike />: {data.reactions.likes}</h4>
        <h4><FcDislike />: {data.reactions.dislikes}</h4>
        </div>
         <BackButton/>
    </div>
  )
}
