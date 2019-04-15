import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            display_name: '',
            email: '',
            password: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        

        const user = {
            username: this.state.username,
            display_name: this.state.display_name,
            email: this.state.email,
            password: this.state.password
        }

        register(user).then(res => {
            // this.props.history.push(`/login`)
        }).then(
            window.alert(user.username+" has been registered")
        )
    }

    render () {
        return (

            // <div class="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            //     <form noValidate onSubmit={this.onSubmit}>
            //         <div class="modal-dialog" role="document">
            //             <div class="modal-content">
            //                 <div class="modal-header text-center">
            //                     <h4 class="modal-title w-100 font-weight-bold">Register</h4>
            //                     <button type="button" 
            //                         class="close" 
            //                         data-dismiss="modal" 
            //                     aria-label="Close">
            //                         <span aria-hidden="true">&times;</span>
            //                     </button>
            //                 </div>
            //                 <div class="modal-body mx-3">
            //                     <div class="md-form mb-5">
            //                         <i class="fas fa-user prefix grey-text"></i>
            //                         <input type="text" 
            //                             id="orangeForm-name" 
            //                             class="form-control validate" 
            //                             name = "username"
            //                             value={this.state.username}
            //                             onChange={this.onChange}
            //                             placeholder="Name"/>
            //                         <label data-error="wrong" data-success="right" for="orangeForm-name" > </label>
            //                     </div>
            //                     <div class="md-form mb-5">
            //                         <i class="fas fa-envelope prefix grey-text"></i>
            //                         <input type="email" 
            //                             id="orangeForm-email" 
            //                             class="form-control validate"
            //                             name = "email"
            //                             value={this.state.email}
            //                             onChange={this.onChange} 
            //                             placeholder="Email"/>
            //                         <label data-error="wrong" data-success="right" for="orangeForm-email"> </label>
            //                     </div>

            //                     <div class="md-form mb-4">
            //                         <i class="fas fa-lock prefix grey-text"></i>
            //                         <input type="password" 
            //                             id="orangeForm-pass" 
            //                             class="form-control validate"
            //                             name = "password"
            //                             value={this.state.password}
            //                             onChange={this.onChange} 
            //                             placeholder="Password"/>
            //                         <label data-error="wrong" data-success="right" for="orangeForm-pass"> </label>
            //                     </div>
            //                 </div>

            //                 <div class="modal-footer d-flex justify-content-center">
            //                     <button type="submit"
            //                         // data-dismiss="modal"
            //                         class="btn btn-deep-orange">
            //                             Sign up
            //                     </button>
            //                 </div>
            //             </div>
            //         </div>
            //     </form>
            // </div>

            
                    <div className="col-md-6 mt-5 mx-auto">
                <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Sign-up</h1>
                            <div className="form-group">
                                <label htmlFor="username">Username:</label>
                                <input type="text"
                                    className="form-control"
                                    name = "username"
                                    placeholder="Enter Username"
                                    value={this.state.username}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="display_name">Display Name: </label>
                                <input type="text"
                                    className="form-control"
                                    name = "display_name"
                                    placeholder="Enter Display Name"
                                    value={this.state.display_name}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>
                            <button type="submit" 
                                className = "search-button">
                                Register
                            </button>
                    </form>
                    </div>
                
        )
    }
}

export default Register