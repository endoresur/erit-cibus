import { cc } from 'utils/combineClasses'
import styles from './styles.module.scss'
import { DayeCardBaseProps } from '../../types'

interface Props extends DayeCardBaseProps {}

const CardBody = ({ variant, className }: Props) => {
	return (
		<section className={cc(styles.cardBodyRoot, styles[`variant_${variant}`], className)}>
			CellBody
		</section>
	)
}

export default CardBody
