import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Form from './components/userForm/Form';
import Scoreboard from './components/scoreboard/Scoreboard'
import Board from "./components/board/Board";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Board />}></Route>
        <Route path='/Form' element={<Form />}></Route>
        <Route path='/Scoreboard' element={<Scoreboard />}></Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
