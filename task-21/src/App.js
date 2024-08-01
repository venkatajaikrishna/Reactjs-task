import './App.css';

function App() {
  const person = {
    Name: ['krishna', 'jai', 'teja', 'venkat'],
    age: ['23', '21', '17', '18'],
    salary: ['100000', '80000', '70000', '82000'],
    Designation: ['Banglore', 'mysore', 'andhra pradesh', 'hyderbad'],
  };

  return (
    <div className="App">
      <h1>Personal Information!</h1>
      <p>Name: {person.Name[0]}</p>
      <p>Age: {person.age[0]}</p>
      <p>Designation: {person.Designation[0]}</p>
    </div>
  );
}

export default App;

