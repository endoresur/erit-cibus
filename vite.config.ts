import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: 'src', replacement: `${__dirname}/src` },
			{ find: 'assets', replacement: `${__dirname}/src/assets` },
			{ find: 'app', replacement: `${__dirname}/src/app` },
			{ find: 'styles', replacement: `${__dirname}/src/styles` },
			{ find: 'utils', replacement: `${__dirname}/src/utils` },
			{ find: 'models', replacement: `${__dirname}/src/models` }
		]
		// alias: {
		// 	app: path.resolve(__dirname, 'src/app'),
		// 	styles: path.resolve(__dirname, 'src/styles'),
		// 	assets: path.resolve(__dirname, 'src/assets'),
		// 	utils: path.resolve(__dirname, 'src/utils'),
		// 	models: path.resolve(__dirname, 'src/models')
		// }
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "styles/index.scss" as *;`
			}
		}
	}
})
