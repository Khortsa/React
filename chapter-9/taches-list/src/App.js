import {createContext, useState} from 'react';
import {TaskList}from './components/TaskList';
import {TaskForm} from'./components/Task';




export const todoContext = createContext({});


function App(){
  const [state, setState] = useState([
    { id: 1, title: 'Tache 01', priority: 'Important'},        
    { id: 2, title: 'Tache 02', priority: 'Urgent'}   
 ]);
 const tache = {
   state: state,
   setState: setState,
  
 }
  return(
    <todoContext.Provider value={{tache}}>
   
      <TaskList/>
      <TaskForm/>
    </todoContext.Provider>
  )
}
export default App;