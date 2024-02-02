import React, { useState } from "react";
import person_icon from "../../assets/img/person.png";
import password_icon from "../../assets/img/password.png";
import email_icon from "../../assets/img/email.png";
import call_icon from "../../assets/img/phone-call.png";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Register.css";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    age: 0,
    gender: "",
    skills: [],
    education: "10th",
    confirmPassword: "",
    password: "",
  });

  const [SubmitErrors, setSubmitErrors] = useState();
  const [formErrors, setFormErrors] = useState({
    // name: "",
    //email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedSkills = checked
        ? [...formData.skills, value]
        : formData.skills.filter((skill) => skill !== value);

      setFormData({
        ...formData,
        skills: updatedSkills,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  //Checking Part using onblur password
  let valid = true;
    const errors = {
      number: "",
      confirmPassword: "",
    };
  const checkPassword = () => {
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      valid = false;}
      else{
        errors.confirmPassword="";
        valid=true;
      }
      setFormErrors(errors);
      const nonEmptyValues = [];
      for (const key in formErrors) {
        if (
          formErrors.hasOwnProperty(key) &&
          formErrors[key] !== null &&
          formErrors[key] !== undefined &&
          formErrors[key] !== ""
        ) {
          nonEmptyValues.push(formErrors[key]);
        }
      }
      if(nonEmptyValues.length===0){setSubmitErrors("");}
      else
      {setSubmitErrors(`Error- ${nonEmptyValues}`);}
  }
  const validateForm = () => {
    // let valid = true;
    // const errors = {
    //   number: "",
    //   password: "",
    //   confirmPassword: "",
    // };
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      valid = false;
    }
    if (formData.number.length !== 10) {
      errors.number = "Invalid Number";
      valid = false;
    }
    setFormErrors(errors);
    return valid;
  };

  // setFormData({
  //   name: "",
  //   email: "",
  //   number: "",
  //   age: 0,
  //   gender: "",
  //   skills: [],
  //   education: "10th",
  //   confirmPassword: "",
  //   password: "",
  // });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      
      //Accessing the local storage in the browser 
      // const local =
      //   localStorage && localStorage.setItem("form", JSON.stringify(formData));
      // console.log("local", local);
      navigate("/Profile");
    } else {
      const nonEmptyValues = [];
      for (const key in formErrors) {
        if (
          formErrors.hasOwnProperty(key) &&
          formErrors[key] !== null &&
          formErrors[key] !== undefined &&
          formErrors[key] !== ""
        ) {
          nonEmptyValues.push(formErrors[key]);
        }
      }
      setSubmitErrors(`Form submission failed.Errors- ${nonEmptyValues}`);
      //console.log("Form submission failed. Errors:",JSON.stringify(formErrors));
    }
  };
  return (
    <>
      <div className="container-f">
        <div className="header-f ">
          <div className="text-f">Sign Up </div>
          <div className="underline-f"></div>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="inputs-f ">
            <div className="input-f">
              <img src={person_icon} alt="" />
              <input
                className="form-control"
                type="text"
                name="name"
                required
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="input-f">
              <img src={email_icon} alt="" />
              <input
                className="form-control"
                type="email"
                name="email"
                required
                placeholder="Email-id"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-f">
              <img src={call_icon} alt="Phone icon" />
              <input
                className="form-control"
                type="number"
                maxLength={10}
                name="number"
                placeholder="Phone"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-f">
              <label htmlFor="age">DOB</label>
              <input
                type="date"
                name="age"
                required
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
            <div className="input-f">
              <label htmlFor="gender">Gender</label>
              <input
                type="radio"
                name="gender"
                value="Male"
                id="male"
                onChange={handleChange}
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                onChange={handleChange}
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                name="gender"
                id="extra"
                value="Do not specify"
                onChange={handleChange}
              />
              <label htmlFor="extra">Do not specify</label>
            </div>
            <div className="input-f">
              <img src={password_icon} alt="" />
              <input
                className="form-control"
                type="password"
                name="password"
                required
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="input-f">
              <img src={password_icon} alt="" />
              <input
                className="form-control"
                type="password"
                name="confirmPassword"
                required
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={checkPassword}
              />
            </div>
            <div className="input-f">
              <label htmlFor="edu">Education</label>
              <select
                name="education"
                required
                id="education"
                value={formData.education}
                onChange={handleChange}
              >
                <option value="10th">10th</option>
                <option value="12th">12th</option>
                <option value="Diploma">Diploma</option>
                <option value="Graduation">Graduation</option>
                <option value="Post-Graduation">Post-Graduation</option>
              </select>
            </div>
            <div className="input-f">
              <label htmlFor="skills">Skills</label>
              <input
                type="checkbox"
                id="c++"
                name="c++"
                value="C++"
                onChange={handleChange}
              />
              <label htmlFor="c++">C++</label>
              <br />
              <input
                type="checkbox"
                id="html"
                name="html"
                value="HTML"
                onChange={handleChange}
              />
              <label htmlFor="html">HTML</label>
              <br />
              <input
                type="checkbox"
                id="reactJS"
                name="reactJS"
                value="ReactJS"
                onChange={handleChange}
              />
              <label htmlFor="reactJS">ReactJS</label>
              <br />
              <input
                type="checkbox"
                id="angular"
                name="angular"
                value="Angular"
                onChange={handleChange}
              />
              <label htmlFor="angular">Angular</label>
              <br />
            </div>
          </div>
          <div className="discount">
            {SubmitErrors}
            </div>
          <div className="forgot-password">
            Already a user
            <Link to="/SignIn" className="ms-2 link">
              <span>Sign-In</span>
            </Link>
          </div>
          <div className="submit-container-f">
            <button className="submit-f" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
