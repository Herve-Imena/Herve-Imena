import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from './useFetch'


const BlogDetails = () => {
    const history= useHistory()
    const {id} = useParams();
    const {data: blog, error , isPending} = useFetch('http://localhost:8000/blogs/'+ id);
    const handleClick=()=>{
        fetch('http://localhost:8000/blogs/'+ blog.id, {
            method: 'DELETE'
        }).then(()=>{
            history.push('/')
        })
    }
    return ( 
        <div className="blog-details">
            {isPending && <h2>Loading...</h2>}
            {error && <h2>{ error} </h2>}
            {blog && (
                <article>
                     <h2> {blog.title} </h2>
                     <p>Written by {blog.author}</p>
                     <div> {blog.body}</div>
                     <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;