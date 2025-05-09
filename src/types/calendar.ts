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
