import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import "yup-phone";
import SignUpButton from "../SignUpButton";
import PositionsRequests from "../../helpers/positions";
import UserRequests from "../../helpers/users";
import styles from "./RegisterContainer.module.scss";
import TextField from '@mui/material/TextField'


export const VALIDATION_SCHEMA = yup.object().shape({
  name: yup
    .string()
    .min(2, "Not enough characters")
    .max(60, "Too many characters")
    .required("This field is required."),
  phone: yup
    .string()
    .phone("", true, "Invalid phone number")
    .required("This field is required."),
  email: yup
    .string()
    .email("The email address is invalid.")
    .required("This field is required."),
  position_id: yup.string().required("This field is required."),
  photo: yup.mixed().required("photo is required."),
});

const RegisterContainer = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await PositionsRequests.getPositions();
        setPositions(data.data.positions);
      } catch (e) {
        alert(e);
      }
    })();
  }, []);

  const onSubmit = async (values) => {
    try {
      await UserRequests.postUser(values);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.registerTitle}>
        <h1>Register to get a work</h1>
      </div>
      <div className={styles.registerSubTitle}>
        <h2>Your personal data is stored according to the Privacy Policy</h2>
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          position_id: "",
          photo: "",
        }}
        onSubmit={onSubmit}
        validationSchema={VALIDATION_SCHEMA}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              {/* <input
                id="name"
                placeholder="Your name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              /> */}
              <TextField id="name" label="Your Name" variant="outlined" value={values.name} onChange={handleChange}
                onBlur={handleBlur} />
              {errors.name && touched.name && (
                <p className="error">{errors.name}</p>
              ) }
              <input
                id="email"
                placeholder="Email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}
              <input
                id="phone"
                placeholder="Phone"
                type="text"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phone && touched.phone && (
                <p className="error">{errors.phone}</p>
              )}
              <div>
                {positions.map(({ id, name }) => {
                  return (
                    <React.Fragment key={name}>
                      <input
                        type="radio"
                        id={id + name}
                        value={name}
                        checked={values.position_id === id}
                        onChange={() => setFieldValue("position_id", id)}
                      />
                      <label htmlFor={id + name}>{name}</label>
                    </React.Fragment>
                  );
                })}
              </div>
              {errors.position_id && touched.position_id && (
                <p className="error">{errors.position_id}</p>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(event) => {
                  setFieldValue("photo", event.currentTarget.files[0]);
                }}
              />
              {errors.photo && touched.photo && (
                <p className="error">{errors.photo}</p>
              )}
              <SignUpButton />
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
export default RegisterContainer;
