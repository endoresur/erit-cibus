export interface Option {
	label: string
	value: string
}

export interface ActionOption extends Option {
	onClick: (option: Option) => void
}
