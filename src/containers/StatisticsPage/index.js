import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { BackendCovid19Api } from '../../api'
import { Forms, Grid, LabeledInput, Loading } from '../../components'
import { sendErrorToast, sendOkToast } from '../../shared/dialogs'

const columns = [
    {
        Header: 'New Cases',
        accessor: 'cases.new',
    },
    {
        Header: "Active Cases",
        accessor: "cases.active"
    },
    {
        Header: "Critical",
        accessor: "cases.critical"
    },
    {
        Header: "Recovered",
        accessor: "cases.recovered"
    },
    {
        Header: "Total Cases",
        accessor: "cases.total"
    },
    {
        Header: 'Total Deaths',
        accessor: 'deaths.total',
    },
    {
        Header: 'Total Tests',
        accessor: 'tests.total',
    },
    {
        Header: 'Actions',
        Cell: (props) => <button>Edit</button>
    }
]
const api = new BackendCovid19Api(process.env.REACT_APP_BEHOST, localStorage.getItem('token'))

const StatisticsPage = () => {
    const history = useHistory()
    const countryInput = useRef()
    const [data, setData] = useState()
    const [countries, setCountries] = useState([])
    const { register, handleSubmit, setValue } = useForm()
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setValue("cases_new", data?.cases?.new)
        setValue("cases_active", data?.cases?.active)
        setValue("cases_critical", data?.cases?.critical)
        setValue("cases_recovered", data?.cases?.recovered)
        setValue("cases_1M_pop", data?.cases['1M_pop'])
        setValue("cases_total", data?.cases?.total)
        setValue("deaths_new", data?.deaths?.new)
        setValue("deaths_1M_pop", data?.deaths['1M_pop'])
        setValue("deaths_total", data?.deaths?.total)
        setValue("tests_1M_pop", data?.tests['1M_pop'])
        setValue("tests_total", data?.tests?.tota)

    }, [data, setValue])


    useEffect(() => {
        api.getCountries()
            .then(response => setCountries(response))
            .catch(err => console.log(err))
    }, [])

    const logOutEvent = _ => {
        localStorage.removeItem('token')
        history.push('/login')
    }

    const findEvent = _ => {
        const texto = countryInput.current.value
        const isCountry = (text) => {
            return countries.find(value => value.name.toLowerCase() === text.toLowerCase())
        }

        if (isCountry(texto)) {
            setLoading(true)
            api.getStatistics(texto)
                .then(response => {
                    sendOkToast('Found')
                    setData(response)
                })
                .catch(err => console.log(err))
                .finally(_ => setLoading(false))
        } else {
            sendErrorToast("404 Country not Found")
        }

    }

    const submitEvent = values => {
        if (!data) {
            sendErrorToast("Country not selected")
            return
        }
        const body = {
            cases: {
                new: values.cases_new,
                active: values.cases_active,
                critical: values.cases_critical,
                recovered: values.cases_recovered,
                "1M_pop": values.cases_1M_pop,
                total: values.cases_total
            },
            deaths: {
                new: values.deaths_new,
                "1M_pop": values.deaths_1M_pop,
                total: values.deaths_total
            },
            tests: {
                "1M_pop": values.tests_1M_pop,
                total: values.deaths_total
            },
        }
        setLoading(true)
        api.postStatistics(data.country, body)
            .then(res => {
                console.log(res)
                sendOkToast('Saved!')
            }).catch(err => {
                console.log(err)
                sendErrorToast('Error saving values')
            }).finally(_ => setLoading(false))
    }

    const syncEvent = _ => {
        setLoading(true)
        api.getSync()
            .then(_ => sendOkToast('DB synced up!!'))
            .catch(err => {
                console.log(err)
                sendErrorToast('Error Synchronizing :(')
            }).finally(_ => setLoading(false))
    }

    const InfoForm = _ => {
        return (<>
            <div className="container" style={{ marginTop: "2rem" }}>
                <div className="container" style={{ marginBottom: '1rem' }}>
                    <LabeledInput defaultValue={data?.continent} readOnly label="Continent" style={{ marginRight: '15px' }} />
                    <LabeledInput defaultValue={data?.population} readOnly label="Population" style={{ marginRight: '15px' }} />
                    <LabeledInput defaultValue={data?.country} readOnly label="Country" style={{ marginRight: '15px' }} />
                </div>
                <div className="container">
                    <form className="container" onSubmit={handleSubmit(submitEvent)}>
                        <div className="container">
                            <LabeledInput register={register('cases_new')} label="Cases New" placeholder={"Cases New"} />
                            <LabeledInput register={register('cases_active')} label="Cases Active" placeholder={"Cases Active"} type="number" />
                            <LabeledInput register={register('cases_critical')} label="Cases Critical" placeholder={"Cases Critical"} />
                            <LabeledInput register={register('cases_recovered')} label="Cases Recovered" placeholder={"Cases Recovered"} type="number" />
                            <LabeledInput register={register('cases_1M_pop')} label="Cases 1M_pop" placeholder={"Cases 1M_pop"} />
                            <LabeledInput register={register('cases_total')} label="Cases Total" placeholder={"Cases Total"} type="number" />
                            <LabeledInput register={register('deaths_new')} label="Deaths New" placeholder={"Deaths New"} />
                            <LabeledInput register={register('deaths_1M_pop')} label="Deaths 1M_pop" placeholder={"Deaths 1M_pop"} />
                            <LabeledInput register={register('deaths_total')} label="Deaths Total" placeholder={"Deaths Total"} type="number" />
                            <LabeledInput register={register('tests_1M_pop')} label="Tests 1M_pop" placeholder={"Tests 1M_pop"} />
                            <LabeledInput register={register('tests_total')} label="Tests Total" placeholder={"Tests Total"} type="number" />
                        </div>
                        <button type="submit">Save Values</button>
                    </form>
                </div>
            </div>
            <div align="center" style={{ marginTop: "1rem" }}>
                {/*<Grid columns={columns} data={data} />*/}
            </div>
        </>)
    }

    return (<>
        <Loading showModal={loading} />
        <div style={{ display: "flex" }}>
            <div align="left" style={{ width: "50%" }}>
                <button onClick={syncEvent}>Sync</button>
            </div>
            <div align="right" style={{ width: "50%" }}>
                <button className="red" onClick={logOutEvent}>Log out</button>
            </div>
        </div>
        <div align="center">
            <label>Type a country to get statistics about COVID 19</label><br />
            <input ref={countryInput} id="countryInput" list="countries" placeholder="Where are you from?" />
            <datalist id="countries" >
                {countries.map((item, index) => <option key={index} value={item.name} />)}
            </datalist>
            <button onClick={findEvent}>Find</button>
        </div>
        {data ? <InfoForm/>:''}
    </>)
}

export default StatisticsPage
