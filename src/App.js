import './App.css';
import{
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Main from './components/Main';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  return (
   <Router>
    <Nav/>
    <Routes>
      
      <Route path='/' element={<Main title="TextBox"/>}></Route>
      <Route path='/about' element={<About />}></Route>

    </Routes>
   
   </Router>
  );
}

export default App;
