export class DateUtils {
	private constructor() {}
	
	public static calculateAgeFromBirthDate(birthDate: Date) {
		const today = new Date()
		let age = today.getFullYear() - birthDate.getFullYear()
		const m = today.getMonth() - birthDate.getMonth()
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--
		}
		return age
	}
}
