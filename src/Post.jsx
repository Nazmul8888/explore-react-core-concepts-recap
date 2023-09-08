
import './Post.css'
export default function Post({post}){
    const {title, body,id, userId} = post;

    return(
        <div className='box'>
            <h4>Title:{title} </h4>
            <p><small>userId: {body} </small></p>
            <p><small>postId: {id} </small></p>
            <p><small>userId: {userId} </small></p>
        </div>
    )
}