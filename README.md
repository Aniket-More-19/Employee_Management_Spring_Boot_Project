# Here's the video of the working application.

https://github.com/Aniket-More-19/Employee_Management_Spring_Boot_Project/assets/113283744/b4803a1d-f7b9-4b89-91a1-a4365001dacc


# Employee Management System

This project is a full-stack application for managing employee data. It uses React JS for the frontend, Spring Boot for the backend, and MySQL for the database.

## Frontend

The frontend of this application is built using **React JS**. Here are some of the key features:

- **React Hooks**: The `useState` hook is used for maintaining the state of the data object.
- **API Calls**: The `useEffect` hook is used for making API calls to get employee data. There are three main API calls made:
  - To get all employee data
  - To store data in the database
  - To delete an employee
- **Navigation**: The `BrowserRouter` is used to navigate between the employee information form and the page displaying all employees.

## Backend

The backend of this application is developed using **Spring Boot**. It is organized into separate sub-packages like controller, repository, service, and model. Here are some of the key features:

- **API Calls**: The application uses `@PostMapping`, `@GetMapping`, and `@DeleteMapping` for API calls.
- **JpaRepository**: This is used to perform CRUD operations on the database like `save()`, `findAll()`, and `deleteById()`.
- **Service Interface**: An interface is created to define methods, and these methods are implemented in a class.
- **Beans**: Beans (i.e., objects) are used in the application.
- **Dependencies**: The `pom.xml` file defines needed dependencies like Spring Data Jpa, spring web, MySQL driver, and Lombok.
- **Build Tool**: The application uses Java JDK 17 and Maven as the build tool.

## Database

The application uses a **MySQL relational database** to store employee data like `empId`, `empName`, `designation`, and `empSkills`. The properties for connecting to the database are mentioned in the `application.properties` file in Spring Boot.


