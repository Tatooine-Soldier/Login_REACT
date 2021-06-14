import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm.js'
import Home from './Pages/Home.js'
import Navbar from './components/Navbar'

const DEFAULT_PAGE = ""
const HOME_PAGE = "home"

function App() {
  const [page, setPage] = useState(DEFAULT_PAGE)

  const adminUser = {
    username: "tj@gmail.com",
    password: "tod123"
  }
  const [user, setUser] = useState({username:"",password:""})
  const [error, setError] = useState("")

  const Login = (details) => {
    console.log('login in app')
    if (details.username === adminUser.username && details.password === adminUser.password) {
      console.log('Logged In')
      setUser({username: details.username, password: details.password})
      setPage(HOME_PAGE)
    } else {
      console.log('FAIL')
      setError("FAIL incorrect username or password")
    }
  }

  const Logout = () => {
    console.log('logout')
    setUser({username: "", password: ""})
  }
  
  function renderHome() {
    console.log('rendering home')
    return (
      <>
        <header><h1>WebApp</h1><Navbar username={user.username}/></header>
        <div>Welcome {user.username}</div>
      </>
    )
  }

  return (
    <div className="App">
      {(user.username != "")?
        (<>
          <div className="main">
            {renderHome(user.username)}
            <span><button onClick={Logout}>Logout</button></span>
          </div>
        </>
        )
      :(<div id="log_cont"><LoginForm Login={Login} error={error}/></div>)}

      
    </div>
  );
}

export default App;
