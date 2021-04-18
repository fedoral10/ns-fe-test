import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Forms, Loading } from '../../components'
import { useForm } from "react-hook-form";
import { BackendCovid19Api } from '../../api'
import { sendErrorToast, sendOkToast, registerModal } from '../../shared/dialogs';



const LoginPage = () => {

    const { register, handleSubmit } = useForm()
    const history = useHistory()

    const [disable, setDisable] = useState(false)
    const [loading, setLoading] = useState(false)
    const api = new BackendCovid19Api(process.env.REACT_APP_BEHOST)

    const onSubmit = (values) => {
        setDisable(true)
        api.login(values.username, values.password).then(response => {
            console.log('Localstorage Setted',response)
            sessionStorage.setItem('token', response.data)
            history.push('/statistics')
            sendOkToast('Logged in')
        }
        ).catch(err => {
            console.log(err)
            sendErrorToast(`Error: ${err.message}`)
        }).finally(_ => setDisable(false))
    }

    const signUpEvent = async () => {
        try {
            setLoading(true)
            const { value } = await registerModal()
            await api.signUp(value.username, value.password)
            sendOkToast('Created new User!')
        } catch (err) {
            console.log(err)
            sendErrorToast('Error creating new User')
        } finally {
            setLoading(false)
        }
    }

    return (<>
        <Loading showModal={loading} />
        <Forms.Login onSubmit={handleSubmit(onSubmit)} register={register} disableControls={disable}
            signUpEvent={signUpEvent} />
    </>)
}

export default LoginPage
