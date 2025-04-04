import styles from './styles.module.scss'
import { RoundedSide } from '../Calendar/types'
import { cc } from 'utils/combineClasses'
import CardHeader from './ui/CardHeader'
import CardBody from './ui/CardBody'
import CardFooter from './ui/CardFooter'
import { DayCardVariant, DayEvent } from './types'
import { useHover } from '@uidotdev/usehooks'

interface Props {
	date: string
	rounded?: boolean | RoundedSide
	dayEvents: DayEvent[]
	variant?: DayCardVariant
	className?: string
}

const DayCard = ({
	date,
	variant = DayCardVariant.CELL,
	rounded = true,
	dayEvents,
	className
}: Props) => {
	const [cardRef, isCardHovered] = useHover()

	const showMainNote = Math.floor(Math.random() * 4) === 0

	return (
		<article
			className={cc(
				styles.calendarCellRoot,
				rounded && styles.isCellRounded,
				styles[`variant_${variant}`],
				className
			)}
			ref={cardRef}
		>
			<div className={styles.cellWrapper}>
				<CardHeader
					date={date}
					className={styles.header}
					variant={variant}
					dayEvent={dayEvents[0]}
				/>

				<CardBody
					mainNote={showMainNote ? 'Главная напоминалка' : ''}
					notes={['Важное дело', 'Не очень важное дело']}
					className={styles.section}
					variant={variant}
					mainMeal={{
						label: 'Пицца',
						caloricContent: 580,
						cookingTime: '45m'
					}}
					isCardHovered={isCardHovered}
				/>

				{variant !== DayCardVariant.CELL && (
					<CardFooter
						className={styles.footer}
						variant={variant}
						caloricContent={2000}
						cookingTime="1h 40m"
						isIngredientsPurchased
					/>
				)}
			</div>
		</article>
	)
}

export default DayCard
