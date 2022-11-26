import React, { Suspense } from 'react';
import { Routes, Route} from 'react-router-dom';

const Users =  React.lazy(()=>import('./Pages/Users'));
const Register = React.lazy(()=>import('./Pages/Register'));
const Login  = React.lazy(()=>import('./Pages/Login'));

function App() {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/users" element={<Users/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Suspense>
  );
}

export default App;
