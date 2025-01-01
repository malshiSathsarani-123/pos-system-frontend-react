import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from "./Users";
import Dashboard from "./Dashboard";
import Login from "./Login";

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/users' element={<Users />}/>
                <Route path='/dashboard' element={<Dashboard />}/>
            </Routes>
        </Router>
    );
}

export default App;
