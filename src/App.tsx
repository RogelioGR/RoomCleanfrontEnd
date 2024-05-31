import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'

/* View paginas del sitio */
import Login from './Pages/Login';
import DashboardAdmin from './Pages/Dashboard-Admin';
import Dashboardempleado from './Pages/Dashboard-Empleado';
import ViewPerfil from './Pages/ViewPerfil';
import TaskEmpleado from './Pages/ViewTaskEmpleado';
import AssignTasksAdmin from './Pages/Assign-tasks';
import Viewinform from './Pages/ViewInform';


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/DashboardAdmin" element={<DashboardAdmin />} />
          <Route path="/Dashboardempleado" element={<Dashboardempleado />} />
          <Route path="/ViewPerfil" element={<ViewPerfil/>} />
          <Route path="/TaskEmpleado" element={<TaskEmpleado />} />
          <Route path="/AssignTasksAdmin" element={<AssignTasksAdmin />} />
          <Route path="/Viewinform" element={<Viewinform/>} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;






