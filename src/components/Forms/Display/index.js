import React from 'react'

const Display = () => {
    return (<>
        <div>
            <div>
                <label>Select a Country</label>
                <select>

                </select>
            </div>
            <div>
                <textarea style={{
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
        </div>
    </>)
}

export default Display