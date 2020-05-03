import React from 'react'
 import './Add.css'
 import Input from '../Form/Input'

class Add  extends React.Component {

    state = {
        customForm : {
            name : {
                element:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Name'
                },
                value:'',
                validation:{
                    required:true,
                    minLength:3
                },
                valid:false,
                touched:false,
                validationError:null
            },
            email : {
                element:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'email'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationError:null
            }
        }
    }

    checkValidity = (value,rules)=>{
        let isValid = true
        let errormessage =null    
      
        if(rules.required){ 
            isValid = value.trim() !== '' && isValid
            if(!isValid) errormessage = "Field is required"
        }
        if(rules.minLength)
        {
            isValid = value.length >= rules.minLength && isValid
            if(!isValid) errormessage = `min-Length should be  ${rules.minLength}`
        }
        return {isValid:isValid,errormessage:errormessage}
    }

    inputChangeHandler=(event,inputIdentifier)=>{
        const updateCustomForm = {
            ...this.state.customForm
        };
        const updatedFormElement = { 
            ...updateCustomForm[inputIdentifier]
        };
        console.log(updatedFormElement)
        updatedFormElement.value = event.target.value;
        const {isValid,errormessage}  = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.valid =isValid
        updatedFormElement.validationError = errormessage
        updatedFormElement.touched = true;
        updateCustomForm[inputIdentifier] = updatedFormElement;
        this.setState({customForm: updateCustomForm});
    }
    

render(){
        const formElement =[]
         
        for(let key in this.state.customForm){
            formElement.push({
                id:key,
                config:this.state.customForm[key]
            })
         }
         
    let form = (<form>
        {formElement.map(formElement =>
        (<Input key = {formElement.id} inptype={formElement.config.element}
         eleconfig = {formElement.config.elementConfig}
          value={formElement.config.value}
           change = {(event)=>this.inputChangeHandler(event,formElement.id)}  
           isvalid={formElement.config.valid}
           istouched={formElement.config.touched} 
           label={formElement.id}
           validationError = {formElement.config.validationError}
          /> ))}
     </form>)

    return(    
        <div className="ContactData">
            <h4>Enter your Contact Data</h4>
            {form}
        </div>
        )
}
 
} 

export default Add
        
        
    