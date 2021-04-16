import React from 'react'
import { Button, Container, TextField } from '@material-ui/core'

const Login = () => {
    return (<>
        <Container style={{
            fontFamily: "sans-serif",
            textAlign: "center"
            
        }}>
            <form style={{
                maxWidth: "330px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                background: "white",
                padding: "20px",
                marginTop: "30px",
            }}>
                <TextField label="User"
                    id="user"
                    type="text"
                />
                <TextField label="Password"
                    id="user"
                    type="password"
                />
                <Button style={{ marginTop: "50px" }} variant="contained" color="primary" >
                    Login
                </Button>
            </form>
        </Container>
    </>)
}

export default Login