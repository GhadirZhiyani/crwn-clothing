import react from "react";
import './form-input.styles.scss';



const FormInput=({handelChange,handeleInvalid,label,...otherProps})=>
{
    return (
    <div className="group">
        <input  className="form-input" 
        onChange={handelChange}
        onInput={event=>event.target.setCustomValidity('')}
        onInvalid={event=>event.target.setCustomValidity(`${otherProps.msgerror}`)}
               
        {...otherProps}/>

        {
            label?
                   (<label className={`${otherProps.value.length?'shrink':''} form-input-label`}>{label}</label>)
                 :null
        }          
    </div>
    )
}

export default FormInput;