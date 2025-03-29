
import { useState } from 'react';
import './App.css'
import FuncCom from './CoursComposant/FunctionalComponentLifeCycle/FuncCom';
import ListManager from './CoursComposant/ListManager.jsx';
import ColorBox from './CoursComposant/ColorBox';  
import NotesManager from './CoursComposant/NotesManager'; 
import TodoList from './CoursComposant/TodoList';
import Events from './compoAt2/Events.jsx';

function App() {
  const [{color, background}  , setColor] = useState({color :"red", background :"black"})



  return (
    <>
     {/* <p>la couleur {color} et le background {background}</p>
     <input onChange={e=> setColor(c=> ({...c,color:e.target.value}))}  type="text" />
     <FuncCom />
        */}
   <Events></Events>

    </>
  )
}

export default App
