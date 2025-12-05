import NavBar from "@/Components/NavBar/NavBar"
import { PostsCard } from "@/Components/PostsCard/PostsCard"


export default async function PostsData() {
    const url = "https://dummyjson.com/posts"
    const response = await fetch(url)
    const data = await response.json()
    const posts = data.posts


    return (
    <>
     <NavBar/>
    <h1 className="text-center mb-3 p-2">Posts Page</h1>
    <div className="row gap-2">
    {posts.map((post)=>(<PostsCard post={post} key={post.id}/>))}
    </div>
    </>
  )
}
