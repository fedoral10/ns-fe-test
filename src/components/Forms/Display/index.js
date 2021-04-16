import { Container, FormControl, InputLabel, MenuItem, Select, TextareaAutosize } from '@material-ui/core'
import React from 'react'

const Display = () => {
    return (<>
        <Container  >
            <div>
                <FormControl>
                    <InputLabel id="ContinenteLabel">Continente</InputLabel>
                    <Select placeholder="Continente" labelId="ContinenteLabel" value={10} style={{ width: '150px' }}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel id="PaisLabel">Pais</InputLabel>
                    <Select placeholder="Pais" labelId="PaisLabel" value={10} style={{ width: '150px' }}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <TextareaAutosize style={{
                    maxHeight: "400px",
                    width: "80%"
                }}
                value={`
            "continent": "North-America",
            "country": "Nicaragua",
            "population": 6686084,
            "cases": {
                "new": "+51",
                "active": 2373,
                "critical": null,
                "recovered": 4225,
                "1M_pop": "1014",
                "total": 6778
            },
            "deaths": {
                "new": "+1",
                "1M_pop": "27",
                "total": 180
            },
            "tests": {
                "1M_pop": null,
                "total": null
            },
            "day": "2021-04-15",
            "time": "2021-04-15T19:15:03+00:00"`} />
            </div>
        </Container>
    </>)
}

export default Display