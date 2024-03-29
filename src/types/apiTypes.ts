export type ValidateOtpResponse =
	| { success: true; message: string }
	| { success: false; message: string; error: string };
export type ValidateOtpRequest = { OTP: string; email: string };
export type FailedResponse = {
	success: false;
	error: string;
	message: string;
};
export type SignUpResponse =
	| {
			data: SuccessfulSignupResponse;
	  }
	| {
			error: {
				status: number | "FETCH_ERROR";
				data: {
					success: true;
					error: string;
					message: string;
				};
			};
	  };
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
				createdAt: string;
				email: string;
				firstName: string;
				isEmailVerified: boolean;
				lastName: string;
				otpExpiresAt: number;
				passwordDigest: string;
				phoneNumber: string;
				profileImage: string;
				role: "user" | "admin";
				updatedAt: string;
				__v: number;
				_id: string;
			};
		};
	};
};
export type SignInFailed = { success: false };
export type myListings = {
	data: Array<{ name: string; url: string; propertyId: string }>;
	success: true;
};
export type PropertyDetails = {
	data: {
		accomodation: {
			accommodationName: string;
			propertyId: string;
			description: string;
			price: string;
			accommodationType:
				| "Duplex"
				| "Apartment"
				| "Single room"
				| "Bungalow"
				| "Flat"
				| "Studio"
				| "Mansion";
			status?: "available" | "not available";
			hostingPeriodTo: string;
			gallery: Array<{ name: string; url: string } | undefined>;
			address: string;
			whyListing: string;
			accomodationRules: Array<string>;
			hostingPeriodFrom: string;
			state: string;
			city: string;
		};
	};
	status: "success";
	message: string;
};
export type PropertyDetailsResponse = {
	status: "success";
	message: "Accomodation fetch successfully";
	data: {
		accomodation: {
			accommodationName: string;
			propertyId: string;
			description: string;
			price: string;
			accommodationType:
				| "Duplex"
				| "Apartment"
				| "Single room"
				| "Bungalow"
				| "Flat"
				| "Studio"
				| "Mansion";
			status?: "available" | "not available";
			hostingPeriodTo: string;
			address: string;
			whyListing: string;
			accommodationRules: Array<string>;
			hostingPeriodFrom: string;
			state: string;
			city: string;
			gallery: Array<{ imageId: string; imageUrl: string }>;
			createdAt: Date;
			createdBy: string;
			updatedAt: Date;
		};
	};
};
export interface TAccommodationsResponseSuccess {
	status: "success";
	message: "Accomodations fetch successfully";
	data: {
		accomodation: Array<{
			_id: string;
			createdBy: string;
			accommodationName: string;
			state: string;
			city: string;
			description: string;
			whyListing: string;
			accommodationType: string;
			accommodationRules: Array<string>;
			price: number;
			status: "available" | "not available";
			hostingPeriodFrom: string;
			hostingPeriodTo: string;
			address: string;
			gallery: Array<{
				imageId: string;
				imageUrl: string;
			}>;
			createdAt: Date;
			updatedAt: Date;
			__v: number;
		}>;
	};
}
export type TAccommodationsResponseFailed = {
	status: number;
	error: string;
	message: string;
};
export type TUserDataResponseSuccess = {
	status: "success";
	message: "Profile fetch successfully";
	data: {
		profile: {
			_id: string;
			firstName: string;
			lastName: string;
			email: string;
			phoneNumber: string;
			isEmailVerified: boolean;
			profilePicture: string;
			role: "user" | "admin";
			passwordDigest: string;
			createdAt: Date;
		};
	};
};
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
