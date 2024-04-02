package com.example.employeebackend.service;

import com.example.employeebackend.model.Employee;

import java.util.List;

// methods are just defined here and selectively implemented in "EmpServiceImplement"
public interface EmpService {
    // to save employees in database
    Employee saveEmployee(Employee employee);

    // get all employees from database
    List<Employee> getEmployees();
}
