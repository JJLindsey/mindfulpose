import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(formState.lastName)
        addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                firstName: formState.firstName,
                lastName: formState.lastName,
            },
        }).then(mutationResponse => {
            const token = mutationResponse.data.addUser.token;
            Auth.login(token);
        }).catch(err => {
            console.log('Could not add user to back end!', err)
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className="container my-1">
            <Link to="/login">← Go to Login</Link>

            <h2>Signup</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="flex-row space-between my-2">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        placeholder="First"
                        name="firstName"
                        type="firstName"
                        id="firstName"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        placeholder="Last"
                        name="lastName"
                        type="lastName"
                        id="lastName"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="email">Email:</label>
                    <input
                        placeholder="youremail@test.com"
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="pwd">Password:</label>
                    <input
                        placeholder="******"
                        name="password"
                        type="password"
                        id="pwd"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row flex-end">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;