package com.example.employeebackend.controller;

import com.example.employeebackend.model.Employee;
import com.example.employeebackend.service.EmpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
    

}
