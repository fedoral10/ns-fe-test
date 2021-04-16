import { TextField } from '@material-ui/core'
import React from 'react'

const Statistics = () => {

    return (<>
        <TextField label={"cases-new"} type="number" />
        <TextField label={"cases-active"} />
        <TextField label={"cases-critical"} />
        <TextField label={"cases-recovered"} />
        <TextField label={"cases-1M_pop"} />
        <TextField label={"cases-total"} />

        <TextField label={"deaths-new"} />
        <TextField label={"deaths-1M_pop"} />
        <TextField label={"deaths-total"} />
        
        <TextField label={"tests-1M_pop"} />
        <TextField label={"tests-total"} />
    </>)
}

export default Statistics
