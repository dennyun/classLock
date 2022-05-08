import {BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login';
import { Quiz } from '../pages/Quiz';
import { Register } from '../pages/Register';

export const AppRouter = () =>{
    return(
        <Router>
            <Routes>
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/quiz' element={<Quiz/>}/>
            </Routes>
        </Router>
    );
}