import React,{useState} from 'react'
export const UseForm=(validateOnBlur=false,validate)=>{
    const [errors,setErrors]=useState({});
    const handleValidate=(e)=>{
        const {name,value}=e.target
        if(validateOnBlur){
            validate({[name]:value})
        }
    }
    return{
        errors,
        setErrors,
        handleValidate
    }
}