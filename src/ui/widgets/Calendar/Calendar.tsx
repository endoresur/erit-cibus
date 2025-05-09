import { ChevronLeft, ChevronRight } from 'lucide-react'
import ContentWrapper from 'ui/shared/ContentWrapper'
import { cc } from 'utils/combineClasses'
import styles from './styles.module.scss'
import DayCard from './components/DayCard'
import { useState } from 'react'
import { add, sub } from 'date-fns'
import MultiSwitch from 'ui/features/MultiSwitch'
import { Option } from 'types/common'

interface Props {
	className?: string
}

const daysGridOptions: Option[] = [
	{ label: '3 Дня', value: 'days' },
	{ label: 'Неделя', value: 'week' },
	{ label: 'Месяц', value: 'month' }
]

const Calendar = ({ className }: Props) => {
	const cards = Array(6).fill('0')
	const [activeDay, setActiveDay] = useState(new Date().toISOString())
	const [daysGridValue, setDaysGridValue] = useState('days')

	const onNextDayClick = () => setActiveDay(add(activeDay, { days: 1 }).toISOString())

	const onPrevDayClick = () => setActiveDay(sub(activeDay, { days: 1 }).toISOString())

	const onDaysGridChange = (value: string) => setDaysGridValue(value)

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
							<DayCard date={sub(activeDay, { days: 1 }).toISOString()} />
							<DayCard date={activeDay} />
							<DayCard date={add(activeDay, { days: 1 }).toISOString()} />
						</div>
					</div>
				</div>
			</ContentWrapper>
		</section>
	)
}

export default Calendar
