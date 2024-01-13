export type ValidateOtpResponse =
	| { success: true; message: string }
	| { success: false; message: string; error: string };
export type ValidateOtpRequest = { otp: number; email: string };
export type FailedResponse = {
	success: false;
	error: string;
	message: string;
};
export type ApiResponse = SuccessfulSignupResponse | FailedResponse;
export type SuccessfulSignupResponse = {
	status: "success";
	message: "Account successfully created, Check your mail for activation code";
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
export type CreateProfileFormData = {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	password: string;
};
export type SignInRequest = {
	email: string;
	password: string;
};
export type SignInResponse = {
	message: string;
} & (SignInSuccessful | SignInFailed);
export type SignInSuccessful = {
	success: true;
	response: {
		accessToken: string;
		refreshToken: string;
		data: {
			user: {
				_id: string;
				firstName: string;
				lastName: string;
				email: string;
				phoneNumber: string;
				isEmailVerified: boolean;
				otpExpiresAt: number;
				profileImage: string;
				role: string;
				passwordDigest: string;
				OTP: number;
				createdAt: Date;
				updatedAt: Date;
				__v: number;
			};
		};
	};
};
export type SignInFailed = { success: false };

// {
//   "status": "success",
//   "message": "Account successfully created, Check your mail for activation code",
//   "data": {
//     "user": {
//       "firstName": "Marnin",
//       "lastName": "Audu",
//       "email": "auduweb@gmail.com",
//       "phoneNumber": "8012345688",
//       "isEmailVerified": false,
//       "otpExpiresAt": 1701172721676,
//       "profileImage": "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
//       "role": "user",
//       "passwordDigest": "$2b$12$5getLFN74j6vfyd6b6suq.2eL1Wr81p/BkQkIoIwNhG9OrNKbDwuO",
//       "OTP": 940271,
//       "isActive": true,
//       "_id": "6565d39ab3c5741a8af12838",
//       "createdAt": "2023-11-28T11:48:42.321Z",
//       "updatedAt": "2023-11-28T11:48:42.321Z",
//       "__v": 0
//     }
//   }
// }
