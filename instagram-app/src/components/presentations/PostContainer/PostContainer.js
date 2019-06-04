import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CommentSection } from '../CommentSection/CommentSection';
import { Editor } from '../CommentSection/Editor';
import './PostContainer.css';
import uuid from 'uuid';

export class PostContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: this.props.post,
			form: {
				comment: ''
			}
		};
	}

	inputChange = (field, value) => {
		this.setState(prevState => ({
			form: {
				...prevState.form,
				[field]: value
			}
		}));
	};

	addNewComment = id => {
		this.setState(prevState => {
			const { post, form } = prevState;
			if (post.id === id) {
				const newComment = {
					id: uuid(),
					username: 'Yemi',
					text: form.comment
				};

				if (post.comments) {
					post.comments.unshift(newComment);
				}

				if (!post.comments) {
					post.comments.unshift([newComment]);
				}
			}

			// Create new posts
			return {
				post,
				form: {
					comment: ''
				}
			};
		});
	};

	render() {
		const { post } = this.props;

		const { form } = this.state;

		return (
			<article className="post">
				<header className="post-header">
					<img src={post.thumbnailUrl} alt={post.username} className="user-thumbnail" />
					<p className="username">{post.username}</p>
				</header>
				<div className="post-body">
					<div className="image-container">
						<img src={post.imageUrl} alt="Post img" />
					</div>
					<div className="action-icons">
						<span className="like">
							<i className="icon ion-md-heart" />
						</span>
						<span className="comment">
							<i className="icon ion-md-text" />
						</span>
						<span className="share">
							<i className="icon ion-md-share-alt" />
						</span>

						<a href="#!" className="bookmark">
							<i className="icon ion-md-bookmark" />
						</a>
					</div>
					<CommentSection comments={post.comments} />
				</div>
				<footer className="post-footer">
					<Editor
						comment={form.comment}
						inputChange={this.inputChange}
						addNewComment={this.addNewComment}
						id={post.id}
					/>
				</footer>
			</article>
		);
	}
}

PostContainer.propTypes = {
	post: PropTypes.object.isRequired
};
