import styles from './Field.module.scss'

const Field = ({ register, errors, type, name, placeholder, options }) => {
	return (
		<div>
			<input
				{...register(name, options)}
				className={styles.input}
				placeholder={placeholder}
				type={type}
			></input>
			{errors?.email && (
				<span className={styles.error}>{errors.email.message}</span>
			)}
		</div>
	)
}

export default Field
