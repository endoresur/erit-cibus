import { Option } from 'types/common'
import styles from './styles.module.scss'
import { cc } from 'utils/combineClasses'

interface Props<T> {
	options: Option[]
	onChange: (value: T) => void
	defaultValue?: T
	className?: string
}

const MultiSwitch = <T extends string>({
	options,
	onChange,
	defaultValue,
	className
}: Props<T>) => {
	return (
		<div className={cc(styles.multiSwitchRoot, className)} role="group">
			{options.map(option => (
				<button
					key={option.value}
					type="button"
					className={`${styles.optionButton} ${defaultValue === option.value ? styles.active : ''}`}
					onClick={() => onChange(option.value as T)}
					aria-pressed={defaultValue === option.value}
				>
					{option.label}
				</button>
			))}
		</div>
	)
}

export default MultiSwitch
