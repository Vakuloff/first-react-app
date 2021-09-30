import classes from './Profile.module.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Profile = () => {
    return (
    	<Col lg={10}>
    		<div className={classes.content}>
				<div className={classes.imgwrapper}>
					<img className={classes.banner} src="https://media.gettyimages.com/photos/toronto-ontario-canada-picture-id500256497?s=612x612" alt="banner" />
				</div>
				<div>
					ava
				</div>
				<div>
					My post
					<div>
						New Post
					</div>
					<div className={classes.posts}>
						<div className={classes.item}>
							Post1
						</div>
						<div className={classes.item}>
							Post2
						</div>
					</div>
				</div>
			</div>
    	</Col>
    );
}

export default Profile;