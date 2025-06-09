import { ChevronLeft, ChevronRight } from 'lucide-react'
import ContentWrapper from 'ui/shared/ContentWrapper'
import { cc } from 'utils/combineClasses'
import styles from './styles.module.scss'
import DayCard from './components/DayCard'
import { useState } from 'react'
import { add, sub } from 'date-fns'
import MultiSwitch from 'ui/features/MultiSwitch'
import { Option } from 'types/common'
import { DaysDisplayVariants } from './types'

interface Props {
	className?: string
}

const daysGridOptions: Option[] = [
	{ label: '3 Дня', value: DaysDisplayVariants.THREE_DAYS },
	{ label: 'Неделя', value: DaysDisplayVariants.WEEK },
	{ label: 'Месяц', value: DaysDisplayVariants.MONTH }
]

const Calendar = ({ className }: Props) => {
	const [cards, setCards] = useState(Array(7).fill('0'))

	const [activeDay, setActiveDay] = useState(new Date().toISOString())
	const [daysGridValue, setDaysGridValue] = useState<DaysDisplayVariants>(DaysDisplayVariants.WEEK)

	const onNextDayClick = () => setActiveDay(add(activeDay, { days: 1 }).toISOString())

	const onPrevDayClick = () => setActiveDay(sub(activeDay, { days: 1 }).toISOString())

	const onDaysGridChange = (value: DaysDisplayVariants) => {
		setDaysGridValue(value)

		switch (value) {
			case DaysDisplayVariants.THREE_DAYS:
				setCards(Array(3).fill('0'))
				break
			case DaysDisplayVariants.WEEK:
				setCards(Array(7).fill('0'))
				break
			case DaysDisplayVariants.MONTH:
				setCards(Array(30).fill('0'))
				break
			default:
				break
		}
	}

	return (
		<section className={cc(styles.calendarRoot, className)}>
			<header className={styles.header}>
				<div className={styles.titleWrapper}>
					<h2 className={styles.title}>Your Meal Plan</h2>
					<time className={styles.date}>May 7 - May 13, 2025</time>
				</div>
				<div className={styles.actionsWrapper}>
					<div>
						<MultiSwitch
							options={daysGridOptions}
							defaultValue={daysGridValue}
							onChange={onDaysGridChange}
						/>
					</div>
					<div>action</div>
				</div>
			</header>

			<ContentWrapper variant="fullWidth" className={styles.content}>
				<div className={styles.calendar}>
					<div className={styles.calendarHeader}>
						<div className={styles.action} onClick={onPrevDayClick}>
							<ChevronLeft />
						</div>
						<time className={styles.date}>May 2025</time>
						<div className={styles.action} onClick={onNextDayClick}>
							<ChevronRight />
						</div>
					</div>

					<div className={styles.calendarGrid}>
						{/* <div className={styles.days}> */}
						<div className={styles[`${daysGridValue}`]}>
							{/* <DayCard date={sub(activeDay, { days: 1 }).toISOString()} />
							<DayCard date={activeDay} />
							<DayCard date={add(activeDay, { days: 1 }).toISOString()} /> */}
							{cards.map((_, index) => (
								<DayCard key={index} date={activeDay} variant={daysGridValue} />
							))}
						</div>
					</div>
				</div>
			</ContentWrapper>
		</section>
	)
}

export default Calendar
