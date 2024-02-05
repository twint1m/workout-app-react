import Cookies from 'js-cookie'

import { $axios } from '../api'

class AuthService {
	async main(email, password, type) {
		try {
			const { data } = await $axios.post(`/auth/${type}`, {
				email,
				password
			})

			data.token
				? Cookies.set('token', data.token)
				: new Error('Token is not defined!')

			return data
		} catch (e) {
			throw new Error(e)
		}
	}
}

export default new AuthService()
