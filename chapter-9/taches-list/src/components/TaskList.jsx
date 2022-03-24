import {useContext} from 'react';
import {todoContext} from '../App';

export function TaskList(){
    const context = useContext (todoContext);
    const state = context.state;

    console.log(context.state);
    return(
        <>
        <h1>List of things to do</h1>
       
            {state.map((states) => {
                
                return(
                    <div key = {states.id}>
                        <h2>{states.title}</h2>
                        <p>{states.priority}</p>
                    </div>
                )
            })}
      
        </>

    )
}
export default TaskList;