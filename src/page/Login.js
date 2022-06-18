import React from 'react'
import { useInput } from '../hooks/useInput'
import StepDots from '../components/stepDots'
import '../style/form.css'

const emailValidation = (email)=>{
    if(email.length > 0){
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){ 
            return false
        }
        return true
    }
    return null
}

const passwordValidation = (password)=>{
    if(password.length > 0){
        if(password.length < 8){
            return true
        }
        return false
    }
    return null
}

const nameValidation = (name)=>{
    if(name.length < 1){
        return true
    }
    return false
}

const userTypeValidation = (type)=>{
    if(!type){
        return true
    }
    return false
}

export default function Login(){
    const [nameProps, resetName] = useInput("")
    const [emailProps, resetEmail] = useInput("")
    const [userTypeProps, resetUserType] = useInput("")
    const [passwordProps, resetPassword] = useInput("")

    var isCorret = false
    var emailErro = emailValidation(emailProps.value)
    var passwordErro = passwordValidation(passwordProps.value)
    var nameErro = nameValidation(nameProps.value)
    var userErro = userTypeValidation(userTypeProps.value)

    if(emailErro==false && passwordErro==false && nameErro==false && userErro==false){
        var isCorret = true
    }

    const labelBackBottomHandler = (e) =>{
        if(e.target.value.length < 1){
            const label = e.target.previousElementSibling
            label.style.color = '#828282';
            label.style.bottom = '50%';
            
        }
    }
    
    const labelTopHandlerFunction = (e) =>{
        const label = e.target.previousElementSibling
        label.style.color = '#828282';
        label.style.bottom = '100%';
        label.style.backgroundColor = '#f9f9f9';
        label.style.fontSize = '.8rem';
    }

    return(
        <div className='container' >
            <div className='principal-section' >
                <StepDots index={1} stepsLength={3} className="steps" />
                <div className='sign-up-form' >
                    <div className='header-form' >
                        <h1> Let's set up your account </h1>
                        <p>Aready have an account? <a> Sign in </a> </p>
                    </div>
                    <br/>
                    <div className='body-form' >
                        <form>
                            <div className='input-field' >
                                <label className='label-input' >Your name</label>
                                <input onBlur={(e)=>labelBackBottomHandler(e)} onFocus={(e)=>labelTopHandlerFunction(e)} {...nameProps} type="text" placeholder="" required/>
                            </div>
                            <div className='input-field' >
                                <label style={emailErro==true?{color:'#f43c3c'}:{color:'#828282'}} className='label-input' >Email address</label>
                                <input className={emailErro==true?"erroInput":""} onBlur={(e)=>labelBackBottomHandler(e)} onFocus={(e)=>labelTopHandlerFunction(e)} {...emailProps} type="email" placeholder="" required/>
                            </div>
                             {emailErro==true?(<span className='errorText' style={{color:'#f43c3c'}} >Please enter a valid email address</span>):""}
                            <select {...userTypeProps} > 
                                <option value="" selected disabled hidden>I would describe my user type as</option>
                                <option value="Developer" >Developer</option>
                            </select>
                            <div className='input-field' >
                                <label style={passwordErro==true?{color:'#f43c3c'}:{color:'#828282'}} className='label-input' >Password</label>
                                <input style={{fontSize:'10px'}} className={passwordErro==true?"erroInput":""} onBlur={(e)=>labelBackBottomHandler(e)} onFocus={(e)=>labelTopHandlerFunction(e)} {...passwordProps} type="password" placeholder="" required/>
                            </div>
                            <span className='errorText' style={
                                passwordErro==true?
                                {color:'#f43c3c'}:
                                {color:'#828282'}} >
                                    Minimum 8 characters
                                </span>
                                <br/><br/>
                            <button style={
                                isCorret==true?
                                {
                                    backgroundColor:'#286efa',
                                    color:'#fff'
                                }:{backgroundColor:'#ededed',color:'#a1a1a1'}} type='submit' disabled={isCorret?false:true} >
                                    Next
                            </button>
                            <br/>
                        </form>
                    </div>
                    <div className='footer-form' >
                        <p>By clicking the "Next" button, you agree to creating a free account, and to <span><a> Terms of Service</a></span> and <span><a> Privacy Policy </a></span> </p>
                    </div>
                </div>
            </div>
           
            <div className='dummy-heading' >
                <div className='dummy-header' >
                    <h2>Dummy Heading</h2>
                </div>
                <div className='dummy-text' >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    )
}