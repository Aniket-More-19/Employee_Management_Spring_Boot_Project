package com.example.employeebackend.service;

import com.example.employeebackend.model.Employee;
import com.example.employeebackend.repository.EmpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmpServiceImplement implements EmpService{
    @Autowired
    EmpRepository empRepository;


    @Override
    public Employee saveEmployee(Employee employee) {
        return empRepository.save(employee);
    }
}
