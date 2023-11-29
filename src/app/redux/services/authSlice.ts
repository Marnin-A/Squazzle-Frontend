import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import * as Types from "@/types/authTypes";

// Define an abort controller to stop requests if the user chooses
export const SignInAbortController = new AbortController();
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
				signal: SignInAbortController.signal,
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
} = authApi;
