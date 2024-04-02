package com.example.employeebackend.service;

import com.example.employeebackend.model.Employee;
import com.example.employeebackend.repository.EmpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpServiceImplement implements EmpService{
    @Autowired
    EmpRepository empRepository;


    @Override
    public Employee saveEmployee(Employee employee) {
        return empRepository.save(employee);   // saves employee in db
    }

    @Override
    public List<Employee> getEmployees() {
        return empRepository.findAll();  // gets all employees from db
    }

    @Override
    public Employee deleteEmployee(Long empId) {
        empRepository.deleteById(empId);  // deletes employee by empId, deleteById is void type
        return null;
    }
}
