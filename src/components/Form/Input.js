import React from 'react'
import './Input.css'

const Input = (props) =>{
    let element = null;
    let styleInput = "element"
    let error = null
    
    if(!props.isvalid && props.istouched){
        styleInput = "elementerror"
        error = <p className="text-error">{props.validationError}</p>
    }

    switch(props.inptype){
        case ('input'):
            element = <input className={styleInput}   {...props.eleconfig} onChange={props.change}/>
            break;
        case ('textarea'):
            element = <textarea className="element" {...props.eleconfig} onChange={props.change}/>
            break;
        default:
            element = <input className="element"  {...props.eleconfig} onChange={props.change}/>    
    }
    return(<div className="Input">
            <label className="Label" >{props.label}</label>
            {element}
            {error}
        </div>)
}

 export default Input;