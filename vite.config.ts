import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
	plugins: [TanStackRouterVite({ target: 'react', autoCodeSplitting: true }), react(), svgr()],
	resolve: {
		alias: [
			{ find: 'src', replacement: `${__dirname}/src` },
			{ find: 'assets', replacement: `${__dirname}/src/assets` },
			{ find: 'app', replacement: `${__dirname}/src/app` },
			{ find: 'styles', replacement: `${__dirname}/src/styles` },
			{ find: 'utils', replacement: `${__dirname}/src/utils` },
			{ find: 'models', replacement: `${__dirname}/src/models` },
			{ find: 'mock', replacement: `${__dirname}/src/mock` },
			{ find: 'routes', replacement: `${__dirname}/src/routes` },
			{ find: 'ui', replacement: `${__dirname}/src/ui` },
			{ find: 'types', replacement: `${__dirname}/src/types` },
			{ find: 'constants', replacement: `${__dirname}/src/constants` }
		]
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "styles/index.scss" as *;`
			}
		}
	}
})
