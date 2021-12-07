import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import "yup-phone";
import SignUpButton from "../SignUpButton";
import PositionsRequests from "../../helpers/positions";
import UserRequests from "../../helpers/users";
import styles from "./RegisterContainer.module.scss";
import TextField from '@mui/material/TextField';
import getToken from '../../helpers/token';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from 'prop-types';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import { styled, makeStyles } from '@mui/material/styles';
import { style } from "@mui/system";



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
  const [user, setUser] = useState([]);

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
        // TODO: fetchUser()
    } catch (e) {
      // TODO: handle errors
      alert(e.message);
    }
  };
  const submitForm = async (data) => {
    const formData = new FormData();

    for (const keyData in data) {
      const value = data[keyData]
      formData.append(keyData, value)
    }

    await onSubmit(formData)
    // sendSending(true);
    // const token = await getToken();
    // const formData = new FormData();
    // const fileField  = document.querySelector('input[type="file"]');
    // ['position_id', 'name', 'email'].map((key) => {
    //   formData.append(key,data[key]);
    //   return null;
    // });
    // formData.append('phone', data.phone.replace(/[()-]/g, ''));
    // formData.append('photo', fileField.files[0]);
    // onSubmit(formData); 
    // const usersRes = setUser(formData, token.token);
    // if (usersRes.success) {
    //   setSending(false);
    //   setOpen(true);
    //   setSendSuccess({
    //     serverSuccess: true,
    //     validatorSuccess: true, 
    //   });
    // } else {
    //   setSending(false);
    //   setOpen(true);
    //   setSendSuccess({
    //     serverSuccess: true,
    //     validatorSuccess:false,
    //   });
    // } 
    // await onSubmit(data);
  };

  const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
    ({ theme, checked }) => ({
      '.MuiFormControlLabel-label': checked && {
        color: theme.palette.primary.main,
      },
    }),
  );
  
  function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();
  
    let checked = false;
  
    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }
  
    return <StyledFormControlLabel checked={checked} {...props} />;
  }
  
  MyFormControlLabel.propTypes = {
    /**
     * The value of the component.
     */
    value: PropTypes.any,
  };

  return (
    <div className={styles.container} id={"register"}>
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
        onSubmit={submitForm}
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
            <Form onSubmit = {handleSubmit}>
              <div className={styles.textArea}>
                <TextField className={errors.name ? styles.textFieldWithError : " "}  id="name" label="Your Name" variant="outlined" value={values.name} onChange={handleChange}
                  onBlur={handleBlur} helperText={errors.name && touched.name ? errors.name : ''}/>                              
                <TextField id="email" label="Email" variant="outlined" value={values.email} onChange={handleChange}
                  onBlur={handleBlur} helperText={errors.email && touched.email ? errors.email : ''}/>
                <TextField id="phone" label="Phone" variant="outlined" value={values.phone} onChange={handleChange}
                  onBlur={handleBlur} helperText={errors.phone && touched.phone ? errors.phone : ''}/>
              </div>
              <div className={styles.radioArea}>
              <FormLabel component="legend">Select your position</FormLabel>        
                <RadioGroup
                  aria-label="position"
                  defaultValue={1}
                  value={values.position_id}            
                  name="radio-buttons-group"
                  
                  onChange={ (data, value) => {
                    setFieldValue('position_id', value);
                  }
                  }
                >
                  {positions.map(({ id, name }) => {
                    return (
                      <FormControlLabel value={id}  control={<Radio />} label={name} />
                    )})}

                </RadioGroup>
              </div>              
              {errors.position_id && touched.position_id && (
                <p className="error">{errors.position_id}</p>
              )}
              <div className={styles.inputPhoto}>
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
              </div>
              <div className={styles.registerBtn}>
                <SignUpButton  disabled={errors.name}/>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default RegisterContainer;
