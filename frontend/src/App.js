import SignUp from './screens/user/SignUp';
import SignIn from './screens/user/SignIn';
import './App.css';
import Welcome from './screens/Welcome/Welcome';
import Home from './screens/home/Home';

import {BrowserRouter as Router , Routes , Route  } from "react-router-dom";


function App() {
  return (
    <div className="App">
   

      <Router>
        <Routes>
        
         
       
          <Route element={<SignUp/>} path="/signup"/>
          <Route element={<Home/>} path="/"/>
          <Route element={<SignIn/>} path="/signin"/>
          <Route element={<Welcome/>} path="/welcome"/>
</Routes>
</Router>


    
    </div>
  );
}

export default App;
