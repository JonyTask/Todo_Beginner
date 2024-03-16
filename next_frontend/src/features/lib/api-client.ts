import type { AxiosInstance, CreateAxiosDefaults } from 'axios'
import { default as Axios } from 'axios'

function getAccessToken() {
    if (typeof window !== 'undefined') {
        const vuex = window.localStorage.getItem('vuex')
        if (!vuex) return

        const accessToken = JSON.parse(vuex).token.accessToken
        return accessToken
    }
}

type HttpProps = {
    accept?: string
    token?: boolean | string
    axiosDefaults?: CreateAxiosDefaults
}

const defaultHttpProps: HttpProps = {
    accept: 'application/json',
    token: getAccessToken(),
    axiosDefaults: {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    },
}

export class Http {
    public static axios(props?: HttpProps): AxiosInstance {
    const { axiosDefaults, accept, token } = {
        ...defaultHttpProps,
        ...props,
    }

    const axios = Axios.create({ ...axiosDefaults })

    axios.interceptors.request.use((config) => {
        if (config.headers && accept) {
        config.headers.Accept = accept
        }

        if (config.headers && token) {
        config.headers.authorization = `Bearer ${token}`
        }

        return config
    })

    axios.interceptors.response.use(
        (response) => {
        return response
        },
        (error) => {
        return Promise.reject(error)
        },
    )

    return axios
    }
}
