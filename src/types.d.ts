export type PopupSeverity = "success" | "info" | "warning" | "error";

export type Passwords = {
	password: string;
	confirmPassword: string;
	acceptedPolicy: boolean;
};
export type AlertType = {
	severity: PopupSeverity;
	title: string;
	message: string;
};
export type PopupType = { state: boolean; message: string };
export type ApiResponse = SuccessfulSignupResponse | FailedSignupResponse;
export type SuccessfulSignupResponse = {
	data: {
		user: {
			OTP: number;
			createdAt: Date;
			email: string;
			firstName: string;
			isActive: boolean;
			isEmailVerified: boolean;
			lastName: string;
			otpExpiresAt: number;
			passwordDigest: string;
			phoneNumber: number;
			profileImage: string;
			role: string;
			updatedAt: string;
			__v: number;
			_id: number;
		};
		message: string;
		status: "success";
	};
};

export type FailedSignupResponse = {
	success: false;
	error: string;
	message: string;
};

// {
// 	data: {
// 		user: {
// 			OTP: 638270;
// 			createdAt: "2023-11-25T20:18:35.790Z";
// 			email: "msmaudu2.0@gmail.com";
// 			firstName: "Marnin";
// 			isActive: true;
// 			isEmailVerified: false;
// 			lastName: "Audu";
// 			otpExpiresAt: 1700944114317;
// 			passwordDigest: "$2b$12$Kbp0cTHzUWQUHa1oId9ZDeyieSL6gWoQANXJGYtI1zpFKahwrE2zi";
// 			phoneNumber: "8012345678";
// 			profileImage: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg";
// 			role: "user";
// 			updatedAt: "2023-11-25T20:18:35.790Z";
// 			__v: 0;
// 			_id: "6562569b932e559d666c6b00";
// 		}
// 		message: "Account successfully created, Check your mail for activation code";
// 		status: "success";
// 	}
// }
