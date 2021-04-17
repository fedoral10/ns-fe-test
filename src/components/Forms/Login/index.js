import React from 'react'
import { Controller } from 'react-hook-form'

const Login = ({ onSubmit, register, ...props }) => {

    const style = {
        padding: "1rem",
        margin: "3px 0 0 0"
    }

    return (<>
        <form style={{
            backgroundColor:"#caf0f8",
            maxWidth: "330px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            borderRadius: "1.5rem",
            padding: "20px",
            marginTop: "30px",
        }} onSubmit={onSubmit}>
            <input label="User"
                style={style}
                type="text"
                {...register}
                placeholder="Username"
                defaultValue=""
                name="username"
            />
            <input label="Password"
                id="user"
                type="password"
                placeholder="Password"
                style={style}
                name="password"
                {...register}
            />

            <button type="submit" style={{marginTop:"1rem"}} >
                Login
            </button>
        </form>
    </>)
}

export default Login