module.exports = {
	// apiUrl: 'http://api.imanga.mobi'
	apiUrl: ' http://localhost:1337',
	apiToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDY0MDEwODQwMjI1ZjFkM2UwZmJiOTYiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1Njc4MzcyNzIsImV4cCI6MTU3MDQyOTI3Mn0.LvmzLrxutKMT1OP1DVMDQiWUsZFmtbeDHKaPWDTru6c',
	apiManga: {
		homeCommicLastUpdateLimit: 18,
		homeCommicLastUpdateSort: 'updatedAt:DESC',

		homeCommicIsFemaleLimit: 12,
		homeCommicIsFemaleSort: 18,
		homeCommicIsFemaleFilter: 'isMale_ne=true',

		homeCommicIsMaleLimit: 12,
		homeCommicIsMaleSort: 18,
		homeCommicIsMaleFilter: 'isMale_eq=true'
		
	}
}