import { StrictMode } from 'react'
import { RouterProvider } from '@tanstack/react-router'

import './styles/colors.scss'
import './styles/fonts.scss'
import './styles/global.scss'
import './styles/normalize.css'
import './styles/root-variables.scss'
import { router } from './constants/router'
import { setDefaultOptions } from 'date-fns'
import { ru } from 'date-fns/locale'
import { ThemeProvider } from './context/ThemeContext'

function App() {
	setDefaultOptions({ locale: ru, weekStartsOn: 0 })

	return (
		<StrictMode>
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		</StrictMode>
	)
}

export default App
