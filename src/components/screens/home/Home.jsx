import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import { Button } from '../../ui/button/Button'

import Layout from '../../layout/Layout'

import styles from './Home.module.scss'

function Home() {
	const { isAuth } = useAuth()
	const navigate = useNavigate()
	return (
		<Layout bgImage={'/images/home-bg.jpg'}>
			<Button
				clickHandler={() =>
					isAuth ? navigate('/new-workout') : navigate('/auth')
				}
			>
				{isAuth ? 'New workout' : 'Sign in'}
			</Button>
			<h1 className={styles.heading}>Some motivation phrase</h1>
		</Layout>
	)
}

export default Home
