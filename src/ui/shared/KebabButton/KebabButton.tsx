import { JSX } from 'react'
import styles from './styles.module.scss'
import { ActionOption } from 'types/common'
import { useHover } from '@uidotdev/usehooks'
import { cc } from 'utils/combineClasses'

interface Props {
	items: ActionOption[]
	children: JSX.Element
	position?: 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'
	className?: string
}

const KebabButton = ({ items, children, position = 'leftBottom', className }: Props) => {
	const [rootRef, isHovered] = useHover()
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

			{isHovered && (
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
