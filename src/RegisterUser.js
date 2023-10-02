import React, { useState } from "react";

const RegisterUser = () => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        repeatPassword: ""
    });

    const [submitted, setSubmitted] = useState(false);
    //const [valid, setValid] = useState(false);

    const handleFirstNameInputChange = (event) => {
        setValues({...values, firstName: event.target.value});
    }

    const consthandleLastNameInputChange = (event) => {
        setValues({...values, lastName: event.target.value});
    }

    const handleEmailInputChange = (event) => {
        setValues ({...values, email: event.target.value});
    }

    const handlePasswordInputChange = (event) => {
        setValues ({...values, password: event.target.value});
    }
    
    const handleRepeatPasswordInputChange = (event) => {
        setValues ({...values, repeatPassword: event.target.value});
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true); 
    }

    return (
        <div>
            
            <div className="d-flex justify-content-left card w-50">
                <div className="card-body">
                    <h5 className="card-title">Registration</h5>

                    <br />

                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit} >
                    
                    {submitted ?
                        <div className="alert alert-success">
                            <strong>Success!</strong> Thank you for Register.
                        </div> : null
                    }
                        
                    <div className="d-flex flex-row mb-4">
                        <label className="form-label">First Name</label>
                        <input type="text" 
                        disabled={submitted}
                        className="form-control" 
                        onChange={handleFirstNameInputChange} 
                        name="firstName" 
                        value={values.firstName} />
                        
                        {submitted ? <p className="text-danger">Please enter a first name</p> : null}
                    </div>

                    <div className="d-flex flex-row mb-4">
                        <label className="form-label">Last Name</label>
                        <input type="text" 
                        disabled={submitted}
                        className="form-control" 
                        onChange={consthandleLastNameInputChange} 
                        name="lastName" 
                        value={values.lastName} />

                        {submitted && !values.lastName ? <p className="text-danger">Please enter a last name</p> : null}
                    </div>

                    <div className="d-flex flex-row mb-4">
                        <label className="form-label">Your Email</label>
                        <input type="email" 
                        disabled={submitted}
                        className="form-control" 
                        onChange={handleEmailInputChange} 
                        name="email" 
                        value={values.email} />

                        {submitted && !values.email ? <p className="text-danger">Please enter Email Address</p> : null}
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                        <label className="form-label" >Password</label>
                        <input type="password" 
                        disabled={submitted}
                        name="password" 
                        onChange={handlePasswordInputChange} 
                        className="form-control" 
                        value={values.password} />

                        {submitted && !values.password ? <p className="text-danger">Please enter a Password</p> : null}
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                        <label className="form-label">Repeat password</label>
                        <input type="password"
                        disabled={submitted} 
                        className="form-control" 
                        onChange={handleRepeatPasswordInputChange} 
                        name="repeatPassword" 
                        value={values.repeatPassword} />
                        {submitted && !values.repeatPassword ? <p className="text-danger">Please enter Repeat Password</p> : null}
                    </div>

                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn btn-primary btn-lg" name="submit">Register</button>
                    </div>

                    </form>
                </div>
            </div>
                            
        </div>
    )

    
}

export default RegisterUser;