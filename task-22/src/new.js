import React, { useState } from 'react';

const Practice = () => {
  const [string, setString] = useState("Hello world");
  const [number, setNumber] = useState(32);
  const [boolean, setBoolean] = useState(true);
  const [array, setArray] = useState(["apple", "banana", "pineapple"]);
  const [object, setObject] = useState({
    name: "Divya",
    age: 23,
    id: 1,
  });

  return (
    <div>
      <h1 style={{textAlign:"center",color:"skyblue"}}>Practicing All Data Types</h1>
      <div style={{textAlign:"center",}}>
      <h2>String</h2>
      <button style={{ width:"150px",height:"40px", backgroundColor:"pink",}}  onClick={() => setString("new String Value")}>Changing the String</button>
      <p>Current string value: {string}</p>

      <h2>Number</h2>
      <button style={{ width:"150px",height:"40px", backgroundColor:"grey",color:"white"}}  onClick={() => setNumber(number + 1)}>Increment Number</button>
      <p>Current number value: {number}</p>

      <h2>Boolean</h2>
      <button  style={{ width:"150px",height:"40px", backgroundColor:"blue",color:"white"}}  onClick={() => setBoolean(!boolean)}>Toggle Boolean</button>
      <p>Current boolean value: {boolean ? "True" : "False"}</p>

      <h2>Array</h2>
<button 
  style={{ width: "150px", height: "40px", backgroundColor: "brown", color: "white" }} 
  onClick={() => setArray([...array, `new item ${array.length + 1}`])}
>
  Add to Array
</button>

      <p>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </p>

      <h2>Object</h2>
      <button style={{width:"150px",height:"40px", backgroundColor:"green",color:"white"}}  onClick={() => setObject((prev) => ({ ...prev, age: prev.age + 1, }))}>Increase Age</button>
      <p>Current object value: {JSON.stringify(object)}</p>
      </div>
    </div>
  );
};

export default Practice;