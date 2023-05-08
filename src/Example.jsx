import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  FormGroup,
} from "reactstrap";
import { Formik } from "formik";
import "./Example.css";
import { useDispatch } from "react-redux";
import { addNewUser } from "./createSlicer";

function Example({ ind, args, modal, toggle, setCurrentUser }) {
  const dispatch = useDispatch();


  return (
    <div>
      <Button color="primary" style={{margin:'10px 0px'}} onClick={toggle}>
        Add new User
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}> User Informations</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={args}
            validate={(values) => {
              const errors = {};
             
              if (!values.name) {
                errors.name = "is required";
              }
              if (!values.surname) {
                errors.surname = "is required";
              }
             
             
              if (!values.country) {
                errors.country = "is required";
              }
              if (!values.nationality) {
                errors.nationality = "is required";
              }
              if (!values.email) {
                errors.email = "is required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setCurrentUser({
                name: "",
                surname: "",
                email: "",
                password: "",
                nationality: "",
                country: "",
              });
              dispatch(addNewUser({ values, ind }));
              toggle();
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form id="aaa" onSubmit={handleSubmit}>
                  <FormGroup>
                  <Label
                    for="exampleText"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  >
                    Name{" "}
                    {errors.name &&
                      touched.name &&
                      errors.name}{" "}
                  </Label>
                  <Input
                    className={
                      errors.name &&
                      touched.name &&
                      errors.name
                    }
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    id="exampleText"
                  />
                </FormGroup>



                <FormGroup>
                  <Label
                    for="exampleText"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.surname}
                  >
                    Surname{" "}
                    {errors.surname &&
                      touched.surname &&
                      errors.surname}{" "}
                  </Label>
                  <Input
                    className={
                      errors.surname &&
                      touched.surname &&
                      errors.surname
                    }
                    name="surname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.surname}
                    id="exampleText"
                  />
                </FormGroup>




                <FormGroup>
                  <Label for="exampleSelect">
                    Country{" "}
                    {errors.country && touched.country && errors.country}
                  </Label>
                  <Input
                    className={
                      errors.country && touched.country && errors.country
                    }
                    type="select"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.country}
                    name="country"
                    id="exampleSelect"
                  >
                    <option>Uzbekistan</option>
                    <option>Russia</option>
                    <option>Kazakhstan</option>
                    <option>Armenia</option>
                    <option>Azerbaijan</option>
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label
                    for="exampleText"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nationality}
                  >
                    Nationality{" "}
                    {errors.nationality &&
                      touched.nationality &&
                      errors.nationality}{" "}
                  </Label>
                  <Input
                    className={
                      errors.nationality &&
                      touched.nationality &&
                      errors.nationality
                    }
                    name="nationality"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nationality}
                    id="exampleText"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="exampleEmail">
                    Email{' '}{errors.email && touched.email && errors.email}
                  </Label>
                  <Input
                    className={errors.email && touched.email && errors.email}
                    type="email"
                    name="email"
                    id="exampleEmail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder=" your email"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="exampleEmail">
                    Paasword
                    {errors.password && touched.password && errors.password}
                  </Label>
                  <Input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    onBlur={handleBlur}
                  />
                </FormGroup>
              </form>
            )}
          </Formik>
        </ModalBody>
        <ModalFooter>
          <Button   color="primary" form="aaa" type="submit">
            Add
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Example;
