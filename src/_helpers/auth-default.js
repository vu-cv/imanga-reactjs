export function authDefault() {
	let jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDY0MDEwODQwMjI1ZjFkM2UwZmJiOTYiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1Njc4MzcyNzIsImV4cCI6MTU3MDQyOTI3Mn0.LvmzLrxutKMT1OP1DVMDQiWUsZFmtbeDHKaPWDTru6c';

	return {'Authorization': 'Bearer ' + jwt };

}