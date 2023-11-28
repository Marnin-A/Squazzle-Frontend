export type PopupSeverity =
	| "success"
	| "info"
	| "warning"
	| "error"
	| undefined;

export type Passwords = {
	password: string;
	confirmPassword: string;
	acceptPolicy: boolean;
};

export type AlertType = {
	severity: PopupSeverity;
	title: string;
	message: string;
	open: boolean;
	container?: Element | ((element: Element) => Element) | null | undefined;
};

export type Popup = { state: boolean; message: string; type: PopupSeverity };

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
export type SimulatedResponse = {
	data: {
		message: string;
		status: "success";
	};
};
export type SimulatedOTPResponse = {
	data: {
		message: string;
	};
	status: "success" | "error" | "idle" | "pending";
	isError: boolean;
	isSuccess: boolean;
};

export type FailedSignupResponse = {
	success: false;
	error: string;
	message: string;
};
export type Endpoint =
	| "/api/v1/auth/signup"
	| "/api/v1/auth/activateAccount"
	| "/api/v1/auth/signIn"
	| "/api/v1/auth/resetPassword"
	| "/api/v1/auth/resendOTP"
	| "/api/v1/auth/refreshToken";

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
$2b$12$Kbp0cT;
