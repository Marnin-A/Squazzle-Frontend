import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import * as Types from "@/types/apiTypes";
import { ValidateOtpResponse } from "@/types/apiTypes";
import { UserProfileData } from "@/components/editProfile/profileForm";

// Define a service using a base URL and expected endpoints
export const api = createApi({
	reducerPath: "services",
	baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_SERVER_URL }),
	endpoints: (builder) => ({
		signUp: builder.mutation<Types.SignUpResponse, Types.CreateProfileFormData>(
			{
				query: (userData) => ({
					url: "auth/signUp",
					method: "POST",
					body: userData,
					signal: SignUp_Abort_Controller.signal,
				}),
			}
		),
		validateOTP: builder.mutation<
			Types.ValidateOtpResponse,
			Types.ValidateOtpRequest
		>({
			query: (data) => ({
				url: "auth/activateAccount",
				method: "POST",
				body: data,
			}),
		}),
		resendOTP: builder.mutation<Types.ValidateOtpResponse, { email: string }>({
			query: (data) => ({
				url: "auth/resendOTP",
				method: "POST",
				body: data,
			}),
		}),
		signIn: builder.mutation<Types.SignInResponse, Types.SignInRequest>({
			query: (data) => ({
				url: "auth/signIn",
				method: "POST",
				body: data,
				signal: SignIn_Abort_Controller.signal,
			}),
		}),
		forgotPassword: builder.mutation<ValidateOtpResponse, string>({
			query: (data) => ({
				url: "auth/forgotPassword",
				method: "POST",
				body: data,
				signal: Forgot_Password_Abort_Controller.signal,
				cache: "no-cache",
			}),
		}),
		forgotPasswordOTP: builder.mutation<
			Types.ValidateOtpResponse,
			Types.ValidateOtpRequest
		>({
			query: (data) => ({
				// Endpoint not yet resolved
				url: "auth/forgotPasswordOTP",
				method: "POST",
				body: data,
				signal: FP_OTP_Abort_Controller.signal,
				cache: "no-cache",
			}),
		}),
		resendPasswordOTP: builder.mutation<
			Types.ValidateOtpResponse,
			{ email: string }
		>({
			query: (data) => ({
				// Endpoint not yet resolved
				url: "auth/resendOTP",
				method: "POST",
				body: data,
			}),
		}),
		changePassword: builder.mutation<
			Types.ValidateOtpResponse,
			{ password: string; confirmPassword: string }
		>({
			query: (data) => ({
				// Endpoint not yet resolved
				url: "auth/resetPassword",
				method: "POST",
				body: data,
				signal: Change_Password_Abort_Controller.signal,
			}),
		}),
		newsletterSignup: builder.mutation<
			Types.ValidateOtpResponse,
			{ email: string }
		>({
			query: (data) => ({
				// Endpoint not yet resolved
				url: "auth/newsletterSignup",
				method: "POST",
				body: data,
				signal: Newsletter_Signup_Abort_Controller.signal,
			}),
		}),
		updateProfile: builder.mutation<
			Types.TUpdateProfileResponse,
			{ userId: string; userInfo: FormData; token: string }
		>({
			query: (data) => ({
				headers: { Authorization: `Bearer ${data.token}` },
				url: `users/${data.userId}`,
				method: "PATCH",
				body: data.userInfo,
				signal: Update_Profile_Abort_Controller.signal,
			}),
		}),
		listAccommodation: builder.mutation<
			any,
			{ formData: FormData; token: string }
		>({
			query: (data) => ({
				headers: { Authorization: `Bearer ${data.token}` },
				url: "accommodations",
				method: "POST",
				body: data.formData,
			}),
		}),
		getMyListings: builder.query<
			Types.myListings | { error: string; message: string; success: false },
			{ token: string }
		>({
			query: (data) => ({
				url: "users/accommodations/",
				method: "GET",
				headers: { Authorization: `Bearer ${data.token}` },
			}),
		}),
		getPropertyDetails: builder.query<
			| Types.PropertyDetailsResponse
			| { error: string; message: string; success: false },
			{ propertyId: string }
		>({
			query: (data) => ({
				url: `accommodations/${data.propertyId}`,
				method: "GET",
			}),
		}),
		// getProperties: builder.query<Types.TAccommodations, any>({
		// 	query: () => ({
		// 		url: `accommodations`,
		// 		method: "GET",
		// 	}),
		// }),
		getUserDetails: builder.query<
			| Types.TUserDataResponseSuccess
			| { error: string; message: string; success: false },
			{ userId: string; token: string }
		>({
			query: (data) => ({
				url: `users/profile/${data.userId}`,
				method: "GET",
				headers: { Authorization: `Bearer ${data.token}` },
			}),
		}),
		deleteAccount: builder.mutation<any, { email: string }>({
			query: (data) => ({
				// Endpoint not yet resolved
				url: "deleteAccount",
				method: "POST",
				body: data,
			}),
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
	useSignUpMutation,
	useValidateOTPMutation,
	useResendOTPMutation,
	useSignInMutation,
	useForgotPasswordMutation,
	useForgotPasswordOTPMutation,
	useResendPasswordOTPMutation,
	useChangePasswordMutation,
	useNewsletterSignupMutation,
	useUpdateProfileMutation,
	useGetMyListingsQuery,
	useGetPropertyDetailsQuery,
	useListAccommodationMutation,
	useDeleteAccountMutation,
	useGetUserDetailsQuery,
	// useGetPropertiesQuery,
} = api;

// Define abort controller to cancel requests
export const SignIn_Abort_Controller = new AbortController();
export const SignUp_Abort_Controller = new AbortController();
export const Forgot_Password_Abort_Controller = new AbortController();
export const FP_OTP_Abort_Controller = new AbortController();
export const Change_Password_Abort_Controller = new AbortController();
export const Newsletter_Signup_Abort_Controller = new AbortController();
export const Update_Profile_Abort_Controller = new AbortController();
