
import './App.css';
import EventDemoComponent from './EventsDemoComponents';
import StateDemoComponent from './StateDemoComponent';
import ListAndKeysComponent from './ListAndKeysComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Hello from './Hello';
import ToDoList from './todolist/ToDoList';
import AxiosGetDemo from './AxiosGetDemo';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
      </div>
      <Routes>
        <Route exact path='hello' element={<Hello/>}></Route>
        <Route exact path='sdc' element={<StateDemoComponent/>}></Route>
        <Route exact path='getposts' element={<AxiosGetDemo/>}></Route>
        <Route exact path='todo' element={<ToDoList/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
