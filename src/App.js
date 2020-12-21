import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard.js';
function App() {
  return (
    <div className="App">
      <h1 style={{backgroundColor:"#006699",color:"white",marginTop:0}}>Exam App</h1>
     <Dashboard userId=""/>
    </div>
  );
}

export default App;
