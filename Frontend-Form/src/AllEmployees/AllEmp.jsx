import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllEmp = () => {
  // let empId = " ";
  // let empName = " ";
  // let designation = " ";  ------------> No use
  // let empSkills = " ";

  // const [empData, setEmpData] = useState([
  //   empId,
  //   empName,
  //   designation,                   ----------> No use
  //   empSkills,
  // ]);

  const [empData, setEmpData] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    // getting all employee data
    fetch("http://localhost:8080/getEmployees")
      .then((response) => response.json())
      .then((apiData) => {
        setEmpData(apiData);
      });
  }, [reload]);

  console.log(empData);

  const handleDelete = (empId) => {
    fetch(`http://localhost:8080/deleteEmployee/${empId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      // generally body is not sent with DELETE call.
      // It is already sending empId in the url. so, not needed to define body.
    }).then(() => {
      setReload(!reload);
    });
  };

  return (
    <>
      <button type="button" className="btn btn-primary button-addEmp">
        <Link to="/empinfo" className="allEmp-btn-link">
          {" "}
          Add Employee
        </Link>
      </button>

      <center className="table-margins">
        <table className="table table-bordered">
          <thead>
            <tr className="table-success">
              <th className="table-primary text-center">EmpId</th>
              <th className="table-primary text-center">Employee Name</th>
              <th className="table-primary text-center">Designation</th>
              <th className="table-primary text-center">Skills</th>
              <th className="table-primary text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {empData.map((emp) => {
              return (
                <tr className="table-success " key={emp.empId}>
                  <td className="table-success text-center">{emp.empId}</td>
                  <td className="table-success text-center">{emp.empName}</td>
                  <td className="table-success text-center">
                    {emp.designation}
                  </td>
                  <td className="table-success text-center">{emp.empSkills}</td>
                  <td className="table-success text-center">
                    {" "}
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(emp.empId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </center>
    </>
  );
};

export default AllEmp;
