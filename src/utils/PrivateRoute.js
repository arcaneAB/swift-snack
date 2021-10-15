import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function PrivateRoute(props) {
  const { currentUser } = useAuth()
  const location = useLocation()

  return (
    <>
      {currentUser ? (
        <Route exact path={props.path} component={props.component} />
      ) : (
        <Redirect to={{ pathname: '/auth/login', state: { from: location } }} />
      )}
    </>
  )
}

export default PrivateRoute
