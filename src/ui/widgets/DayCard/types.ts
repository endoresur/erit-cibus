export enum DayCardVariant {
	DEFAULT = 'default',
	LARGE = 'large',
	CELL = 'cell'
}

export type DayEventType = 'event'

export interface DayEvent {
	id: string
	type: DayEventType
	title: string
	description: string
}
