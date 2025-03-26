import { LocalStorageKeys } from 'constants/variables'
import { Tokens } from 'models/auth/api'

// CREDENTIALS

export const setAuthCredentials = (data: Tokens) => {
	localStorage.setItem(LocalStorageKeys.ACCESS, data.accessToken)
	localStorage.setItem(LocalStorageKeys.REFRESH, data.refreshToken)
}

export const getRefreshToken = () => {
	return localStorage.getItem(LocalStorageKeys.REFRESH)
}

export const getAccessToken = () => {
	return localStorage.getItem(LocalStorageKeys.ACCESS)
}

export const deleteAuthCredentials = () => {
	localStorage.removeItem(LocalStorageKeys.ACCESS)
	localStorage.removeItem(LocalStorageKeys.REFRESH)
}
