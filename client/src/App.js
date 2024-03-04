import logo from './logo.svg';
import Login from "./Components/Login/Login"
import CContext from './Context/TransactionContext';
import './App.css';
import User from './Components/User/User';

function App() {
  return (
    <>
    <CContext>
    <div className='login'><Login /></div>
    <User/>
    </CContext>
    </>
  );
}

export default App;
