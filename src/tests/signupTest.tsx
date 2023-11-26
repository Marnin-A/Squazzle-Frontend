import {
	ApiResponse,
	SimulatedOTPResponse,
	SimulatedResponse,
	SuccessfulSignupResponse,
} from "@/types";

// Simulate Post Request
export async function simulateApiResponse(): Promise<SimulatedResponse> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				data: {
					status: "success",
					message: "Account created successfully",
				},
			});
		}, 2000);
	});
}

// Simulate OTP Response
export async function simulateOTPResponse(): Promise<SimulatedOTPResponse> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				data: {
					message: "Account verified successfully",
				},
				status: "pending",
				isError: false,
				isSuccess: true,
			});
		}, 2000);
	});
}
