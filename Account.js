import React, { useState, useEffect } from "react";
import { Form, Row, Col, FormGroup, FormLabel, Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { FormControlFeedback } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const Account = ({ setData }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [errors, setErrors] = useState({});
  const [accountCreated, setAccountCreated] = useState(
    sessionStorage.getItem("accountCreated") === "true"
  );
  const [formData, setLocalFormData] = useState(
    sessionStorage.getItem("formData")
      ? JSON.parse(sessionStorage.getItem("formData"))
      : {}
  );

  useEffect(() => {
    if (accountCreated) {
      sessionStorage.setItem("accountCreated", "true");
      sessionStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [accountCreated, formData]);

  useEffect(() => {
    if (accountCreated) {
      setData(formData);
    }
  }, [accountCreated, formData]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.password) errors.password = "Password is required";
    if (formData.password && formData.password.length < 8)
      errors.password = "Please suggest a strong password";
    if (isChecked === false) {
      if (!formData.lastName) errors.lastName = "Last Name is required";
      if (!formData.city) errors.city = "City is required";
      if (!formData.state) errors.state = "State is required";
      if (!formData.address) errors.address = "Address is required";
      if (!formData.pincode || isNaN(parseInt(formData.pincode))) {
        errors.pincode = "Pincode must be a valid number";
      }
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      lastName,
      email,
      password,
      city,
      state,
      address,
      pincode,
    };

    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      toast.success(`Welcome ${name}! Account Was successfully Created`, {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: "green",
          color: "#fff",
        },
      });
      setErrors({});
      setAccountCreated(true);
      setLocalFormData(formData);
      setData(formData);
      sessionStorage.setItem("formData", JSON.stringify(formData));
      sessionStorage.setItem("accountCreated", "true");
      console.log(formData);
    }
  };

  return (
    <>
    <Container  className="account-container">
    {accountCreated ? (
      <h1 className="welcome-message">Welcome <span style={{color:"orange",fontSize:"27px"}}>{formData.name}</span> ! Enjoy Your Dessert</h1>
    ) : (
      <Form onSubmit={handleSubmit}>
        <ToastContainer />
        <div className="checkbox-container">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p>Already i have Account</p>
        </div>
    
        {isChecked ? (
          <Row  className="form-row">
            <Col md={6}>
              <FormGroup controlId="name">
                <FormLabel>Name</FormLabel>
                <FormControl
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  isInvalid={errors.name}
                />
                <FormControl.Feedback type="invalid">
                  {errors.name}
                </FormControl.Feedback>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup controlId="email">
                <FormLabel>Email</FormLabel>
                <FormControl
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isInvalid={errors.email}
                />
                <FormControl.Feedback type="invalid">
                  {errors.email}
                </FormControl.Feedback>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup controlId="password">
                <FormLabel>Password</FormLabel>
                <FormControl
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isInvalid={errors.password}
                />
                <FormControl.Feedback type="invalid">
                  {errors.password}
                </FormControl.Feedback>
              </FormGroup>
            </Col>
            <Row>
              <Col md={12}  className="text-center">
                <button type="submit" className="submit-btn">Submit</button>
              </Col>
            </Row>
          </Row>
        ) : (
          <div>
            <Row   className="form-row">
              <Col md={6}>
                <FormGroup controlId="name">
                  <FormLabel>Name</FormLabel>
                  <FormControl
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    isInvalid={errors.name}
                  />
                  <FormControl.Feedback type="invalid">
                    {errors.name}
                  </FormControl.Feedback>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup controlId="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <FormControl
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    isInvalid={errors.lastName}
                  />
                  <FormControl.Feedback type="invalid">
                    {errors.lastName}
                  </FormControl.Feedback>
                </FormGroup>
              </Col>
            </Row>
            <Row  className="form-row">
              <Col md={6}>
                <FormGroup controlId="email">
                  <FormLabel>Email</FormLabel>
                  <FormControl
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isInvalid={errors.email}
                  />
                  <FormControl.Feedback type="invalid">
                    {errors.email}
                  </FormControl.Feedback>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup controlId="password">
                  <FormLabel>Password</FormLabel>
                  <FormControl
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isInvalid={errors.password}
                  />
                  <FormControl.Feedback type="invalid">
                    {errors.password}
                  </FormControl.Feedback>
                </FormGroup>
              </Col>
            </Row>
            <Row   className="form-row">
              <Col md={6}>
                <FormGroup controlId="city">
                  <FormLabel>Identity</FormLabel>
                  <FormControl
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    isInvalid={errors.city}
                  />
                  <FormControl.Feedback type="invalid">
                    {errors.city}
                  </FormControl.Feedback>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup controlId="state">
                  <FormLabel>City</FormLabel>
                  <FormControl
                    as="select"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option value="" selected>Select ur city</option>
                    <option value="State 1">Chennai</option>
                    <option value="State 2">Coimbatore</option>
                    <option value="State 3">Salem</option>
                  </FormControl>
                  <FormControl.Feedback type="invalid">
                    {errors.state}
                  </FormControl.Feedback>
                </FormGroup>
              </Col>
            </Row>
            <Row  className="form-row">
                
                  <Col md={12}>
                    <FormGroup controlId="address">
                      <FormLabel>Address</FormLabel>
                      <FormControl
                        as="textarea"
                        rows={3}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                            isInvalid={errors.address}
                            />
                            <FormControl.Feedback type="invalid">
                              {errors.address}
                            </FormControl.Feedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row  className="form-row">
                        <Col md={6}>
                          <FormGroup controlId="pincode">
                            <FormLabel>Pincode</FormLabel>
                            <FormControl
                              type="text"
                              value={pincode}
                              onChange={(e) => setPincode(e.target.value)}
                              isInvalid={errors.pincode}
                            />
                            <FormControl.Feedback type="invalid">
                              {errors.pincode}
                            </FormControl.Feedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row className="form-row">
                        <Col md={12}  className="text-center">
                          <button type="submit" className="submit-btn">Submit</button>
                        </Col>
                      </Row>
                    </div>
                  )}
                </Form>
              )}
            </Container>  


<div class="header">
    <h1>Terms and Conditions</h1>
  </div>
  <div class="terms-container">
    <div class="terms-header">
      <h2>Please Read the Terms&Conditions Before You Order</h2>
    </div>
    <div class="terms-content">
      <ul class="terms-list">
        <li>
          <h3>1. Introduction</h3>
          <p>These terms and conditions ("Terms") govern your use of our Sweet Heaven services ("Services") and our website located at [www.Sweet Heaven.com] ("Website"). By using our Services or accessing our Website, you agree to be bound by these Terms.</p>
        </li>
        <li>
          <h3>2. Ordering and Payment</h3>
          <p>You must be at least 18 years old to place an order on our Website.</p>
          <p>All orders are subject to availability of ingredients and menu items.</p>
          <p>Payment must be made in full at the time of ordering.</p>
          <p>We accept [list payment methods, e.g. credit cards, PayPal, etc.].</p>
        </li>
        <li>
          <h3>3. Delivery and Pickup</h3>
          <p>Delivery areas and fees are listed on our Website.</p>
          <p>Delivery times are estimates and may vary due to traffic, weather, or other factors.</p>
          <p>You must be present to receive your order at the designated delivery time.</p>
          <p>Pickup orders must be collected within [timeframe, e.g. 30 minutes] of the designated pickup time.</p>
        </li>
        
      </ul>
    </div>
  </div></>
      );
    };
    
    export default Account;
    
    