import styles from './styles.module.scss'
import { cc } from 'utils/combineClasses'

export interface CardProps {
	variant: 'cell' | 'default'
	date: string
	event: string
	isDayOff?: boolean
	meal?: string
	note: string
	breakfast?: string
	lunch?: string
	dinner?: string
	shoppingList?: string[]
	calories?: number
	cookingTime: string
	isAllBought: boolean
	theme: 'light' | 'dark'
	className?: string
}

const DayCard = ({
	variant,
	date,
	event,
	meal,
	note,
	breakfast,
	lunch,
	dinner,
	shoppingList,
	calories,
	cookingTime,
	isAllBought,
	theme,
	isDayOff,
	className
}: CardProps) => {
	return (
		<article
			className={cc(styles.card, styles[`card--${variant}`], styles[`card--${theme}`], className)}
		>
			<header className={cc(styles.cardHeader, isDayOff && styles.dayOff)}>
				<time className={styles.date}>{new Date(date).getDate()}</time>
				<p className={styles.event}>{event}</p>
			</header>

			<div className={styles.cardBody}>
				{variant === 'cell' ? (
					<>
						<div className={styles.meal}>🍽️ {meal}</div>
						<div className={styles.note}>📝 {note}</div>
					</>
				) : (
					<>
						<div className={styles.plan}>
							<div>🍳 Завтрак: {breakfast}</div>
							<div>🥗 Обед: {lunch}</div>
							<div>🍲 Ужин: {dinner}</div>
						</div>
						<div className={styles.note}>📝 {note}</div>
						<div className={styles.shopping}>
							<div>🛒 Список покупок:</div>
							<ul>{shoppingList?.map((item, index) => <li key={index}>• {item}</li>)}</ul>
						</div>
					</>
				)}
			</div>

			<footer className={styles.cardFooter}>
				{variant === 'cell' ? (
					<>
						<div className={styles.cookingTime}>⏱️ {cookingTime}</div>
						<div className={cc(styles.bought, styles[`bought--${isAllBought ? 'yes' : 'no'}`])}>
							{isAllBought ? '✅ Все куплено' : '🛍️ Докупить'}
						</div>
					</>
				) : (
					<>
						<div className={styles.calories}>🔥 Калорийность: {calories} ккал</div>
						<div className={styles.cookingTime}>⏱️ Время: {cookingTime}</div>
						<div className={cc(styles.bought, styles[`bought--${isAllBought ? 'yes' : 'no'}`])}>
							{isAllBought ? '✅ Все куплено' : '🛍️ Докупить'}
						</div>
					</>
				)}
			</footer>
		</article>
	)
}

export default DayCard
