import classes from './MyPosts.module.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Post from './Post/Post'

const MyPosts = () => {
    return (
    	<div>
			<h3>My Posts</h3>
			<div>
				<textarea></textarea>
				<button>Add Post</button>
			</div>
			<div className={classes.posts}>
				<Post message="Hi! How are you?" />
				<Post message="It's my first post!" />
			</div>
		</div>
    );
}

export default MyPosts;