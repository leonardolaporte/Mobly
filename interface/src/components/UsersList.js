import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import api from '../api'
 
class UsersList extends Component {
 
    constructor () {
        super()
        this.state = {
            users: []
        }
    }
 

    componentDidMount () {
        axios.get(api.users).then(response => {
            this.setState({
                users: response.data
            })
        })
    }
 
    deleteUser (userId) {
            axios.delete(api.users+'/'+`${userId}`)
            .then(() => {
 
                    return axios.get(api.users)
            })
            .then(res => {
 
                    const users = res.data;
                    this.setState({ users });
            })
    }
    render () {
                const { users } = this.state
                return (
                    <div className="container">
                    <h2>Lista de Usu&aacute;rios</h2>
                    <table className="table ">
                            <thead>
                                    <tr>
                                            <th>ID</th>
                                            <th>Nome</th>
                                            <th>Username</th>
                                            <th>Telefone</th>
                                            <th>E-mail</th>
                                            <th>Site</th>
                                            <th>
                                                <Link 
                                                    className='btn btn-primary btn-xs' 
                                                    to='/create'
                                                >
                                                            Adicionar Usu&aacute;rio
                                                    </Link>
                                            </th>
                                    </tr>
                            </thead>
                            <tbody>
                                    {
                                        users.map((user, index) => (
                                            <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                        <td>{user.name}</td>
                                                            <td>{user.username}</td>
                                                            <td>{user.phone}</td>
                                                            <td>{user.email}</td> 
                                                            <td>{user.website}</td>                               
                                                            <td>
                                                            <Link 
                                                            className='btn btn-primary btn-xs' 
                                                            to={`/user/${user.id}`}
                                                        >
                                                            Editar
                                                        </Link>
															
														&nbsp;
                                                            <Link 
                                                            className='btn btn-secondary btn-xs' 
                                                            to={`/post/${user.id}`}
                                                        >
                                                            Posts
                                                        </Link>
														&nbsp;
                                                            <button 
                                                                className="btn btn-danger btn-xs btn-delete"
                                                                onClick={ () => this.deleteUser(user.id) }
                                                            >
                                                                Excluir
                                                            </button>
                                                    </td>
                                            </tr>
                                            ))
                                        }
                                            
                            </tbody>
                    </table>
            </div>
        )
        }
}
 
export default UsersList