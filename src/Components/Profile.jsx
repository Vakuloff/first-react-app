import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Profile = () => {
    return (
    	<Col lg={10}>
    		<div className='content'>
				<div>
					<img src="https://media.gettyimages.com/photos/toronto-ontario-canada-picture-id500256497?s=612x612" alt="banner" />
				</div>
				<div>
					ava
				</div>
				<div>
					My post
					<div>
						New Post
					</div>
					<div>
						<div>
							Post1
						</div>
						<div>
							Post2
						</div>
					</div>
				</div>
			</div>
    	</Col>
    );
}

export default Profile;