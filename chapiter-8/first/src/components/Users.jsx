import {useEffect, useState} from 'react';
import axios from 'axios';
import UserInfo from './UserInfo';

function Users (){
    const [state, setState] = useState([]);
    useEffect( () => {
        const url ='https://jsonplaceholder.typicode.com/users'
        axios(url).then((res) =>{
            setState(res.data);
        
        })

    }, []);
    return(
        <div>
            <h1>states</h1>
            {
                state.map(utilisateurs => {
                    return(
                        <div>
                            <UserInfo name = {utilisateurs}/>
                        </div>
                    )

                })
            }
        </div>
    )
}
export default Users;