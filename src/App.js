import './App.css';
import{
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Main from './components/Main';
import About from './components/About';

function App() {
  return (
   <Router basename='/textpro'>
    <Routes>
      
      <Route path='/' element={<Main title="TextBox"/>}></Route>
      <Route path='/about' element={<About />}></Route>

    </Routes>
   
   </Router>
  );
}

export default App;
