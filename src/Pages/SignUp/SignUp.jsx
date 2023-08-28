import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const SignUp = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = (event) =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            
              updateUserProfile(name)
              .then(()=>{})
              .catch(error => console.log(error.message))

              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully SignUp',
                showConfirmButton: false,
                timer: 1500
              })

              navigate('/');
        })
        .catch(error =>{
            console.log(error.message);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
              })
        })

        event.target.reset();

    }

    return (
        <div>
           <div className="hero my-5 mb-10">
                <div className="space-y-5">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-error">Sign Up now!</h1>
                    </div>
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <span>Don't have an Account? <Link className='text-error' to='/signIn'>SignIn</Link></span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-error text-white" type="submit" value="Sign Up" />
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;