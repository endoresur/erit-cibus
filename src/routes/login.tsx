import { createFileRoute } from '@tanstack/react-router'
import { lazy } from 'react'

const LoginPage = lazy(() => import('ui/pages/LoginPage'))

export const Route = createFileRoute('/login')({
	component: LoginPage
})
