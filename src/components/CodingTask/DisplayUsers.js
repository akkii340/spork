import React from 'react'
import UserTodoData  from './UserTodoData'
import './DisplayUser.css'

const DisplayUsers =(props)=>{
    
    const [users,setUser] = React.useState(Object.keys(props.data).map(obj =>({
        user:obj,
        data:props.data[obj],
        clicked:false
    })))
    const [dataload,setdataLoaded] = React.useState([])
    

    const onClickHandler = (index) =>{
            
        const newState = users.map((user,indi) => 
            {if(indi === index)
        { 
            return ({
                user:users[indi].user,
                clicked:!users[indi].clicked,
                data:users[indi].data
            })
           
        }
        else return ({
            user:users[indi].user,
            clicked:false,
            data:users[indi].data
        })})

        setdataLoaded(users[index].data)
            setUser(newState)    
    }

    return(
        
        users.map((user,index) => (
        <div className ="user-Inner" key={index} onClick={()=>onClickHandler(index)}>
        <h4>User {user.user}</h4>
        {user.clicked?<UserTodoData todoData={dataload}/>:null}
        </div>
        ))
      
    )}

export default DisplayUsers