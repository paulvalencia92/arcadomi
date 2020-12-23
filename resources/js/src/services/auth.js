import axios from './index'

export default {
    login(userData) {
        let data = {
            email: userData.email,
            password: userData.password
        }
        return axios.post('/api/login', data)
    },
    register(userData) {
        return axios.post(process.env.MIX_SENTRY_DSN_API + 'api/register', userData)
    },
    jwtLogin(userData) {
        return axios.post(process.env.MIX_SENTRY_DSN_API + 'api/auth/login', userData)
    },
    jwtRegister(userData) {
        return axios.post(process.env.MIX_SENTRY_DSN_API + 'api/auth/register', userData)
    }
}
