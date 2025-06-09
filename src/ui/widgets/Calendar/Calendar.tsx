import { ChevronLeft, ChevronRight } from 'lucide-react'
import ContentWrapper from 'ui/shared/ContentWrapper'
import { cc } from 'utils/combineClasses'
import styles from './styles.module.scss'
import DayCard from './components/DayCard'
import { Fragment, useEffect, useState } from 'react'
import {
	add,
	addDays,
	Duration,
	eachDayOfInterval,
	endOfMonth,
	endOfWeek,
	format,
	isSameDay,
	isSameMonth,
	startOfMonth,
	startOfWeek,
	sub
} from 'date-fns'
import MultiSwitch from 'ui/features/MultiSwitch'
import { Option } from 'types/common'
import { DaysDisplayVariants } from './types'
import { monthsNames, montIndexToMonth, PlannerItemCard } from 'types/calendar'
import { getWeekDayIndexByDate } from 'utils/datetime'

interface Props {
	plannedDays: PlannerItemCard[]
	className?: string
}

const daysGridOptions: Option[] = [
	{ label: '3 Дня', value: DaysDisplayVariants.THREE_DAYS },
	{ label: 'Неделя', value: DaysDisplayVariants.WEEK },
	{ label: 'Месяц', value: DaysDisplayVariants.MONTH }
]

const daysGridOptionsWithToday: Option[] = [
	{ label: 'Сегодня', value: DaysDisplayVariants.DEFAULT },
	{ label: '3 Дня', value: DaysDisplayVariants.THREE_DAYS },
	{ label: 'Неделя', value: DaysDisplayVariants.WEEK },
	{ label: 'Месяц', value: DaysDisplayVariants.MONTH }
]

const Calendar = ({ plannedDays, className }: Props) => {
	const [activeDate, setActiveDate] = useState(new Date().toISOString())
	const [daysGridValue, setDaysGridValue] = useState<DaysDisplayVariants>(
		DaysDisplayVariants.THREE_DAYS
	)
	const [displayedCard, setDisplayedCard] = useState<PlannerItemCard[]>()

	const onNextDayClick = () => {
		const duration: Duration = {
			days: daysGridValue === DaysDisplayVariants.THREE_DAYS ? 1 : undefined,
			weeks: daysGridValue === DaysDisplayVariants.WEEK ? 1 : undefined,
			months: daysGridValue === DaysDisplayVariants.MONTH ? 1 : undefined
		}

		setActiveDate(add(activeDate, duration).toISOString())
	}

	const onPrevDayClick = () => {
		const duration: Duration = {
			days: daysGridValue === DaysDisplayVariants.THREE_DAYS ? 1 : undefined,
			weeks: daysGridValue === DaysDisplayVariants.WEEK ? 1 : undefined,
			months: daysGridValue === DaysDisplayVariants.MONTH ? 1 : undefined
		}

		setActiveDate(sub(activeDate, duration).toISOString())
	}

	const onDaysGridChange = (value: DaysDisplayVariants) => {
		if (value === DaysDisplayVariants.DEFAULT) {
			setDaysGridValue(DaysDisplayVariants.THREE_DAYS)
			setActiveDate(new Date().toISOString())
		} else {
			setDaysGridValue(value)
		}
	}

	const onChangeActiveDate = (date: string) => {
		const currentActiveDate = plannedDays.find(day => isSameDay(day.date, date))

		if (currentActiveDate && daysGridValue === DaysDisplayVariants.MONTH) {
			setActiveDate(currentActiveDate.date)
			setDaysGridValue(DaysDisplayVariants.THREE_DAYS)
		}
	}

	useEffect(() => {
		const getTreeDays = () => {
			const displayedDays: PlannerItemCard[] = []

			if (currentDateIndex === 0) {
				const prevDate = addDays(currentPlannedDay.date, -1)
				displayedDays.push({ date: prevDate.toISOString(), id: prevDate.toISOString() })
			} else {
				displayedDays.push(plannedDays[currentDateIndex - 1])
			}

			displayedDays.push(currentPlannedDay)

			if (currentDateIndex === plannedDays.length - 1) {
				const nextDay = addDays(currentPlannedDay.date, 1)
				displayedDays.push({ date: nextDay.toISOString(), id: nextDay.toISOString() })
			} else {
				displayedDays.push(plannedDays[currentDateIndex + 1])
			}

			setDisplayedCard(displayedDays)
		}

		const getWeek = () => {
			const displayedDays: PlannerItemCard[] = []

			const startOfWeekDate = add(startOfWeek(currentPlannedDay.date), { days: 1 })
			const endOfWeekDate = add(endOfWeek(currentPlannedDay.date), { days: 1 })
			const weekInterval = eachDayOfInterval({ start: startOfWeekDate, end: endOfWeekDate })

			weekInterval.forEach(date => {
				const plannedDay = plannedDays.find(day => isSameDay(date, day.date))

				if (plannedDay) {
					displayedDays.push(plannedDay)
				} else {
					displayedDays.push({ date: date.toISOString(), id: date.toISOString() })
				}
			})

			setDisplayedCard(displayedDays)
		}

		const getMonth = () => {
			const daysBeforeFirstMonthDay: PlannerItemCard[] = []
			for (let i = getWeekDayIndexByDate(plannedDays[0].date) - 1; i >= 0; i--) {
				const date = add(startOfMonth(currentPlannedDay.date), { days: -i - 1 })
				daysBeforeFirstMonthDay.push({ date: date.toISOString(), id: date.toISOString() })
			}

			const daysAfterLastMonthDay: PlannerItemCard[] = []
			for (let i = getWeekDayIndexByDate(plannedDays[plannedDays.length - 1].date); i < 6; i++) {
				const date = add(endOfMonth(currentPlannedDay.date), { days: i + 1 })
				daysAfterLastMonthDay.push({ date: date.toISOString(), id: date.toISOString() })
			}

			setDisplayedCard([...daysBeforeFirstMonthDay, ...plannedDays, ...daysAfterLastMonthDay])
		}

		let currentDateIndex = plannedDays.findIndex(day => isSameDay(day.date, activeDate))

		if (currentDateIndex === -1) {
			currentDateIndex = 0
		}
		const currentPlannedDay = plannedDays[currentDateIndex]

		switch (daysGridValue) {
			case DaysDisplayVariants.THREE_DAYS: {
				getTreeDays()
				break
			}
			case DaysDisplayVariants.WEEK: {
				getWeek()
				break
			}
			case DaysDisplayVariants.MONTH:
			default: {
				getMonth()
			}
		}
	}, [activeDate, daysGridValue])

	return (
		<section className={cc(styles.calendarRoot, className)}>
			<header className={styles.header}>
				<div className={styles.titleWrapper}>
					<h2 className={styles.title}>План питания</h2>
					{displayedCard && (
						<time className={styles.date}>
							{format(displayedCard[0].date, 'd MMMM')}
							{' - '}
							{format(displayedCard[displayedCard.length - 1].date, 'd MMMM')}
							{', '}
							{format(displayedCard[displayedCard.length - 1].date, 'yyyy')}
						</time>
					)}
				</div>
				<div className={styles.actionsWrapper}>
					<div>
						<MultiSwitch
							options={
								isSameDay(activeDate, new Date()) ? daysGridOptions : daysGridOptionsWithToday
							}
							defaultValue={daysGridValue}
							onChange={onDaysGridChange}
						/>
					</div>
				</div>
			</header>

			<ContentWrapper variant="fullWidth" className={styles.content}>
				<div className={styles.calendar}>
					<div className={styles.calendarHeader}>
						<div className={styles.action} onClick={onPrevDayClick}>
							<ChevronLeft />
						</div>
						<time className={styles.date}>
							{monthsNames[montIndexToMonth[Number(format(activeDate, 'M')) - 1]]}{' '}
							{format(activeDate, 'yyyy')}
						</time>
						<div className={styles.action} onClick={onNextDayClick}>
							<ChevronRight />
						</div>
					</div>

					<div className={styles.calendarGrid}>
						<div className={styles[`${daysGridValue}`]}>
							{!!displayedCard &&
								displayedCard.map(card => (
									<Fragment key={card.id}>
										{isSameMonth(card.date, activeDate) && (
											<DayCard
												plannerItemCard={card}
												variant={daysGridValue}
												onClick={onChangeActiveDate}
												isToday={isSameDay(card.date, new Date())}
											/>
										)}

										{!isSameMonth(card.date, activeDate) && <div className={styles.dummy} />}
									</Fragment>
								))}

							{!displayedCard && <p>Loader</p>}
						</div>
					</div>
				</div>
			</ContentWrapper>
		</section>
	)
}

export default Calendar
