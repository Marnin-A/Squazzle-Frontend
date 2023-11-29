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
