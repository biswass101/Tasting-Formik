import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {}
  if(!values.name) {
    errors.name = "Required"
  } else if(values.name.length > 15) {
    errors.name = "maximum 15 char or less"
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(!values.email) {
    errors.email = "Required"
  } else if(!emailRegex.test(values.email)) {
    errors.email = "not a valid email"
  }
  
  if(!values.password) {
    errors.password = "Required"
  } else if(values.password < 6) {
    errors.password = "Password must be at least 5 charater or long"
  }

  return errors
  
}

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: values => {
      console.log(values)
    }
  });
  return (
    <div>
      <h1>Sign Up Form</h1>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        {formik.errors.email ? <div>{formik.errors.email}</div> : null}


        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
