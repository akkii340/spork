import React from 'react'
import DisplayUsers from './DisplayUsers'
import data from '../data'
import './View.css'
const View =()=>{
    
      let yoyo = {}
      data.map(obj => {
      
          if(Object.keys(yoyo).indexOf(obj.userId.toString()) > -1){
           
          yoyo[obj.userId].push({
              id:obj.id,
              title:obj.title,
              completed:obj.completed
          })
      }else{
          yoyo[obj.userId] = []
          yoyo[obj.userId].push({ id:obj.id,
              title:obj.title,
              completed:obj.completed})
      }
      })

    return(
    <div className="user-container">
            <DisplayUsers data={yoyo}/>
        </div>
    )
} 

export default View