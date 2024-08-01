import React, { useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    if (!validateEmail(email)) {
      formErrors.email = 'Invalid email format';
    }

    if (!validatePassword(password)) {
      formErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setSubmittedData({ email, password });
    }
  };

  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{color:"green"}}>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginLeft: '10px',width:"250px",height:"30px"  }}
            />
          </label>
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginLeft: '10px', width:"250px",height:"30px" }}
            />
          </label>
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <button type="submit" style={{ marginTop: '20px',width:"150px",height:"50px",backgroundColor:"skyblue" }}>Login</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: '20px' }}>
          <h2>User Entered Data</h2>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;