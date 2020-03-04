import React, { Component } from 'react';

export class UserSignIn extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-3">

                        </div>
                        <div class="col-lg-5">
                            <div class="block" style={{ marginTop: '40%' }}> 
                                <div class="block-body">
                                    <form> 
                                        <div className="form-group">
                                            <label>User Name</label>
                                            <input type="email" className="form-control" placeholder="Enter email" />
                                        </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" placeholder="Enter password" />
                                        </div>

                                        <button type="submit" className="btn btn btn-success btn-block">Sign In</button>
                                        <p className="forgot-password text-right">
                                            <a href="#">forgot password?</a>
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




