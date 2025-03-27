import { StrictMode } from 'react'
import { RouterProvider } from '@tanstack/react-router'

import './styles/colors.scss'
import './styles/fonts.scss'
import './styles/global.scss'
import './styles/normalize.css'
import './styles/root-variables.scss'
import { router } from './constants/router'

function App() {
	return (
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>
	)
}

export default App
