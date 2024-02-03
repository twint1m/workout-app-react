import styles from './Loader.module.scss'

const Loader = () => {
	return (
		<>
			<img
				className={styles.loader}
				src='/images/three-dots.svg'
				alt='loader'
				draggable={false}
				width={90}
			/>
			<div className={styles.overlay}></div>
		</>
	)
}

export default Loader
