import './App.css';

function App() {
  let name = "Anant";
  let numbers = [10,20,30,40]
  return (
    <div className="App">
  <h1> This is my first React App </h1>
  <h2> I am leaning react from now onwards</h2>
  <h3>My name is {name}</h3>
  {numbers.map((num)=>{
    return <span>{num},</span>
  })}
  {name}

    </div>
  );
}

export default App;
