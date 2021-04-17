import React from 'react'
import { useHistory } from 'react-router'
import { Forms } from '../../components'
import { useForm } from "react-hook-form";

const LoginPage = () => {

    
    const { control, handleSubmit } = useForm()

    const onSubmit = (values) => {
        console.log(values)
    }

    return (<>        
        <Forms.Login onSubmit={handleSubmit(onSubmit)} control={control} />
    </>)
}

export default LoginPage
