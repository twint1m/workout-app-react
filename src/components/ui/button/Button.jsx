import cn from 'clsx'

import styles from './Button.module.scss'

export const Button = ({
	children,
	clickHandler,
	size = 'xl',
	disabledHandler
}) => {
	return (
		<div className={styles.wrapper}>
			<button
				disabled={disabledHandler}
				className={cn(styles.button, styles[size])}
				onClick={clickHandler}
			>
				{children}
			</button>
		</div>
	)
}
