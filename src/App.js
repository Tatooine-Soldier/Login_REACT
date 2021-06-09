import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm.js'

function App() {
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
    } else {
      console.log('FAIL')
      setError("FAIL incorrect username or password")
    }
  }

  const Logout = () => {
    console.log('logout')
    setUser({username: "", password: ""})
  }
  

  return (
    <div className="App">
      {(user.username != "")?(<div>Hey {user.username} <span><button onClick={Logout}>Logout</button></span></div>)
      :(<LoginForm Login={Login} error={error}/>)}
    </div>
  );
}

export default App;
