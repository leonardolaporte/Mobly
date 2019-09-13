import axios from 'axios'
import React, { Component } from 'react'
import api from '../api'
import { withRouter } from 'react-router-dom'
 
class UpdateUser extends Component {
 
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      username: '',
      email: '',
      phone: '',
      website: ''
    }
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
 
  componentDidMount () {
    const userId = this.props.match.params.id
 
    axios.get(api.users+`/${userId}`).then(response => {
      this.setState({
        name: response.data[0].name,
        username: response.data[0].username,
        email: response.data[0].email,
        phone: response.data[0].phone,
        website: response.data[0].website
      })
    })
  }
 
  handleFieldChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
 
  onSubmit (event) {
    event.preventDefault();
    const { history } = this.props
    const user = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      phone: this.state.phone,
      website: this.state.website
    }
    axios.post(api.users+'/'+this.props.match.params.id, user)
      .then(response => {
        history.push('/')
      })
      .catch(error => {
        this.setState({
          errors: error.response.data.errors
        })
      })
  }
 
  render () {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-header'>Editar Usu&aacute;rio</div>
              <div className='card-body'>
                <form onSubmit={this.onSubmit}>
                  <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input
                      id='name'
                      type='text'
                      className='form-control'
                      name='name'
                      value={this.state.name}
                      onChange={this.handleFieldChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input
                      id='username'
                      type='text'
                      className='form-control'
                      name='username'
                      value={this.state.username}
                      onChange={this.handleFieldChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='email'>E-mail</label>
                    <input
                      id='email'
                      type='text'
                      className='form-control'
                      name='email'
                      value={this.state.email}
                      onChange={this.handleFieldChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='phone'>Telefone</label>
                    <input
                      id='phone'
                      type='text'
                      className='form-control'
                      name='phone'
                      value={this.state.phone}
                      onChange={this.handleFieldChange}
                    />
                  </div>    
                  <div className='form-group'>
                    <label htmlFor='website'>Site</label>
                    <input
                      id='website'
                      type='text'
                      className='form-control'
                      name='website'
                      value={this.state.website}
                      onChange={this.handleFieldChange}
                    />
                  </div>               
                  <button onClick={ () => this.props.history.goBack()} className='btn btn-default'>Cancelar</button>
                  <button className='btn btn-primary'>Atualizar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
 
export default UpdateUser