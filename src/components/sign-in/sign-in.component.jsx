import React from "react";
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss';



class SignIn extends  React.Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }

    }

    handelSubmit=event=>{
        event.preventDefault();
        
    }
    handeleChange=event=>{
        const{value,name}=event.target;
        this.setState({[name]:value});
    }



 
    render(){
        return (
          <div className="sign-in"> 
            <h2>قبلا دارای نام کاربری می باشم</h2>
            <span>ورود با ایمیل</span>
            <form  onSubmit={this.handelSubmit}> 
            <FormInput
                   name="email" 
                   type="email" 
                   label="ایمیل" 
                   value={this.state.email}
                   handelChange={this.handeleChange}
                   required
                
                   msgerror="ایمیل را به شکل صحیح وارد نمایید"

                  
             />
             <FormInput 
                  name="password" 
                  label="کلمه عبور" 
                  type="password" 
                  value={this.state.password} 
                  handelChange={this.handeleChange}
                  required
                  msgerror="این فیلد اجباری است."
                                  
                  /> 
                  <input type="submit" value="ورود " />                
            </form>
            


              

          </div>  
        );

    }
}

export default SignIn;