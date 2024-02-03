import { FaUserCircle } from 'react-icons/fa'
import { IoMdArrowBack } from 'react-icons/io'
import { redirect, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'

const Header = ({ backLink = '' }) => {
	const { isAuth } = useAuth()
	const { pathname } = useLocation()
	const navigate = useNavigate()
	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button onClick={() => navigate(backLink)}>
					<IoMdArrowBack fill='#fff' fontSize={29} />
				</button>
			) : (
				<button>
					<FaUserCircle
						fontSize={30}
						fill='#fff'
						onClick={() => (isAuth ? navigate('profile') : navigate('auth'))}
					/>
				</button>
			)}
			<Hamburger />
		</header>
	)
}

export default Header
