import React from "react"
import users from "./users.json"
import UserInfo from "./Components/UserInfo"

export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  
render(){
  return(

    
   <div>

    {users.map((user) =>  <UserInfo  name = {user.name} email = {user.email}  website = {user.website}/>) };

   </div> 
   
   
    
  )
 
}

}