import * as yup from "yup";

export const passwordSchema = yup.object().shape({
	password: yup
		.string()
		.required("*Password is required")
		.min(8, "*Password must have at least 8 charaters")
		.matches(RegExp("(.*[a-z].*)"), "*Must contain at least one lowercase")
		.matches(RegExp("(.*[A-Z].*)"), "*Must contain at least one uppercase")
		.matches(RegExp("(.*\\d.*)"), "*Must contain at least one number")
		.matches(
			RegExp('[!@#$%^&*(),.?":{}|<>]'),
			"*Must contain at least one special"
		),
	confirmPassword: yup
		.string()
		.required("*Confirm password is required")
		.oneOf([yup.ref("password")], "*Passwords do not match"),
	acceptPolicy: yup.boolean().required("Checkbox must be checked"),
});
export const emailSchema = yup.object().shape({
	email: yup.string().email("*Invalid email").required("*Email is required"),
});
export const userProfileSchema = yup.object().shape({
	firstName: yup
		.string()
		.required("First Name is required")
		.min(2, "First Name must be greater than 2 characters"),
	lastName: yup
		.string()
		.required("First Name is required")
		.min(2, "First Name must be greater than 2 characters"),
	email: yup.string().email("*Invalid email").required("*Email is required"),
	occupation: yup.string().required("*Occupation is required"),
	gender: yup.string().oneOf(["Male", "Female"]).required("Gender is required"),
	state: yup.string().required("*State is required"),
	city: yup.string().required("*City is required"),
	NIN: yup.number().required("*NIN is required"),
	phoneNumber: yup.number().required("*Phone Number is required"),
	about: yup
		.string()
		.required("*About is required")
		.min(20, "About can't be less than 20 characters")
		.max(500, "About can't be more than 500 characters"),
});
export const overviewFormSchema = yup.object().shape({
	accommodationName: yup.string().required("*Accommodation Name is required"),
	location: yup.string().required("*Location is required"),
	accommodationType: yup
		.string()
		.oneOf([
			"Duplex",
			"Apartment",
			"Single room",
			"Bungalow",
			"Flat",
			"Studio",
			"Mansion",
		])
		.required("*Select an accommodation type"),
	availability: yup
		.string()
		.oneOf(["Available", "Not available"])
		.required("*Select availability"),
	accommodationPrice: yup.number().required("*Accommodation Price is required"),
	startDate: yup.date().required(),
	endDate: yup.date().required(),
});
