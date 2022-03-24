import {useContext} from 'react';
import {useForm} from 'react-hook-form';
import {todoContext} from '../App';


export function TaskForm (){
    const {register, handleSubmit} = useForm();
    const {state, setState} = useContext(todoContext)

      const onSubmitHandler = (data) => {
         console.log('Data: ', data )
         const copyState = [...state];
         const lastID = copyState[copyState.length-1].id;
         const states = {
             id: lastID + 1,
             title: data.task,
             priority: data.priority
         }
         copyState.push(states);
         setState(copyState);
      }
    return(
        <>
            <h1>Listes</h1>
           
            <form onSubmit = {handleSubmit(onSubmitHandler)}>
                <div>
                    <label htmlFor = 'task' className='form-label'>Todo Names</label>
                    <input type='text'{...register('task')}  className='form-control' id='task'/>
                </div>
                <select className='formSelect' {...register('priority')}id='priority'>
                    <option value="1">Not important</option>
                    <option value="2">Important</option>
                    <option value="3">Urgent</option>
                </select>
                    <button type="submit" className="btn btn-primary mb-3">Submit</button>
            </form>
        </>
    )
    
}
export default TaskForm;

