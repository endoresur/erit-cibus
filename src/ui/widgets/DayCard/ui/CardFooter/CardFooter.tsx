import { cc } from 'utils/combineClasses'
import styles from './styles.module.scss'
import { DayeCardBaseProps } from '../../types'

interface Props extends DayeCardBaseProps {}

const CardFooter = ({ variant, className }: Props) => {
	return (
		<footer className={cc(styles.cardFooterRoot, styles[`variant_${variant}`], className)}>
			CellFooter
		</footer>
	)
}

export default CardFooter
