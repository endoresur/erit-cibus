import { cc } from 'utils/combineClasses'
import styles from './styles.module.scss'
import { DayCardVariant } from '../../types'

interface Props {
	caloricContent: number
	cookingTime: string
	isIngredientsPurchased?: boolean
	variant?: DayCardVariant
	className?: string
}

const CardFooter = ({
	caloricContent,
	cookingTime,
	isIngredientsPurchased,
	variant = DayCardVariant.DEFAULT,
	className
}: Props) => {
	return (
		<footer className={cc(styles.cardFooterRoot, styles[`variant_${variant}`], className)}>
			<div className={styles.footerPart}>🔥 {caloricContent}</div>
			<div className={styles.footerPart}>⏳ {cookingTime}</div>

			<div className={styles.footerPart}>
				{!isIngredientsPurchased ? '✅Все продукты куплены' : '❗ Нужно докупить'}
			</div>
		</footer>
	)
}

export default CardFooter
