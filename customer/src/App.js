import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/auth/Login'
import Home from './components/home/Home'
import ForgotPass from './components/auth/ForgotPass'
import { AuthProvider } from './contexts/AuthContext'

// import PrivateRoute from './utils/PrivateRoute'

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/auth/forgot-password" component={ForgotPass} />

            {/* <PrivateRoute path="/payment" component={payment} /> */}
          </Switch>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
