export type DayCardVariant = 'small' | 'default' | 'large' | 'cell'

export interface DayeCardBaseProps {
	date: string
	variant?: DayCardVariant
	className?: string
}
