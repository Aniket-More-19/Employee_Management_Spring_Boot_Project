import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useRef } from "react";
import EmpInfo from "./EmployeeInfo/EmpInfo";
import AllEmp from "./AllEmployees/AllEmp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllEmp />}></Route>
        <Route path="/empinfo" element={<EmpInfo />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
