
import { Routes,Route } from 'react-router-dom';
import './App.css'
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Home from './Home/Home';

import AddBL from './AddBL/AddBL';
import ViewBL from './ViewBL/ViewBL';
import ExcelPage from './ExcelPage/ExcelPage';

function App() {
 

  return (
    <div className='app'>
  


   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/home' element={<Home/>} />
    <Route path="/bl/:idUser/:idColis/:id/add" element={<AddBL/>} />
    <Route path='/viewbl' element={<ViewBL/>}></Route>
    <Route path='/excel' element={<ExcelPage/>}></Route>
  </Routes> 
    
  
  </div>

  );
}

export default App
