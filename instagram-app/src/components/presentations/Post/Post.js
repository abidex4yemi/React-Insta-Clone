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

	increaseLikes = id => {
		this.setState(prevState => {
			const { post } = prevState;
			const likes = post.likes + 1;

			return {
				post: {}
			};
		});
	};

	render() {
		const { thumbnailUrl, username, imageUrl, id, likes, comments } = this.props.post;

		const { form } = this.state;

		return (
			<article className="post">
				<PostHeader thumbnailUrl={thumbnailUrl} username={username} />
				<PostBody imageUrl={imageUrl} increaseLikes={this.increaseLikes} likes={likes} comments={comments} id={id} />
				<footer className="post-footer">
					<Editor comment={form.comment} inputChange={this.inputChange} addNewComment={this.addNewComment} id={id} />
				</footer>
			</article>
		);
	}
}

Post.propTypes = {
	post: PropTypes.object.isRequired
};
