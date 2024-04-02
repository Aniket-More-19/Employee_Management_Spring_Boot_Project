package com.example.employeebackend.controller;

import com.example.employeebackend.model.Employee;
import com.example.employeebackend.service.EmpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmpController {

    @Autowired
    EmpService empService;

    // saves employee data in to MySQL database
    @PostMapping("/saveEmp")
    Employee saveEmpData(@RequestBody Employee employee){
        return empService.saveEmployee(employee);
    }

    // to get all employees data from database
    @GetMapping("/getEmployees")
    List<Employee> getEmployeeData(){
        return empService.getEmployees();
    }

    @DeleteMapping("/deleteEmployee/{empId}")
    Employee deleteEmpData(@PathVariable Long empId){
        return empService.deleteEmployee(empId);
    }
}
