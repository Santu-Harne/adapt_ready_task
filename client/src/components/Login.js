import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { login } from '../actions/DishActions'

function Login(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    //to read value from input
    const readValue = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const submitHandler = async (e) => {
        e.preventDefault() // to avoid page refresh
        try {
            dispatch(login(user)).unwrap()
                .then(res => {
                    toast.success(res.msg)
                    navigate('/dishlist')
                }).catch(err => toast.error('Invalid Credentials'))
        } catch (err) {
            console.log(err.message)
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-info">Login</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={submitHandler} autoComplete='on'>
                                <div className="form-group mt-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" value={user.email} onChange={readValue} className='form-control' placeholder='mohan@gmail.com' required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" value={user.password} onChange={readValue} className='form-control' placeholder='mohan1234' required />
                                </div>
                                <div className="form-group mt-2">
                                    <input type="submit" value={'Login'} className='btn btn-success' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login