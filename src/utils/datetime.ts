import { isValid, set } from 'date-fns'
import { WeekDays } from 'ui/widgets/Calendar/types'

export const joinDatetimeISO = (date: Date, time: Date) => {
	const isValidDate = isValid(date)
	const isValidTime = isValid(time)
	if (isValidDate && isValidTime) {
		return set(date, { hours: time.getHours(), minutes: time.getMinutes() }).toISOString()
	}
	return ''
}

export function getWeekDayByIndex(index: number): WeekDays | undefined {
	const weekDaysArray = Object.values(WeekDays)

	if (index >= 0 && index < weekDaysArray.length) {
		return weekDaysArray[index] as WeekDays
	}

	return undefined
}

export function getWeekDayIndexByDate(dateStr: string) {
	const date = new Date(dateStr)

	const getWeekDayIndex = (day: number) => {
		if (day === 0) {
			return 6
		} else {
			return day - 1
		}
	}

	return getWeekDayIndex(date.getDay())
}
