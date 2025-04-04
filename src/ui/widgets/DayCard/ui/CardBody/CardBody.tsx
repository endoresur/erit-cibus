import { cc } from 'utils/combineClasses'
import styles from './styles.module.scss'
import { DayCardVariant } from '../../types'

interface Props {
	notes: string[]
	mainMeal: {
		label: string
		caloricContent: number
		cookingTime: string
	}
	isCardHovered: boolean
	mainNote?: string
	variant?: DayCardVariant
	className?: string
}

const CardBody = ({
	notes,
	mainNote,
	mainMeal,
	isCardHovered,
	variant = DayCardVariant.DEFAULT,
	className
}: Props) => {
	return (
		<section className={cc(styles.cardBodyRoot, styles[`variant_${variant}`], className)}>
			{variant === DayCardVariant.CELL && (
				<div className={styles.cellBody}>
					<p className={styles.mainMeal}>
						{mainMeal.label}{' '}
						{isCardHovered ? `| 🔥${mainMeal.caloricContent} | ⏳${mainMeal.cookingTime}` : ''}
					</p>
					<p className={styles.mainNote}>{mainNote ?? ' '}</p>
				</div>
			)}

			{variant === DayCardVariant.DEFAULT && <div className={styles.defaultBody}></div>}
		</section>
	)
}

export default CardBody
