import { createFileRoute } from '@tanstack/react-router'
import { lazy } from 'react'

const MainPage = lazy(() => import('ui/pages/MainPage'))

export const Route = createFileRoute('/')({
	component: MainPage
})
