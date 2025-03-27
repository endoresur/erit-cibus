export interface RoundedSide {
	leftTop?: boolean
	rightTop?: boolean
	rightBottom?: boolean
	leftBottom?: boolean
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
