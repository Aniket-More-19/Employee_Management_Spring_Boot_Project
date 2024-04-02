import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const EmpInfo = () => {
  const empId = useRef();
  const empName = useRef();
  const designation = useRef();
  const empSkills = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      empId: empId.current.value,
      empName: empName.current.value,
      designation: designation.current.value,
      empSkills: empSkills.current.value,
    };

    empId.current.value = " ";
    empName.current.value = " ";
    designation.current.value = " ";
    empSkills.current.value = " ";

    console.log(formData);

    // making POST api call to spring backend

    fetch(`http://localhost:8080/saveEmp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  return (
    <center>
      <h1 className="heading">Employee Information</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3 label">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Employee ID
          </label>
          <input
            ref={empId}
            type="number"
            className="form-control input-size"
            id="empId"
            placeholder="Enter employee ID"
          />
        </div>

        <div className="mb-3 label">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Employee Name
          </label>
          <input
            ref={empName}
            type="text"
            className="form-control input-size"
            id="empName"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3 label">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Designation
          </label>
          <input
            ref={designation}
            type="text"
            className="form-control input-size"
            id="designation"
            placeholder="Enter your designation"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Your Skills
          </label>
          <textarea
            ref={empSkills}
            className="form-control textarea"
            id="empSKills"
            rows="4"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <button type="button" className="btn btn-outline-warning seeAllEmp-btn">
        <Link to="/" className="see-btn-link">
          See All Employees <FaArrowRight />
        </Link>
      </button>
    </center>
  );
};

export default EmpInfo;
