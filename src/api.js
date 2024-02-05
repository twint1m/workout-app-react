import axios from 'axios'
import Cookies from 'js-cookie'

import { BASE_URL } from './constants/base-url'

export const $axios = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: Cookies.get('token') ? `Bearer ${Cookies.get('token')}` : ''
	}
})
