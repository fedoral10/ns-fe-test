class BackendCovid19Api {
    host = null
    headers = {}

    token = null

    async makeRequest(method, url, data = undefined, token = undefined) {
        try {
            const response = await fetch(`${this.host}${url}`, {
                method: method, // *GET, POST, PUT, DELETE, etc.
                // mode: 'cors', // no-cors, *cors, same-origin
                //credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token ? `Bearer ${token}` : undefined
                },
                redirect: 'follow', // manual, *follow, error
                body: data ? JSON.stringify(data) : undefined// body data type must match "Content-Type" header
            });
            return response.json(); // parses JSON response into native JavaScript objects
        }
        catch (err) {
            console.log(err)
            return err
        }

    }


    constructor(host, token) {
        this.host = host
        this.token = token
    }

    async signUp(username, password) {
        const data = {
            username,
            password
        }

        const r = await this.makeRequest('POST', '/auth/signup', data)

        return r
    }

    async login(username, password) {
        const data = {
            username,
            password
        }

        const r = await this.makeRequest('POST', '/auth/login', data)

        return r

    }

    async getStatistics(country) {

        const r = await this.makeRequest('GET', country ? '/statistics/' + country : '/statistics', null, this.token)

        if (r.code !== 200)
            throw new Error(r.error)

        return r.data

    }

    async postStatistics(country, data) {

        const r = await this.makeRequest('POST', country ? '/statistics/' + country : '/statistics', data, this.token)

        if (r.code !== 200)
            throw new Error(r.error)

        return r.data

    }

    async getSync() {

        const r = await this.makeRequest('GET', `/sync`, null, this.token)

        if (r.code !== 200)
            throw new Error(r.error)

        return r.data

    }

    async getCountries() {

        const r = await this.makeRequest('GET', `/countries`, null, this.token)

        if (r.code !== 200)
            throw new Error(r.error)

        return r.data

    }

}

export default BackendCovid19Api//new BackendCovid19Api(process.env.REACT_APP_BEHOST)
