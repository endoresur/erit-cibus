export enum ScheduleBlockVarints {
	EVENT = 'event',
	MEAL = 'meal',
	NOTE = 'note'
}

export enum WeekDays {
	MON = 'mon',
	TUE = 'tue',
	WED = 'wed',
	THU = 'thu',
	FRI = 'fri',
	SAT = 'sat',
	SUN = 'sun'
}

export enum Months {
	JAN = 'jan',
	FEB = 'feb',
	MAR = 'mar',
	APR = 'apr',
	MAY = 'may',
	JUN = 'jun',
	JUL = 'jul',
	AUG = 'aug',
	SEP = 'sep',
	OCT = 'oct',
	NOV = 'nov',
	DEC = 'dec'
}

export const montIndexToMonth: Record<number, Months> = {
	0: Months.JAN,
	1: Months.FEB,
	2: Months.MAR,
	3: Months.APR,
	4: Months.MAY,
	5: Months.JUN,
	6: Months.JUL,
	7: Months.AUG,
	8: Months.SEP,
	9: Months.OCT,
	10: Months.NOV,
	11: Months.DEC
}

export const monthsNames: Record<Months, string> = {
	[Months.JAN]: 'Январь',
	[Months.FEB]: 'Февраль',
	[Months.MAR]: 'Март',
	[Months.APR]: 'Апрель',
	[Months.MAY]: 'Май',
	[Months.JUN]: 'Июнь',
	[Months.JUL]: 'Июль',
	[Months.AUG]: 'Август',
	[Months.SEP]: 'Сентябрь',
	[Months.OCT]: 'Октябрь',
	[Months.NOV]: 'Ноябрь',
	[Months.DEC]: 'Декабрь'
}

export const weekDaysNames: Record<WeekDays, string> = {
	[WeekDays.MON]: 'Понедельник',
	[WeekDays.TUE]: 'Вторник',
	[WeekDays.WED]: 'Среда',
	[WeekDays.THU]: 'Четверг',
	[WeekDays.FRI]: 'Пятница',
	[WeekDays.SAT]: 'Суббота',
	[WeekDays.SUN]: 'Воскресенье'
}

export enum DayIntervals {
	MORNING = 'morning',
	AFTERNOON = 'afternoon',
	EVENING = 'evening',
	NIGHT = 'night'
}

export const dayIntervalsNames: Record<DayIntervals, string> = {
	[DayIntervals.MORNING]: 'Утро',
	[DayIntervals.AFTERNOON]: 'День',
	[DayIntervals.EVENING]: 'Вечер',
	[DayIntervals.NIGHT]: 'Ночь'
}

export interface DailyEntry {
	id: string
	title: string
	description: string
}

export interface PlannerItemCard {
	id: string
	date: string
	breakfast?: DailyEntry
	lunch?: DailyEntry
	dinner?: DailyEntry
	notes?: DailyEntry[]
}
