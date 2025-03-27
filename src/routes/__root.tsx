import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Header from 'ui/widgets/Header'

export const Route = createRootRoute({
	component: () => (
		<>
			<Header />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	)
})
