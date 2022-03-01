import React from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom"
import NewEmployee from './pages/NewEmployee/NewEmployee';
import ViewEmployee from './pages/ViewEmployee/ViewEmployee';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewEmployee></NewEmployee>}>          
        </Route>
        <Route path="/employees" element={<ViewEmployee></ViewEmployee>}>          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
