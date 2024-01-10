import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './assets/page/HomePage'
import Login from './assets/page/login'
import Register from './assets/page/register'




function App() {
  const login = window.localStorage.getItem("CapacitorStorage.token")
  return (
    <>
    <Router>
      <Switch> 
        <Route exact path='/'>
   <HomePage/> 
        </Route>
        <Route path='/login'>
          {login? <HomePage/> :<Login/> }
        </Route>
        <Route path='/register'>
          {login? <HomePage/> :<Register/> }
        </Route>
      </Switch>
    </Router>
    </>
  )
}

export default App