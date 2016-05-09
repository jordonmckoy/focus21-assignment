export const VALID = 'VALID_EMAIL'
export const LOGGED_OUT = 'LOGGED_OUT'

export function validEmail() {
	return {
		type: VALID,
		email
	}
}

export function loggedOut() {
	return {
		type: LOGGED_OUT,
		email
	}
}