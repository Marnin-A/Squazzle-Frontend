import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import * as Types from "@/types/authTypes";
import { ValidateOtpResponse } from "@/types/authTypes";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
	reducerPath: "services",
	baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_SERVER_URL }),
	endpoints: (builder) => ({
		signUp: builder.mutation<Types.ApiResponse, Types.CreateProfileFormData>({
			query: (userData) => ({
				url: "/api/v1/auth/signup",
				method: "POST",
				body: userData,
				signal: SignUp_Abort_Controller.signal,
			}),
		}),
		validateOTP: builder.mutation<
			Types.ValidateOtpResponse,
			Types.ValidateOtpRequest
		>({
			query: (data) => ({
				url: "/api/v1/auth/activateAccount",
				method: "POST",
				body: data,
			}),
		}),
		resendOTP: builder.mutation<Types.ValidateOtpResponse, { email: string }>({
			query: (data) => ({
				url: "/api/v1/auth/resendOTP",
				method: "POST",
				body: data,
			}),
		}),
		signIn: builder.mutation<Types.SignInResponse, Types.SignInRequest>({
			query: (data) => ({
				url: "/api/v1/auth/signIn",
				method: "POST",
				body: data,
				signal: SignIn_Abort_Controller.signal,
			}),
		}),
		forgotPassword: builder.mutation<ValidateOtpResponse, string>({
			query: (data) => ({
				url: "/api/v1/auth/forgotPassword",
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
				url: "/api/v1/auth/forgotPasswordOTP",
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
				url: "/api/v1/auth/resendOTP",
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
				url: "/api/v1/auth/resetPassword",
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
				url: "/api/v1/auth/newsletterSignup",
				method: "POST",
				body: data,
				signal: Change_Password_Abort_Controller.signal,
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
} = authApi;

// Define abort controller to cancel requests
export const SignIn_Abort_Controller = new AbortController();
export const SignUp_Abort_Controller = new AbortController();
export const Forgot_Password_Abort_Controller = new AbortController();
export const FP_OTP_Abort_Controller = new AbortController();
export const Change_Password_Abort_Controller = new AbortController();
export const Newsletter_Signup_Abort_Controller = new AbortController();
