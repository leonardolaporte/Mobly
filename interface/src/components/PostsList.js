import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import api from '../api'
 
class PostsList extends Component {
 
    constructor () {
        super()
        this.state = {
            posts: []
        }
    }
 

    componentDidMount () {
		const postId = this.props.match.params.id;
        axios.get(api.posts + '/' + postId).then(response => {
            this.setState({
                posts: response.data
            })
        })
		
				
    }
 
    render () {
                const { posts } = this.state;
				return (
                    <div className="container">
                    <h2>Lista de Posts</h2>
                    <table className="table ">
                            <thead>
                                    <tr>
                                            <th>ID</th>
                                            <th>Titulo</th>
                                            <th>Texto</th>
                                    </tr>
                            </thead>
                            <tbody>
                                    {
                                        posts.map((post, index) => (
                                            <tr key={post.id}>
                                                    <td>{post.id}</td>
                                                    <td>{post.title}</td>
                                                    <td>{post.body}</td>
                                            </tr>
                                            ))
                                        }
                                            
                            </tbody>
                    </table>
            </div>
        )
        }
}
 
export default PostsList