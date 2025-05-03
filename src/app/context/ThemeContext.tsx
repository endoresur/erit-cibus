import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextProps {
	theme: Theme
	onToggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<Theme>('light')

	useEffect(() => {
		const saved = localStorage.getItem('theme') as Theme | null
		const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
		const initial = saved || system

		setTheme(initial)
		document.documentElement.setAttribute('data-theme', initial)
	}, [])

	const onToggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark'

		setTheme(newTheme)
		localStorage.setItem('theme', newTheme)
		document.documentElement.setAttribute('data-theme', newTheme)
	}

	return <ThemeContext.Provider value={{ theme, onToggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeContextProps => {
	const context = useContext(ThemeContext)
	if (!context) {
		throw new Error('useTheme must be used within ThemeProvider')
	}
	return context
}
