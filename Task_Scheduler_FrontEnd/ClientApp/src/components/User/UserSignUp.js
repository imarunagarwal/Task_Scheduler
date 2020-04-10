import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../NewFolder/SignUpForm.css';
export class UserSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { firstName: "", lastName:"", emailAddress:"", password:""};
    }

    handle = () => {


    }
    render() {
        return (
            <section>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-3">
                        </div>
                        <div class="col-lg-5"> 
                            <div class="block" style={{ marginTop: '30%' }}>
                                <div class="block-header">
                                    <h6 class="text-uppercase mb-0">New account</h6>
                                </div>
                                <div class="block-body">
                                    <form>
                                        <div class="form-group">
                                            <label>First name</label>
                                            <input type="text" class="form-control" placeholder="First name"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Last name</label>
                                            <input type="text" class="form-control" placeholder="Last name" />
                                        </div>

                                        <div class="form-group">
                                            <label>Email address</label>
                                            <input type="email" class="form-control" placeholder="Enter email" />
                                        </div>

                                        <div class="form-group">
                                            <label>Password</label>
                                            <input type="password" class="form-control" placeholder="Enter password" />
                                        </div>

                                        <button type="submit" class="btn btn btn-success btn-block">Sign Up</button>
                                        <p class="forgot-password text-right"> 
                                            Already registered? <Link to="/UserSignIn">Sign in</Link>
                                        </p>
                                    </form> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}




