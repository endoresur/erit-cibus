import { useTheme } from 'app/context/ThemeContext'
import { Moon, SunMedium } from 'lucide-react'
import styles from './styles.module.scss'
import { cc } from 'utils/combineClasses'

interface Props {
	className?: string
}

const ThemeToggle = ({ className }: Props) => {
	const { theme, onToggleTheme } = useTheme()

	return (
		<div className={cc(styles.themeToggleRoot, className)}>
			<button onClick={onToggleTheme} className={className}>
				{theme === 'dark' ? <Moon /> : <SunMedium />}
			</button>
		</div>
	)
}

export default ThemeToggle
