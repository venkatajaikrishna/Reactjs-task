import React, { Component } from 'react';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      dob: '',
      contact: '',
      email: '',
      password: '',
      errors: {},
      submitted: false,
    };
  }

  validateForm = () => {
    const { name, age, dob, contact, email, password } = this.state;
    const errors = {};
    let isValid = true;

    if (!name) {
      errors.name = 'Name is required';
      isValid = false;
    }
    if (!age || isNaN(age) || age < 0) {
      errors.age = 'Valid age is required';
      isValid = false;
    }
    if (!dob) {
      errors.dob = 'Date of Birth is required';
      isValid = false;
    }
    if (!contact || contact.length < 10) {
      errors.contact = 'Valid contact number is required';
      isValid = false;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Valid email is required';
      isValid = false;
    }
    if (!password || password.length < 6) {
      errors.password = 'Password should be at least 6 characters long';
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm()) {
      this.setState({ submitted: true });
    }
  };

  render() {
    const { name, age, dob, contact, email, password, errors, submitted } = this.state;

    return (
      <div>
        <h2>Signup Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={name} onChange={this.handleChange} />
            {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
          </label>
          <br />
          <label>
            Age:
            <input type="number" name="age" value={age} onChange={this.handleChange} />
            {errors.age && <span style={{ color: 'red' }}>{errors.age}</span>}
          </label>
          <br />
          <label>
            Date of Birth:
            <input type="date" name="dob" value={dob} onChange={this.handleChange} />
            {errors.dob && <span style={{ color: 'red' }}>{errors.dob}</span>}
          </label>
          <br />
          <label>
            Contact:
            <input type="text" name="contact" value={contact} onChange={this.handleChange} />
            {errors.contact && <span style={{ color: 'red' }}>{errors.contact}</span>}
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" value={email} onChange={this.handleChange} />
            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" value={password} onChange={this.handleChange} />
            {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        {submitted && <p>Form is submitted</p>}
      </div>
    );
  }
}

export default SignupForm;
