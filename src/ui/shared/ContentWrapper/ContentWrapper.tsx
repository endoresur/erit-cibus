import { JSX } from 'react'
import styles from './styles.module.scss'
import { cc } from 'utils/combineClasses'

interface Props {
	children: JSX.Element
	variant?: 'default' | 'fullWidth'
	className?: string
}

const ContentWrapper = ({ children, variant = 'default', className }: Props) => {
	return (
		<div className={cc(styles.contentWrapperRoot, styles[`variant--${variant}`], className)}>
			{children}
		</div>
	)
}

export default ContentWrapper
