import { useContext } from 'react';
import logo from './logo.svg';
import { AuthContext } from './Context/AuthContextProvider';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';


function App() {
  const {isAuth} = useContext(AuthContext)
  return (
    <div>
      {isAuth ? <Dashboard/> : <Login/>}
    </div>
  );
}

export default App;
