import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Editor } from '../CommentSection/Editor';
import { PostHeader } from './PostHeader';
import { PostBody } from './PostBody';
import './Post.css';
import uuid from 'uuid';

export class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: this.props.post,
			form: {
				comment: ''
			}
		};
	}

	handleDelete = id => {
		this.setState(prevState => {
			const { post } = prevState;

			post.comments.splice(id, 1);

			return {
				post
			};
		});
	};

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
			const username = JSON.parse(localStorage.getItem('username'));

			if (form.comment.trim() !== '') {
				if (post.id === id) {
					const newComment = {
						id: uuid(),
						username: username,
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
			}
		});
	};

	render() {
		const { thumbnailUrl, username, imageUrl, id, likes, likeStatus, comments, timestamp } = this.props.post;
		const { handleLike } = this.props;

		const { form } = this.state;

		return (
			<article className="post">
				<PostHeader thumbnailUrl={thumbnailUrl} username={username} />
				<PostBody
					imageUrl={imageUrl}
					likes={likes}
					comments={comments}
					id={id}
					handleLike={handleLike}
					likeStatus={likeStatus}
					handleDelete={this.handleDelete}
					timestamp={timestamp}
				/>
				<footer className="post-footer">
					<Editor comment={form.comment} inputChange={this.inputChange} addNewComment={this.addNewComment} id={id} />
				</footer>
			</article>
		);
	}
}

Post.propTypes = {
	post: PropTypes.object.isRequired,
	handleLike: PropTypes.func.isRequired
};
