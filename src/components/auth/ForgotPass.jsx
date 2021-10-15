import React, { useState } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

function ForgotPass() {
  const emailRef = useRef()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const { resetPassword } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setSuccess('Password reset mail sent successfully🎉')
    } catch (error) {
      setError('failed to send password reset link')
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
            <h4 className="text-center mb-4">Password Reset</h4>
            {error && (
              <div class="alert alert-danger mx-4 text-center" role="alert">
                {error}
              </div>
            )}
            {success && (
              <div class="alert alert-success mx-4 text-center" role="alert">
                {success}
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
            to="/login"
            className="w-100 text-center mt-1 text-decoration-none"
          >
            Go back to log in
          </Link>
          <Link
            to="/forgot-email"
            className="w-100 text-center mt-1 mb-4 text-decoration-none"
          >
            Forgot Username or email ?
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPass
