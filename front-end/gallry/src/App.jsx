import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './assets/page/HomePage'
import Login from './assets/page/Login'
import Register from './assets/page/register'


function App() {

  return (
    <>
    <Router>
      <Switch> 
        <Route exact path='/'>
          <HomePage/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/register'>
          <Register/>
        </Route>
      </Switch>
    </Router>
    </>
  )
}

export default App