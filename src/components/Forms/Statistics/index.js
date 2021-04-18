import React from 'react'

const Statistics = ({ cases, deaths, tests }) => {

    const style = {
        maxWidth: "250px",
        marginLeft: "15px"
    }

    return (<>
        <div style={{ textAlign: "center", maxWidth: "50%" }}>
            <form>
                <div>
                    <input style={style} defaultValue={cases?.new} placeholder={"Cases New"} />
                    <input style={style} defaultValue={cases?.active} placeholder={"Cases Active"} type="number" />
                    <input style={style} defaultValue={cases?.critical} placeholder={"Cases Critical"} />
                    <input style={style} defaultValue={cases?.recovered} placeholder={"Cases Recovered"} type="number" />
                    <input style={style} defaultValue={cases && cases['1M_pop']} placeholder={"Cases 1M_pop"} />
                    <input style={style} defaultValue={cases?.total} readOnly={true} placeholder={"Cases Total"} type="number" />

                    <input style={style} defaultValue={deaths?.new} placeholder={"Deaths New"} />
                    <input style={style} defaultValue={deaths && cases['1M_pop']} placeholder={"Deaths 1M_pop"} />
                    <input style={style} defaultValue={deaths?.total} readOnly={true} placeholder={"Deaths Total"} type="number" />

                    <input style={style} defaultValue={tests && cases['1M_pop']} placeholder={"Tests 1M_pop"} />
                    <input style={style} defaultValue={tests?.total} readOnly={true} placeholder={"Tests Total"} type="number" />
                </div><div>
                    <button type="submit">Guardar</button>
                </div>
            </form>
        </div>
    </>)
}

export default Statistics
