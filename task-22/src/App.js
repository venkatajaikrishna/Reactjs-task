import React, { useState } from "react";
import New from './new'

const App = () => {
  const [employee, setEmployee] = useState([
    {
      Name: "krishna",
      Salary: "100000",
      Id: "1",
      Location: "Bangalore",
      Role: "SQL Developer"
    },
    {
      Name: "Jai",
      Salary: "50000",
      Id: "2",
      Location: "Chennai",
      Role: "Back-end Developer"
    },
    {
      Name: "Nikitha",
      Salary: "30000",
      Id: "3",
      Location: "Hyderabad",
      Role: "Front-end Developer"
    }
  ]);

  
  const handleUpdate = () => {
    const update = [...employee];
    update[1].Name = "Teja";
    update[1].Salary = "200000";
    setEmployee(update);
  };

  // 2)2. Create an object, update it's 2 property values

  const [cars, setCars] = useState({
    name: "BMW",
    Model: "latest",
    Price: "10000000"
  });

  const updateCar = () => {
    const updatedCar = Object.assign({}, cars, {
      name: "Rolls Royce",
      Price: "200000000"
    });
    setCars(updatedCar);
  };

  return (
    <div className="App">
    <New/>
      <h1 style={{textAlign:"center",color:"skyblue"}}>Array objects</h1>
      <p style={{textAlign:"center"}}>Name: {cars.name}</p>
      <p style={{textAlign:"center"}}>Price: {cars.Price}</p>
      <h2 style={{textAlign:"center",color:"blue"}}>Employee Details</h2>
      {employee.map((ele, index) => (
        <div key={index}>
          <p style={{textAlign:"center"}}>Name: {ele.Name}</p>
          <p style={{textAlign:"center"}}>Id: {ele.Id}</p>
          <p style={{textAlign:"center"}}>Salary: {ele.Salary}</p>
          <p style={{textAlign:"center"}}>Location: {ele.Location}</p>
          <p style={{textAlign:"center"}}>Role: {ele.Role}</p>
        </div>
      ))}
      <button style={{marginLeft:"44%", width:"150px",height:"40px", backgroundColor:"green",color:"white"}} onClick={handleUpdate}>Update Employee</button>
      <br />
      <br />
      <button style={{marginLeft:"46%" , width:"100px",height:"40px" ,backgroundColor:"grey",color:"white"}}  onClick={updateCar}>Update Car</button>
    </div>
  );
};

export default App;