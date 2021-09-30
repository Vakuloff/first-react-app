import classes from './Post.module.css';

const Post = (props) => {
    return (
		<div className={classes.item}>
			<img className={classes.avatar} src="https://cdn.wallpapersafari.com/37/79/W90lpP.jpg" alt="avatar" />
			<span>{props.message}</span>
			<div>
				<span>Like</span>
			</div>
			
		</div>
    );
}

export default Post;