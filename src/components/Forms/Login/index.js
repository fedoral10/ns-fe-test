import React from 'react'

const Login = ({ onSubmit, register, disableControls, signUpEvent, ...props }) => {

    const style = {
        padding: "1rem",
        margin: "3px 0 0 0"
    }

    return (<>
        <form style={{
            backgroundColor: "#caf0f8",
            maxWidth: "330px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            borderRadius: "1.5rem",
            padding: "20px",
            marginTop: "30px",
        }} onSubmit={onSubmit}>
            <input style={style}
                type="text"
                {...register("username")}
                placeholder="Username"
                defaultValue=""
                name="username"
                disabled={disableControls}
            />
            <input id="user"
                type="password"
                placeholder="Password"
                style={style}
                name="password"
                {...register("password")}
                disabled={disableControls}
            />

            <button type="submit" style={{ marginTop: "1rem" }} disabled={disableControls}>
                Login
            </button>
            <div align="right" style={{marginTop:'1rem'}}>
                <label className="link" onClick={signUpEvent}>Sign up</label>
            </div>
        </form>
    </>)
}

export default Login