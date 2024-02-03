import { useForm } from 'react-hook-form'

import { Button } from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import inputStyles from '../../ui/field/Field.module.scss'
import Loader from '../../ui/loader/Loader'

import Layout from '../../layout/Layout'

import styles from './Auth.module.scss'

const Auth = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset
	} = useForm({
		mode: 'onBlur'
	})
	const saveData = data => {
		alert(JSON.stringify(data))
		console.log(data)
		reset()
	}
	return (
		<>
			<Layout
				heading='Auth / Register'
				className={styles.authBg}
				bgImage={'/images/auth-bg.png'}
			></Layout>
			<Loader />
			<div className='wrapper-inner-page'>
				<form onSubmit={handleSubmit(saveData)}>
					<div>
						<input
							className={inputStyles.input}
							placeholder='Enter email'
							{...register('email', {
								required: true,
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Invalid email address'
								}
							})}
						></input>
						{errors.email && (
							<span className={inputStyles.error}>{errors.email.message}</span>
						)}
					</div>
					<div>
						<input
							className={inputStyles.input}
							type='password'
							placeholder='Enter password'
							{...register('password', {
								required: true,
								minLength: {
									value: 8,
									message: 'Password must include at least 8 symbols!'
								}
							})}
						></input>
						{errors.password && (
							<span className={inputStyles.error}>
								{errors.password.message}
							</span>
						)}
					</div>
					<div className={styles.wrapperButtons}>
						<Button disabledHandler={!isValid}>Sign Up</Button>
						<Button disabledHandler={!isValid}>Sign In</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
