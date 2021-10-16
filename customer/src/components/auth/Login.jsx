import React, { useState } from 'react'
import { useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const { login } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/report-panel')
    } catch (error) {
      setError('Login Failed :(')
      console.error(error)
    }
    setLoading(false)
  }

  return (
    <div
      className="App container d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-100" style={{ maxWidth: '600px' }}>
        <div className="card rounded-5 shadow">
          <div className="card-body">
            <h4 className="text-center mb-4">Login</h4>

            {error && (
              <div class="alert alert-danger mx-4 text-center" role="alert">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group m-4">
                {/* <label htmlFor="inputEmail1">Email address</label> */}
                <input
                  type="email"
                  ref={emailRef}
                  className="form-control"
                  id="inputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter username or email id"
                  required
                />
              </div>

              <div className="form-group m-4">
                {/* <label htmlFor="inputPassword">Password</label> */}
                <input
                  type="password"
                  ref={passwordRef}
                  className="form-control"
                  id="inputPassword"
                  placeholder="Enter password"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary d-block mx-auto px-5 rounded-0"
                disabled={loading}
              >
                {loading ? 'loading...' : 'Log In'}
              </button>
            </form>
          </div>

          <Link
            to="/auth/forgot-password"
            className="w-100 text-center mt-1 mb-4 text-decoration-none"
          >
            Forgot Password?
          </Link>
          {/* <Link
            to="/forgot-email"
            className="w-100 text-center mt-1 mb-4 text-decoration-none text-warning"
          >
            Forgot Username or email ?
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default Login
