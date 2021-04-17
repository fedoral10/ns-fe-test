import { TextField} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useState } from 'react'
import { Forms } from '../../components'

const StatisticsPage = () => {

    const options = useState([{name: "Nicaragua"}])

    return (<>
        <Autocomplete
            options={options}
            getOptionLabel={(option) => option.name}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Country" variant="outlined" />}
        />
        <Forms.Statistics />
    </>)
}

export default StatisticsPage
