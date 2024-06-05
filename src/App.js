import React from 'react'
import Login from './Components/MajorComponents/Login';
import {  Routes ,Route, BrowserRouter } from 'react-router-dom';
import Sign from './Components/MajorComponents/Sign';
import Dashboard from './Components/Dashboards/Dashboard';
import CompanyAddForm from './Components/Forms/CompanyAddForm';
import HRDashboard from './Components/Dashboards/HrDashboard';
import ApplyLeave from './Components/Dashboards/EmployeeDashboard';
import EmployeeDashboard from './Components/Dashboards/EmployeeDashboard';
import EmployeeManagerDashboard from './Components/Dashboards/EmployeeManagerDashboard';
function App() {
  return (

<div>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/sign" element={<Sign/>}/>
      <Route path="/dash" element={<Dashboard/>}/>
      <Route path="/form" element={<CompanyAddForm/>}/>
      <Route path="/hrdash" element={<HRDashboard/>}/>
      <Route path="/leave" element={<ApplyLeave/>}/>
      <Route path="/empdash" element={<EmployeeDashboard/>}/>
      <Route path="/empmangerdash" element={<EmployeeManagerDashboard/>}/>

    </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
