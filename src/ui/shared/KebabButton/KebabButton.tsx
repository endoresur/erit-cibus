import { JSX, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { ActionOption } from 'types/common'
import { useHover } from '@uidotdev/usehooks'
import { cc } from 'utils/combineClasses'
import { debounce } from 'utils/common'

interface Props {
	items: ActionOption[]
	children: JSX.Element
	position?: 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'
	delay?: number
	className?: string
}

const KebabButton = ({ items, children, position = 'leftBottom', delay = 0, className }: Props) => {
	const [rootRef, isHovered] = useHover()
	const [isCurrentHovered, setIsCurrentHovered] = useState(false)

	useEffect(() => {
		debounce(() => setIsCurrentHovered(isHovered), delay)()
	}, [isHovered])

	return (
		<div className={cc(styles.kebabButtonRoot, className)} ref={rootRef}>
			<button
				type="button"
				className={styles.button}
				aria-haspopup="true"
				aria-expanded={isHovered}
			>
				{children}
			</button>

			{isCurrentHovered && (
				<ul className={cc(styles.list, styles[position])}>
					{items.map((item, index) => (
						<li key={index}>
							<button onClick={() => item.onClick({ ...item })}>{item.label}</button>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default KebabButton
