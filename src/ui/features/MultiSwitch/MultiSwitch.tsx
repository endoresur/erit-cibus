import { Option } from 'types/common'
import styles from './styles.module.scss'
import { cc } from 'utils/combineClasses'

interface Props {
	options: Option[]
	onChange: (value: string) => void
	defaultValue?: string
	className?: string
}

const MultiSwitch = ({ options, onChange, defaultValue, className }: Props) => {
	return (
		<div className={cc(styles.multiSwitchRoot, className)} role="group">
			{options.map(option => (
				<button
					key={option.value}
					type="button"
					className={`${styles.optionButton} ${defaultValue === option.value ? styles.active : ''}`}
					onClick={() => onChange(option.value)}
					aria-pressed={defaultValue === option.value}
				>
					{option.label}
				</button>
			))}
		</div>
	)
}

export default MultiSwitch
