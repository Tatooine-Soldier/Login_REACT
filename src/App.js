import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm.js'

function App() {
  const [user, setUser] = useState({username:"",password:""})
  const Login = (details) => {
    console.log('login in app')
    setUser({username: details.username, password: details.password})
  }
  

  return (
    <div className="App">
      {(user.username === "")?(<LoginForm />):(<div>Welcome <Login/></div>)}
    </div>
  );
}

export default App;
