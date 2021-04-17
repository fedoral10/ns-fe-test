import { Container, TextField } from '@material-ui/core'
import React from 'react'

const Statistics = ({ cases, deaths, tests }) => {

    const style = {
        maxWidth: "250px",
        marginLeft: "15px"
    }

    return (<>
        <Container style={{ textAlign: "center", maxWidth: "50%" }}>
            <form>
                <TextField style={style} defaultValue={cases?.new} label={"Cases New"} />
                <TextField style={style} defaultValue={cases?.active} label={"Cases Active"} type="number" />
                <TextField style={style} defaultValue={cases?.critical} label={"Cases Critical"} />
                <TextField style={style} defaultValue={cases?.recovered} label={"Cases Recovered"} type="number" />
                <TextField style={style} defaultValue={cases && cases['1M_pop']} label={"Cases 1M_pop"} />
                <TextField style={style} defaultValue={cases?.total} InputProps={{ readOnly: true }} label={"Cases Total"} type="number" />

                <TextField style={style} defaultValue={deaths?.new} label={"Deaths New"} />
                <TextField style={style} defaultValue={deaths && cases['1M_pop']} label={"Deaths 1M_pop"} />
                <TextField style={style} defaultValue={deaths?.total} InputProps={{ readOnly: true }} label={"Deaths Total"} type="number" />

                <TextField style={style} defaultValue={tests && cases['1M_pop']} label={"Tests 1M_pop"} />
                <TextField style={style} defaultValue={tests?.total} InputProps={{ readOnly: true }} label={"Tests Total"} type="number" />
            </form>
        </Container>
    </>)
}

export default Statistics
