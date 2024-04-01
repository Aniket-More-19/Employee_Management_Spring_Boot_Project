package com.example.employeebackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "emp_data")
public class Employee {

    @Id
    @GeneratedValue(strategy =GenerationType.AUTO)
    private Long empId;
    private String empName;
    private String designation;
    private String empSkills;

    // empId getter and setter
    public Long getEmpId() {
        return empId;
    }
    public void setEmpId(Long empId) {
        this.empId = empId;
    }
    // empName getter and setter
    public String getEmpName() {
        return empName;
    }
    public void setEmpName(String empName) {
        this.empName = empName;
    }
    // designation getter and setter
    public String getDesignation() {
        return designation;
    }
    public void setDesignation(String designation) {
        this.designation = designation;
    }
    // empSkills getter and setter
    public String getEmpSkills() {
        return empSkills;
    }
    public void setEmpSkills(String empSkills) {
        this.empSkills = empSkills;
    }
}
